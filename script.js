// Enhanced Interactive Eating Out Vocabulary - Main JavaScript

class EatingOutApp {
    constructor() {
        this.currentSection = 'restaurant-types';
        this.currentConversation = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.conversationAudio = null;
        this.isPlayingConversation = false;
        this.currentDialogueIndex = 0;
        this.currentScenarioIndex = 0;
        this.orderItems = [];
        this.orderTotal = 0;
        this.currentDetectiveIndex = 0;
        this.currentQuizIndex = 0;
        this.quizAnswers = {};
        
        this.init();
    }

    init() {
        this.setupNavigation();
        this.renderRestaurantTypes();
        this.renderMenuVocabulary();
        this.renderGeneralVocabulary();
        this.renderConversations();
        this.renderScenarios();
        this.renderMenuPlanning();
        this.renderPronunciationPractice();
        this.renderActivities();
        this.renderRestaurantDetective();
        this.renderMealTimes();
        this.renderMenuLanguageQuiz();
        this.renderCheatSheets();
        this.setupModals();
        this.updateProgress();
        
        console.log('Enhanced Eating Out Vocabulary App initialized!');
    }

    setupNavigation() {
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const section = btn.dataset.section;
                this.showSection(section);
                this.updateNavigation(btn);
            });
        });
    }

    showSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            this.currentSection = sectionId;
            this.updateProgress();
        }
    }

    updateNavigation(activeBtn) {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        activeBtn.classList.add('active');
    }

    renderRestaurantTypes() {
        const container = document.querySelector('.restaurant-grid');
        if (!container) return;

        let html = '';
        
        Object.values(vocabularyData.restaurantTypes.categories).forEach(category => {
            category.words.forEach(restaurant => {
                html += `
                    <div class="restaurant-card" onclick="app.showRestaurantDetails('${restaurant.word}')">
                        ${restaurant.image ? `<img src="${restaurant.image}" alt="${restaurant.word}" class="restaurant-image">` : '<div class="restaurant-image"></div>'}
                        <div class="restaurant-content">
                            <h3 class="restaurant-title">${restaurant.word}</h3>
                            <p class="restaurant-description">${restaurant.definition}</p>
                            <div class="restaurant-example">${restaurant.example}</div>
                            <button class="audio-btn" onclick="event.stopPropagation(); app.playAudio('${restaurant.word}')">
                                <i class="fas fa-volume-up"></i> Listen
                            </button>
                        </div>
                    </div>
                `;
            });
        });
        
        container.innerHTML = html;
    }

    renderMenuVocabulary() {
        const container = document.querySelector('#menu-vocabulary .vocabulary-categories');
        if (!container) return;

        let html = '';
        
        Object.values(vocabularyData.menuVocabulary.categories).forEach(category => {
            html += `
                <div class="category-card">
                    <h3 class="category-title">
                        <i class="fas fa-utensils"></i>
                        ${category.title}
                    </h3>
                    <div class="vocabulary-list">
                        ${category.words.map(word => `
                            <div class="vocabulary-word" onclick="app.showVocabularyDetails('${word.word}', '${word.definition}', '${word.example}')">
                                <div class="word-title">
                                    ${word.word}
                                    <button class="audio-btn" onclick="event.stopPropagation(); app.playAudio('${word.word}')" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;">
                                        <i class="fas fa-volume-up"></i>
                                    </button>
                                </div>
                                <div class="word-definition">${word.definition}</div>
                                <div class="word-example">${word.example}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }

    renderGeneralVocabulary() {
        const container = document.querySelector('#general-vocabulary .vocabulary-categories');
        if (!container) return;

        let html = '';
        
        Object.values(vocabularyData.generalVocabulary.categories).forEach(category => {
            html += `
                <div class="category-card">
                    <h3 class="category-title">
                        <i class="fas fa-users"></i>
                        ${category.title}
                    </h3>
                    <div class="vocabulary-list">
                        ${category.words.map(word => `
                            <div class="vocabulary-word" onclick="app.showVocabularyDetails('${word.word}', '${word.definition}', '${word.example}')">
                                <div class="word-title">
                                    ${word.word}
                                    <button class="audio-btn" onclick="event.stopPropagation(); app.playAudio('${word.word}')" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;">
                                        <i class="fas fa-volume-up"></i>
                                    </button>
                                </div>
                                <div class="word-definition">${word.definition}</div>
                                <div class="word-example">${word.example}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }

    renderConversations() {
        const container = document.querySelector('.conversations-container');
        if (!container) return;

        let html = '';
        
        conversationsData.forEach(conversation => {
            html += `
                <div class="conversation-card" onclick="app.openConversation('${conversation.id}')">
                    <div class="conversation-header">
                        <h3 class="conversation-title">${conversation.title}</h3>
                        <div class="conversation-meta">
                            <span class="difficulty-badge ${conversation.difficulty.toLowerCase()}">${conversation.difficulty}</span>
                            <span class="duration-badge"><i class="fas fa-clock"></i> ${conversation.duration}</span>
                        </div>
                    </div>
                    <p class="conversation-description">${conversation.description}</p>
                    <div class="characters-list">
                        <div class="characters-title">Characters:</div>
                        <div class="characters">${conversation.characters.join(', ')}</div>
                    </div>
                    <button class="play-conversation-btn">
                        <i class="fas fa-play"></i> Start Conversation
                    </button>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }

    renderPronunciationPractice() {
        const container = document.getElementById('practiceWordsList');
        if (!container) return;

        let html = '';
        practiceWords.forEach(word => {
            html += `
                <button class="practice-word-btn" onclick="app.selectPracticeWord('${word}')">
                    ${word}
                </button>
            `;
        });
        
        container.innerHTML = html;

        // Setup pronunciation controls
        this.setupPronunciationControls();
    }

    setupPronunciationControls() {
        const recordBtn = document.getElementById('recordBtn');
        const stopBtn = document.getElementById('stopRecordBtn');
        const playBtn = document.getElementById('playRecordingBtn');
        const playWordBtn = document.getElementById('playWordBtn');

        if (recordBtn) {
            recordBtn.addEventListener('click', () => {
                const currentWord = document.getElementById('practiceWord').textContent;
                if (currentWord && currentWord !== 'Select a word to practice') {
                    speechRecognition.startRecording(currentWord);
                }
            });
        }

        if (stopBtn) {
            stopBtn.addEventListener('click', () => {
                speechRecognition.stopRecording();
            });
        }

        if (playWordBtn) {
            playWordBtn.addEventListener('click', () => {
                const currentWord = document.getElementById('practiceWord').textContent;
                if (currentWord && currentWord !== 'Select a word to practice') {
                    this.playAudio(currentWord);
                }
            });
        }
    }

    selectPracticeWord(word) {
        // Update word display
        document.getElementById('practiceWord').textContent = word;
        
        // Enable play button
        document.getElementById('playWordBtn').disabled = false;
        document.getElementById('recordBtn').disabled = false;
        
        // Update selected button
        document.querySelectorAll('.practice-word-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        event.target.classList.add('selected');
        
        // Clear previous feedback
        document.getElementById('pronunciationFeedback').innerHTML = '';
        document.getElementById('accuracyScore').innerHTML = '';
    }

    renderActivities() {
        const container = document.querySelector('.activities-grid');
        if (!container) return;

        const activities = [
            {
                icon: 'fas fa-puzzle-piece',
                title: 'Vocabulary Matching',
                description: 'Match restaurant vocabulary words with their definitions',
                action: 'startVocabularyMatching'
            },
            {
                icon: 'fas fa-question-circle',
                title: 'Quick Quiz',
                description: 'Test your knowledge with timed questions',
                action: 'startQuickQuiz'
            },
            {
                icon: 'fas fa-headphones',
                title: 'Listening Practice',
                description: 'Listen to vocabulary words and identify them',
                action: 'startListeningPractice'
            },
            {
                icon: 'fas fa-utensils',
                title: 'Menu Builder',
                description: 'Create a restaurant menu using vocabulary words',
                action: 'startMenuBuilder'
            },
            {
                icon: 'fas fa-comments',
                title: 'Role Play',
                description: 'Practice restaurant conversations with different roles',
                action: 'startRolePlay'
            },
            {
                icon: 'fas fa-trophy',
                title: 'Challenge Mode',
                description: 'Complete all activities to earn achievements',
                action: 'startChallengeMode'
            }
        ];

        let html = '';
        activities.forEach(activity => {
            html += `
                <div class="activity-card" onclick="app.${activity.action}()">
                    <div class="activity-icon">
                        <i class="${activity.icon}"></i>
                    </div>
                    <h3 class="activity-title">${activity.title}</h3>
                    <p class="activity-description">${activity.description}</p>
                    <button class="activity-btn">Start Activity</button>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }

    setupModals() {
        // Conversation modal
        const conversationModal = document.getElementById('conversationModal');
        const closeModal = document.getElementById('closeModal');
        
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                this.closeConversationModal();
            });
        }

        // Vocabulary modal
        const vocabularyModal = document.getElementById('vocabularyModal');
        const closeVocabModal = document.getElementById('closeVocabModal');
        
        if (closeVocabModal) {
            closeVocabModal.addEventListener('click', () => {
                this.closeVocabularyModal();
            });
        }

        // Close modals when clicking outside
        window.addEventListener('click', (event) => {
            if (event.target === conversationModal) {
                this.closeConversationModal();
            }
            if (event.target === vocabularyModal) {
                this.closeVocabularyModal();
            }
        });
    }

    async playAudio(text, options = {}) {
        try {
            await audioGenerator.playAudio(text, options);
        } catch (error) {
            console.error('Error playing audio:', error);
            // Fallback to basic speech synthesis
            const utterance = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(utterance);
        }
    }

    showRestaurantDetails(restaurantName) {
        // Find restaurant data
        let restaurantData = null;
        Object.values(vocabularyData.restaurantTypes.categories).forEach(category => {
            const found = category.words.find(r => r.word === restaurantName);
            if (found) restaurantData = found;
        });

        if (!restaurantData) return;

        this.showVocabularyDetails(restaurantData.word, restaurantData.definition, restaurantData.example);
    }

    showVocabularyDetails(word, definition, example) {
        const modal = document.getElementById('vocabularyModal');
        const title = document.getElementById('vocabularyTitle');
        const content = document.getElementById('vocabularyContent');

        title.textContent = word;
        content.innerHTML = `
            <div class="vocabulary-detail">
                <h4>${word}</h4>
                <p class="definition"><strong>Definition:</strong> ${definition}</p>
                <p class="example"><strong>Example:</strong> ${example}</p>
                <div class="audio-controls">
                    <button class="audio-btn" onclick="app.playAudio('${word}')">
                        <i class="fas fa-volume-up"></i> Listen to Word
                    </button>
                    <button class="audio-btn" onclick="app.playAudio('${definition}')">
                        <i class="fas fa-volume-up"></i> Listen to Definition
                    </button>
                </div>
            </div>
        `;

        modal.classList.add('active');
    }

    closeVocabularyModal() {
        const modal = document.getElementById('vocabularyModal');
        modal.classList.remove('active');
    }

    openConversation(conversationId) {
        this.currentConversation = conversationsData.find(c => c.id === conversationId);
        if (!this.currentConversation) return;

        const modal = document.getElementById('conversationModal');
        const title = document.getElementById('conversationTitle');
        const conversationText = document.getElementById('conversationText');
        const questionsContainer = document.getElementById('questionsContainer');

        title.textContent = this.currentConversation.title;
        
        // Render dialogue
        let dialogueHtml = '';
        this.currentConversation.dialogue.forEach((line, index) => {
            dialogueHtml += `
                <div class="dialogue-line" id="dialogue-${index}">
                    <div class="speaker">${line.speaker}:</div>
                    <div class="dialogue-text">${line.text}</div>
                </div>
            `;
        });
        conversationText.innerHTML = dialogueHtml;

        // Render questions
        let questionsHtml = '';
        this.currentConversation.questions.forEach((question, index) => {
            questionsHtml += `
                <div class="question" data-question="${index}">
                    <div class="question-text">${index + 1}. ${question.question}</div>
                    <div class="question-options">
                        ${question.options.map((option, optionIndex) => `
                            <div class="option" data-option="${optionIndex}" onclick="app.selectAnswer(${index}, ${optionIndex})">
                                ${String.fromCharCode(65 + optionIndex)}. ${option}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        questionsContainer.innerHTML = questionsHtml;

        // Setup conversation controls
        this.setupConversationControls();

        // Reset state
        this.userAnswers = [];
        this.currentDialogueIndex = 0;
        document.getElementById('resultsContainer').innerHTML = '';

        modal.classList.add('active');
    }

    setupConversationControls() {
        const playBtn = document.getElementById('playConversationBtn');
        const pauseBtn = document.getElementById('pauseConversationBtn');
        const checkBtn = document.getElementById('checkAnswersBtn');

        if (playBtn) {
            playBtn.onclick = () => this.playConversation();
        }

        if (pauseBtn) {
            pauseBtn.onclick = () => this.pauseConversation();
        }

        if (checkBtn) {
            checkBtn.onclick = () => this.checkAnswers();
        }
    }

    async playConversation() {
        if (!this.currentConversation) return;

        this.isPlayingConversation = true;
        const playBtn = document.getElementById('playConversationBtn');
        const pauseBtn = document.getElementById('pauseConversationBtn');

        playBtn.disabled = true;
        pauseBtn.disabled = false;

        try {
            for (let i = 0; i < this.currentConversation.dialogue.length; i++) {
                if (!this.isPlayingConversation) break;

                const line = this.currentConversation.dialogue[i];
                this.currentDialogueIndex = i;

                // Highlight current line
                document.querySelectorAll('.dialogue-line').forEach(el => el.classList.remove('current'));
                document.getElementById(`dialogue-${i}`).classList.add('current');

                // Play audio with speaker-specific voice
                await this.playAudio(line.text, {
                    pitch: audioGenerator.getSpeakerPitch(line.speaker),
                    rate: 0.8
                });

                // Pause between lines
                await new Promise(resolve => setTimeout(resolve, 800));
            }
        } catch (error) {
            console.error('Error playing conversation:', error);
        }

        this.isPlayingConversation = false;
        playBtn.disabled = false;
        pauseBtn.disabled = true;

        // Remove highlighting
        document.querySelectorAll('.dialogue-line').forEach(el => el.classList.remove('current'));
    }

    pauseConversation() {
        this.isPlayingConversation = false;
        audioGenerator.stopAudio();
        
        const playBtn = document.getElementById('playConversationBtn');
        const pauseBtn = document.getElementById('pauseConversationBtn');
        
        playBtn.disabled = false;
        pauseBtn.disabled = true;
    }

    selectAnswer(questionIndex, optionIndex) {
        this.userAnswers[questionIndex] = optionIndex;
        
        // Update UI
        const question = document.querySelector(`[data-question="${questionIndex}"]`);
        question.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected');
        });
        question.querySelector(`[data-option="${optionIndex}"]`).classList.add('selected');
    }

    checkAnswers() {
        if (!this.currentConversation) return;

        let correctCount = 0;
        const totalQuestions = this.currentConversation.questions.length;

        this.currentConversation.questions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const correctAnswer = question.correct;
            const questionElement = document.querySelector(`[data-question="${index}"]`);
            
            questionElement.querySelectorAll('.option').forEach((option, optionIndex) => {
                option.classList.remove('correct', 'incorrect');
                
                if (optionIndex === correctAnswer) {
                    option.classList.add('correct');
                }
                
                if (userAnswer === optionIndex && optionIndex !== correctAnswer) {
                    option.classList.add('incorrect');
                }
            });

            if (userAnswer === correctAnswer) {
                correctCount++;
            }

            // Show explanation
            if (!questionElement.querySelector('.explanation')) {
                const explanationDiv = document.createElement('div');
                explanationDiv.className = 'explanation';
                explanationDiv.innerHTML = `<strong>Explanation:</strong> ${question.explanation}`;
                explanationDiv.style.marginTop = '1rem';
                explanationDiv.style.padding = '1rem';
                explanationDiv.style.background = '#f7fafc';
                explanationDiv.style.borderRadius = '8px';
                explanationDiv.style.fontSize = '0.9rem';
                questionElement.appendChild(explanationDiv);
            }
        });

        // Show results
        const percentage = Math.round((correctCount / totalQuestions) * 100);
        const resultsContainer = document.getElementById('resultsContainer');
        
        let resultClass = 'needs-improvement';
        let resultMessage = 'Keep practicing!';
        
        if (percentage >= 80) {
            resultClass = 'excellent';
            resultMessage = 'Excellent work!';
        } else if (percentage >= 60) {
            resultClass = 'good';
            resultMessage = 'Good job!';
        }

        resultsContainer.innerHTML = `
            <div class="results ${resultClass}">
                <h4>${resultMessage}</h4>
                <p>You got ${correctCount} out of ${totalQuestions} questions correct (${percentage}%)</p>
            </div>
        `;
    }

    closeConversationModal() {
        const modal = document.getElementById('conversationModal');
        modal.classList.remove('active');
        this.pauseConversation();
        this.currentConversation = null;
    }

    renderScenarios() {
        if (typeof scenariosData === 'undefined') return;
        
        this.currentScenarioIndex = 0;
        this.displayScenario(0);
        
        const prevBtn = document.getElementById('prevScenario');
        const nextBtn = document.getElementById('nextScenario');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (this.currentScenarioIndex > 0) {
                    this.currentScenarioIndex--;
                    this.displayScenario(this.currentScenarioIndex);
                }
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (this.currentScenarioIndex < scenariosData.length - 1) {
                    this.currentScenarioIndex++;
                    this.displayScenario(this.currentScenarioIndex);
                }
            });
        }
    }
    
    displayScenario(index) {
        if (typeof scenariosData === 'undefined' || !scenariosData[index]) return;
        
        const scenario = scenariosData[index];
        const titleEl = document.getElementById('scenarioTitle');
        const descEl = document.getElementById('scenarioDescription');
        const cuesEl = document.getElementById('scenarioCues');
        const optionsEl = document.getElementById('scenarioOptions');
        const counterEl = document.getElementById('scenarioCounter');
        const feedbackEl = document.getElementById('scenarioFeedback');
        
        if (titleEl) titleEl.textContent = scenario.title;
        if (descEl) descEl.textContent = scenario.description;
        
        if (cuesEl) {
            cuesEl.innerHTML = '<div class="cues-label"><strong>Key Terms:</strong> ' + scenario.cues.join(', ') + '</div>';
        }
        
        if (optionsEl) {
            let optionsHtml = '';
            scenario.options.forEach((option, idx) => {
                optionsHtml += `
                    <div class="scenario-option" data-option="${idx}" onclick="app.selectScenarioOption(${index}, ${idx})">
                        <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
                        <span class="option-text">${option}</span>
                    </div>
                `;
            });
            optionsEl.innerHTML = optionsHtml;
        }
        
        if (counterEl) {
            counterEl.textContent = `${index + 1} / ${scenariosData.length}`;
        }
        
        feedbackEl.innerHTML = '';
    }
    
    selectScenarioOption(scenarioIndex, optionIndex) {
        if (typeof scenariosData === 'undefined' || !scenariosData[scenarioIndex]) return;
        
        const scenario = scenariosData[scenarioIndex];
        const feedbackEl = document.getElementById('scenarioFeedback');
        const optionsEl = document.getElementById('scenarioOptions');
        
        // Mark all options
        optionsEl.querySelectorAll('.scenario-option').forEach((el, idx) => {
            el.classList.remove('correct', 'incorrect', 'selected');
            if (idx === optionIndex) {
                el.classList.add('selected');
            }
            if (idx === scenario.correct) {
                el.classList.add('correct');
            } else if (idx === optionIndex) {
                el.classList.add('incorrect');
            }
        });
        
        // Show feedback
        const isCorrect = optionIndex === scenario.correct;
        feedbackEl.innerHTML = `
            <div class="feedback-box ${isCorrect ? 'correct' : 'incorrect'}">
                <strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</strong>
                <p>${scenario.explanation}</p>
            </div>
        `;
    }
    
    renderMenuPlanning() {
        const addButtons = document.querySelectorAll('.add-btn');
        addButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const menuItem = btn.closest('.menu-item');
                const itemName = menuItem.querySelector('.item-name').textContent;
                const itemPrice = parseFloat(menuItem.dataset.price);
                this.addToOrder(itemName, itemPrice);
            });
        });
        
        const clearBtn = document.getElementById('clearOrder');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                this.clearOrder();
            });
        }
    }
    
    addToOrder(itemName, itemPrice) {
        const existingItem = this.orderItems.find(item => item.name === itemName);
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.orderItems.push({ name: itemName, price: itemPrice, quantity: 1 });
        }
        
        this.updateOrderDisplay();
    }
    
    updateOrderDisplay() {
        const orderItemsEl = document.getElementById('orderItems');
        const subtotalEl = document.getElementById('subtotal');
        const tipEl = document.getElementById('tip');
        const totalEl = document.getElementById('total');
        
        if (this.orderItems.length === 0) {
            orderItemsEl.innerHTML = '<p class="empty-order">No items selected</p>';
            subtotalEl.textContent = '$0.00';
            tipEl.textContent = '$0.00';
            totalEl.textContent = '$0.00';
            return;
        }
        
        let html = '';
        let subtotal = 0;
        
        this.orderItems.forEach((item, idx) => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            html += `
                <div class="order-item">
                    <span class="item-name">${item.name}</span>
                    <span class="item-qty">x${item.quantity}</span>
                    <span class="item-total">$${itemTotal.toFixed(2)}</span>
                    <button class="remove-btn" onclick="app.removeFromOrder(${idx})">Remove</button>
                </div>
            `;
        });
        
        const tip = subtotal * 0.18;
        const total = subtotal + tip;
        
        orderItemsEl.innerHTML = html;
        subtotalEl.textContent = '$' + subtotal.toFixed(2);
        tipEl.textContent = '$' + tip.toFixed(2);
        totalEl.textContent = '$' + total.toFixed(2);
    }
    
    removeFromOrder(index) {
        this.orderItems.splice(index, 1);
        this.updateOrderDisplay();
    }
    
    clearOrder() {
        this.orderItems = [];
        this.updateOrderDisplay();
    }

    updateProgress() {
        // Calculate progress based on sections visited and activities completed
        const sections = ['restaurant-types', 'menu-vocabulary', 'general-vocabulary', 'conversations', 'scenarios', 'menu-planning', 'pronunciation', 'activities', 'restaurant-detective', 'meal-times', 'menu-language-quiz', 'cheat-sheets'];
        const currentIndex = sections.indexOf(this.currentSection);
        const progress = ((currentIndex + 1) / sections.length) * 100;
        
        const progressFill = document.getElementById('progressFill');
        if (progressFill) {
            progressFill.style.width = `${progress}%`;
        }
    }

    // Activity methods
    startVocabularyMatching() {
        alert('Vocabulary Matching game coming soon! This will be an interactive drag-and-drop game.');
    }

    startQuickQuiz() {
        alert('Quick Quiz coming soon! This will be a timed multiple-choice quiz.');
    }

    startListeningPractice() {
        alert('Listening Practice coming soon! This will play audio and ask you to identify words.');
    }

    startMenuBuilder() {
        this.showSection('menu-planning');
        document.querySelector('[data-section="menu-planning"]').click();
    }

    // Restaurant Detective Activity
    renderRestaurantDetective() {
        if (typeof restaurantDetectiveQuestions === 'undefined') return;
        
        this.currentDetectiveIndex = 0;
        this.displayDetectiveQuestion(0);
        
        const prevBtn = document.getElementById('prevDetective');
        const nextBtn = document.getElementById('nextDetective');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (this.currentDetectiveIndex > 0) {
                    this.currentDetectiveIndex--;
                    this.displayDetectiveQuestion(this.currentDetectiveIndex);
                }
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (this.currentDetectiveIndex < restaurantDetectiveQuestions.length - 1) {
                    this.currentDetectiveIndex++;
                    this.displayDetectiveQuestion(this.currentDetectiveIndex);
                }
            });
        }
    }
    
    displayDetectiveQuestion(index) {
        if (typeof restaurantDetectiveQuestions === 'undefined' || !restaurantDetectiveQuestions[index]) return;
        
        const question = restaurantDetectiveQuestions[index];
        const questionEl = document.getElementById('detectiveQuestion');
        const optionsEl = document.getElementById('detectiveOptions');
        const counterEl = document.getElementById('detectiveCounter');
        const feedbackEl = document.getElementById('detectiveFeedback');
        
        if (questionEl) questionEl.innerHTML = `<strong>Question ${index + 1}:</strong> ${question.description}`;
        
        if (optionsEl) {
            let optionsHtml = '';
            question.options.forEach((option, idx) => {
                optionsHtml += `
                    <div class="detective-option" onclick="app.selectDetectiveAnswer(${index}, '${option}')">
                        <span>${option}</span>
                    </div>
                `;
            });
            optionsEl.innerHTML = optionsHtml;
        }
        
        if (counterEl) counterEl.textContent = `${index + 1} / ${restaurantDetectiveQuestions.length}`;
        feedbackEl.innerHTML = '';
    }
    
    selectDetectiveAnswer(questionIndex, selectedAnswer) {
        if (typeof restaurantDetectiveQuestions === 'undefined') return;
        
        const question = restaurantDetectiveQuestions[questionIndex];
        const feedbackEl = document.getElementById('detectiveFeedback');
        const optionsEl = document.getElementById('detectiveOptions');
        
        const isCorrect = selectedAnswer === question.answer;
        
        optionsEl.querySelectorAll('.detective-option').forEach((el) => {
            if (el.textContent.includes(selectedAnswer)) {
                el.classList.add(isCorrect ? 'correct' : 'incorrect');
            }
            if (el.textContent.includes(question.answer)) {
                el.classList.add('correct');
            }
        });
        
        feedbackEl.innerHTML = `
            <div class="feedback-box ${isCorrect ? 'correct' : 'incorrect'}">
                <strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</strong>
                <p>The correct answer is: <strong>${question.answer}</strong></p>
            </div>
        `;
    }

    // Meal Times Matching Activity
    renderMealTimes() {
        if (typeof mealTimesMatching === 'undefined') return;
        
        const container = document.getElementById('mealTimesContent');
        if (!container) return;
        
        let html = '';
        mealTimesMatching.forEach((meal, idx) => {
            html += `
                <div class="meal-time-item">
                    <div class="meal-time-name">${meal.mealName}</div>
                    <select class="meal-time-select" onchange="app.checkMealTimeAnswer(${idx}, this.value)">
                        <option value="">-- Select the correct description --</option>
                        <option value="A">A. Light late-night food served after normal dinner hours</option>
                        <option value="B">B. Mid-day meal break, often 11 a.m.–2 p.m.</option>
                        <option value="C">C. Early-evening discount period (often 4–6 p.m.)</option>
                        <option value="D">D. Main evening meal (6–9 p.m.)</option>
                        <option value="E">E. Light snack time (2–4 p.m.)</option>
                        <option value="F">F. First meal of the day (6–9 a.m.)</option>
                        <option value="G">G. Leisurely late-morning meal (10 a.m.–1 p.m., often weekends)</option>
                    </select>
                    <div class="meal-time-feedback" id="feedback-${idx}"></div>
                </div>
            `;
        });
        container.innerHTML = html;
    }
    
    checkMealTimeAnswer(index, selectedAnswer) {
        if (typeof mealTimesMatching === 'undefined') return;
        
        const meal = mealTimesMatching[index];
        const feedbackEl = document.getElementById(`feedback-${index}`);
        const isCorrect = selectedAnswer === meal.correctAnswer;
        
        feedbackEl.classList.add('show');
        feedbackEl.classList.add(isCorrect ? 'correct' : 'incorrect');
        feedbackEl.innerHTML = isCorrect 
            ? `<strong>✓ Correct!</strong> ${meal.description}`
            : `<strong>✗ Incorrect</strong> The correct answer is: ${meal.correctAnswer}. ${meal.description}`;
    }

    // Menu Language Quiz
    renderMenuLanguageQuiz() {
        if (typeof menuLanguageQuiz === 'undefined') return;
        
        this.currentQuizIndex = 0;
        this.quizAnswers = {};
        this.displayQuizQuestion(0);
    }
    
    displayQuizQuestion(index) {
        if (typeof menuLanguageQuiz === 'undefined' || !menuLanguageQuiz[index]) return;
        
        const question = menuLanguageQuiz[index];
        const quizCard = document.getElementById('quizCard');
        const progressEl = document.getElementById('quizProgress');
        
        let optionsHtml = '';
        question.options.forEach((option, idx) => {
            optionsHtml += `
                <div class="quiz-option" onclick="app.selectQuizAnswer(${index}, ${idx})">
                    <span>${String.fromCharCode(65 + idx)}. ${option}</span>
                </div>
            `;
        });
        
        quizCard.innerHTML = `
            <div class="quiz-question">${index + 1}. ${question.question}</div>
            <div class="quiz-options">${optionsHtml}</div>
            <div id="quiz-explanation-${index}"></div>
        `;
        
        const progress = Math.round((index / menuLanguageQuiz.length) * 100);
        progressEl.innerHTML = `
            <strong>Progress: ${index + 1} / ${menuLanguageQuiz.length}</strong>
            <div class="quiz-progress-bar">
                <div class="quiz-progress-fill" style="width: ${progress}%"></div>
            </div>
        `;
    }
    
    selectQuizAnswer(questionIndex, optionIndex) {
        if (typeof menuLanguageQuiz === 'undefined') return;
        
        const question = menuLanguageQuiz[questionIndex];
        const isCorrect = optionIndex === question.correctAnswer;
        const explanationEl = document.getElementById(`quiz-explanation-${questionIndex}`);
        
        this.quizAnswers[questionIndex] = optionIndex;
        
        document.querySelectorAll('.quiz-option').forEach((el, idx) => {
            el.classList.remove('selected', 'correct', 'incorrect');
            if (idx === optionIndex) {
                el.classList.add('selected');
                if (isCorrect) el.classList.add('correct');
                else el.classList.add('incorrect');
            }
            if (idx === question.correctAnswer) {
                el.classList.add('correct');
            }
        });
        
        explanationEl.innerHTML = `
            <div class="quiz-explanation">
                <strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</strong>
                <p>${question.explanation}</p>
            </div>
        `;
        
        // Auto-advance to next question after 2 seconds
        setTimeout(() => {
            if (this.currentQuizIndex < menuLanguageQuiz.length - 1) {
                this.currentQuizIndex++;
                this.displayQuizQuestion(this.currentQuizIndex);
            }
        }, 2000);
    }

    // Cheat Sheets
    renderCheatSheets() {
        if (typeof vocabularyCheatSheet === 'undefined') return;
        
        const tabs = document.querySelectorAll('.cheat-sheet-tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.cheat-sheet-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                this.displayCheatSheet(tab.dataset.sheet);
            });
        });
        
        this.displayCheatSheet('vocabulary');
    }
    
    displayCheatSheet(sheetType) {
        const contentEl = document.getElementById('cheatSheetContent');
        if (!contentEl) return;
        
        let html = '';
        
        if (sheetType === 'vocabulary' && typeof vocabularyCheatSheet !== 'undefined') {
            Object.entries(vocabularyCheatSheet).forEach(([category, items]) => {
                html += `
                    <div class="cheat-sheet-section">
                        <div class="cheat-sheet-title">${category}</div>
                        <div class="cheat-sheet-items">
                            ${items.map(item => `<div class="cheat-sheet-item">${item}</div>`).join('')}
                        </div>
                    </div>
                `;
            });
        } else if (sheetType === 'speaking' && typeof speakingLanguageCheatSheet !== 'undefined') {
            Object.entries(speakingLanguageCheatSheet).forEach(([category, items]) => {
                html += `
                    <div class="cheat-sheet-section">
                        <div class="cheat-sheet-title">${category}</div>
                        <div class="cheat-sheet-items">
                            ${items.map(item => `<div class="cheat-sheet-item">• ${item}</div>`).join('')}
                        </div>
                    </div>
                `;
            });
        }
        
        contentEl.innerHTML = html;
    }

    startRolePlay() {
        alert('Role Play coming soon! This will let you practice conversations as different characters.');
    }

    startChallengeMode() {
        alert('Challenge Mode coming soon! This will combine all activities into a comprehensive challenge.');
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.app = new EatingOutApp();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EatingOutApp };
}

