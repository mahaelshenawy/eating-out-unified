// Audio Generation System for High-Quality Pronunciation

class AudioGenerator {
    constructor() {
        this.audioCache = new Map();
        this.isGenerating = false;
        this.generationQueue = [];
        this.initializeSpeechSynthesis();
    }

    initializeSpeechSynthesis() {
        // Wait for voices to load
        if (speechSynthesis.getVoices().length === 0) {
            speechSynthesis.addEventListener('voiceschanged', () => {
                this.selectBestVoice();
            });
        } else {
            this.selectBestVoice();
        }
    }

    selectBestVoice() {
        const voices = speechSynthesis.getVoices();
        
        // Prefer Google US English Female as primary voice
        const preferredVoices = [
            'Google US English Female',
            'Google US English',
            'Microsoft Zira - English (United States)',
            'Microsoft Zira Desktop - English (United States)',
            'Samantha',
            'Karen',
            'Victoria',
            'Microsoft David - English (United States)',
            'Daniel',
            'Alex'
        ];

        // Find the best available voice
        this.selectedVoice = null;
        for (const preferred of preferredVoices) {
            const voice = voices.find(v => v.name === preferred || v.name.includes(preferred));
            if (voice) {
                this.selectedVoice = voice;
                break;
            }
        }

        // Fallback to any English voice
        if (!this.selectedVoice) {
            this.selectedVoice = voices.find(v => v.lang.startsWith('en')) || voices[0];
        }

        console.log('Selected voice:', this.selectedVoice?.name || 'Default');
        console.log('Available voices:', voices.filter(v => v.lang.startsWith('en')).map(v => v.name));
    }
    
    getVoiceForSpeaker(speaker) {
        const voices = speechSynthesis.getVoices();
        
        // Map speakers to different voices
        const voiceMap = {
            'Host': 'Google US English Female',
            'Server': 'Google US English',
            'Customer': 'Google US English Female',
            'Sarah': 'Google US English Female',
            'Jennifer': 'Google US English Female',
            'Mike': 'Google US English',
            'Tom': 'Google US English',
            'Lisa': 'Google US English Female',
            'Employee': 'Google US English Female',
            'Mom': 'Google US English Female',
            'Dad': 'Google US English',
            'Kid 1': 'Google US English Female',
            'Kid 2': 'Google US English',
            'Guest 1': 'Google US English Female',
            'Guest 2': 'Google US English',
            'Guest 3': 'Google US English Female',
            'Guest 4': 'Google US English',
            'Guest 5': 'Google US English Female',
            'Guest 6': 'Google US English'
        };
        
        const preferredVoiceName = voiceMap[speaker] || 'Google US English Female';
        const voice = voices.find(v => v.name === preferredVoiceName || v.name.includes(preferredVoiceName));
        return voice || this.selectedVoice;
    }

    async generateAudio(text, options = {}) {
        const cacheKey = `${text}_${JSON.stringify(options)}`;
        
        // Return cached audio if available
        if (this.audioCache.has(cacheKey)) {
            return this.audioCache.get(cacheKey);
        }

        return new Promise((resolve, reject) => {
            try {
                const utterance = new SpeechSynthesisUtterance(text);
                
                // Configure speech parameters for clarity and natural sound
                utterance.voice = options.voice || this.selectedVoice;
                utterance.rate = options.rate || 0.9; // Natural speaking pace
                utterance.pitch = options.pitch || 1.0;
                utterance.volume = options.volume || 1.0;
                utterance.lang = 'en-US'; // Ensure English language
                
                // Create audio blob for caching
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const mediaStreamDestination = audioContext.createMediaStreamDestination();
                
                utterance.onstart = () => {
                    console.log(`Generating audio for: "${text}"`);
                };
                
                utterance.onend = () => {
                    // Cache the utterance for reuse
                    this.audioCache.set(cacheKey, utterance);
                    resolve(utterance);
                };
                
                utterance.onerror = (event) => {
                    console.error('Speech synthesis error:', event.error);
                    reject(new Error(`Speech synthesis failed: ${event.error}`));
                };
                
                // Generate the speech
                speechSynthesis.speak(utterance);
                
            } catch (error) {
                console.error('Audio generation error:', error);
                reject(error);
            }
        });
    }

    async playAudio(text, options = {}) {
        try {
            // Stop any currently playing speech
            speechSynthesis.cancel();
            
            // Wait a moment to ensure previous speech is fully stopped
            await new Promise(resolve => setTimeout(resolve, 100));
            
            const utterance = await this.generateAudio(text, options);
            speechSynthesis.speak(utterance);
            
            return new Promise((resolve) => {
                utterance.onend = () => {
                    speechSynthesis.cancel();
                    resolve();
                };
            });
        } catch (error) {
            console.error('Error playing audio:', error);
            throw error;
        }
    }

    stopAudio() {
        speechSynthesis.cancel();
    }

    // Generate audio for all vocabulary words
    async preloadVocabularyAudio() {
        const allWords = [];
        
        // Collect all words from vocabulary data
        Object.values(vocabularyData).forEach(section => {
            Object.values(section.categories).forEach(category => {
                category.words.forEach(wordObj => {
                    allWords.push(wordObj.word);
                    if (wordObj.definition) {
                        allWords.push(wordObj.definition);
                    }
                });
            });
        });

        // Add practice words
        allWords.push(...practiceWords);

        console.log(`Preloading audio for ${allWords.length} words...`);
        
        // Generate audio in batches to avoid overwhelming the system
        const batchSize = 5;
        for (let i = 0; i < allWords.length; i += batchSize) {
            const batch = allWords.slice(i, i + batchSize);
            await Promise.all(batch.map(word => 
                this.generateAudio(word).catch(err => 
                    console.warn(`Failed to generate audio for "${word}":`, err)
                )
            ));
            
            // Small delay between batches
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        
        console.log('Audio preloading complete!');
    }

    // Get available voices for user selection
    getAvailableVoices() {
        return speechSynthesis.getVoices().filter(voice => voice.lang.startsWith('en'));
    }

    // Set voice preference
    setVoice(voiceName) {
        const voices = speechSynthesis.getVoices();
        const voice = voices.find(v => v.name === voiceName);
        if (voice) {
            this.selectedVoice = voice;
            console.log('Voice changed to:', voice.name);
        }
    }

    // Generate conversation audio with multiple speakers
    async generateConversationAudio(dialogue, options = {}) {
        const conversationAudio = [];
        
        for (const line of dialogue) {
            try {
                // Get different voice for each speaker
                const speakerVoice = this.getVoiceForSpeaker(line.speaker);
                const speakerOptions = {
                    rate: options.rate || 0.9,
                    pitch: this.getSpeakerPitch(line.speaker),
                    volume: options.volume || 1.0,
                    voice: speakerVoice
                };
                
                const utterance = await this.generateAudio(line.text, speakerOptions);
                utterance.voice = speakerVoice;
                conversationAudio.push({
                    speaker: line.speaker,
                    utterance: utterance,
                    timestamp: line.timestamp
                });
            } catch (error) {
                console.warn(`Failed to generate audio for ${line.speaker}:`, error);
            }
        }
        
        return conversationAudio;
    }

    getSpeakerPitch(speaker) {
        // Vary pitch slightly for different speakers
        const pitchMap = {
            'Host': 1.0,
            'Server': 1.1,
            'Jennifer': 1.2,
            'Sarah': 1.1,
            'Mike': 0.9,
            'Lisa': 1.15,
            'Tom': 0.85,
            'Employee': 1.0,
            'Customer': 0.95,
            'Mom': 1.1,
            'Dad': 0.9,
            'Kid 1': 1.3,
            'Kid 2': 1.25
        };
        
        return pitchMap[speaker] || 1.0;
    }

    // Play conversation with timing
    async playConversation(conversationAudio, onLineStart = null) {
        for (const line of conversationAudio) {
            if (onLineStart) {
                onLineStart(line.speaker, line.utterance.text);
            }
            
            speechSynthesis.speak(line.utterance);
            
            // Wait for the line to finish
            await new Promise(resolve => {
                line.utterance.onend = resolve;
            });
            
            // Small pause between speakers
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }
}

// Create global audio generator instance
const audioGenerator = new AudioGenerator();

// Initialize audio when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Preload vocabulary audio after a short delay
    setTimeout(() => {
        audioGenerator.preloadVocabularyAudio();
    }, 1000);
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AudioGenerator };
}

