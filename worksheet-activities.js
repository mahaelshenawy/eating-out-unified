// Worksheet Activities Data - Restaurant Detective, Quizzes, and Exercises

// Restaurant Detective Activity
const restaurantDetectiveQuestions = [
    {
        id: 1,
        description: "This place serves food from one country or culture. You might find chopsticks, naan, tacos, or sushi here.",
        answer: "Ethnic Restaurant",
        options: ["Fast Food", "Ethnic Restaurant", "Diner", "Bistro"]
    },
    {
        id: 2,
        description: "This is a small and stylish restaurant. The food is simple but high quality. It feels cozy and fancy at the same time.",
        answer: "Bistro",
        options: ["Buffet", "Bistro", "Coffee Shop", "Food Truck"]
    },
    {
        id: 3,
        description: "This is a small, old-fashioned place. You can eat breakfast all day. They serve pancakes, eggs, and coffee.",
        answer: "Diner",
        options: ["Diner", "Casual Dining", "Fast Food", "Dessert Shop"]
    },
    {
        id: 4,
        description: "This is a very fancy place. You wear nice clothes. The food is expensive, and there are many small courses.",
        answer: "Fine Dining Restaurant",
        options: ["Casual Dining", "Fine Dining Restaurant", "Bistro", "Pub"]
    },
    {
        id: 5,
        description: "This place has music, drinks, and hot food. Many people go there to watch sports or meet friends.",
        answer: "Pub / Bar & Grill",
        options: ["Food Truck", "Pub / Bar & Grill", "Buffet", "Coffee Shop"]
    },
    {
        id: 6,
        description: "This kitchen moves on wheels! You order at the window. It's usually on the street or at an event.",
        answer: "Food Truck",
        options: ["Food Truck", "Fast Food", "Takeout-Only", "Dessert Shop"]
    },
    {
        id: 7,
        description: "This place sells sweet things like cake, ice cream, or donuts. Some are also coffee shops.",
        answer: "Dessert Shop / Bakery",
        options: ["Dessert Shop / Bakery", "Coffee Shop", "Diner", "Fast Food"]
    },
    {
        id: 8,
        description: "This is a quiet place to drink coffee or tea. You can also get a sandwich or a muffin. Many people come here to study or talk.",
        answer: "Coffee Shop / Café",
        options: ["Coffee Shop / Café", "Diner", "Casual Dining", "Buffet"]
    },
    {
        id: 9,
        description: "In this restaurant, you pay one price and eat as much as you want. There are many food stations to choose from.",
        answer: "Buffet",
        options: ["Buffet", "Fast Food", "Food Court", "Casual Dining"]
    },
    {
        id: 10,
        description: "This place is quick and cheap. You order at the counter and take your food to go. They often sell burgers, fries, and soft drinks.",
        answer: "Fast Food",
        options: ["Fast Food", "Diner", "Casual Dining", "Takeout-Only"]
    },
    {
        id: 11,
        description: "This restaurant is more relaxed. You sit at a table and a server brings your food. The price is not too high or too low.",
        answer: "Casual Dining",
        options: ["Casual Dining", "Fine Dining", "Diner", "Bistro"]
    },
    {
        id: 12,
        description: "You cannot eat inside this restaurant. You order your food and take it home. Some have delivery.",
        answer: "Takeout-Only Restaurant",
        options: ["Takeout-Only Restaurant", "Fast Food", "Food Truck", "Food Court"]
    }
];

// Meal Times Matching Activity
const mealTimesMatching = [
    {
        mealName: "Breakfast",
        correctAnswer: "F",
        description: "First meal of the day (6–9 a.m.)—foods like eggs, cereal, or toast",
        allOptions: {
            A: "Light late-night food served after normal dinner hours, e.g., pizza slices or ramen (after 9 p.m.)",
            B: "Mid-day meal break, often 11 a.m.–2 p.m.; sandwiches or salads are common",
            C: "Early-evening discount period (often 4–6 p.m.) focused on small plates and drink specials",
            D: "Main evening meal (6–9 p.m.) with full entrées such as steak or curry",
            E: "Light snack time (2–4 p.m.) that might feature pastries, tea, or coffee",
            F: "First meal of the day (6–9 a.m.)—foods like eggs, cereal, or toast",
            G: "Leisurely late-morning meal (10 a.m.–1 p.m., often weekends) combining breakfast and lunch items"
        }
    },
    {
        mealName: "Brunch",
        correctAnswer: "G",
        description: "Leisurely late-morning meal (10 a.m.–1 p.m., often weekends) combining breakfast and lunch items"
    },
    {
        mealName: "Lunch",
        correctAnswer: "B",
        description: "Mid-day meal break, often 11 a.m.–2 p.m.; sandwiches or salads are common"
    },
    {
        mealName: "Afternoon Tea / Coffee Break",
        correctAnswer: "E",
        description: "Light snack time (2–4 p.m.) that might feature pastries, tea, or coffee"
    },
    {
        mealName: "Happy Hour / Early Supper",
        correctAnswer: "C",
        description: "Early-evening discount period (often 4–6 p.m.) focused on small plates and drink specials"
    },
    {
        mealName: "Dinner",
        correctAnswer: "D",
        description: "Main evening meal (6–9 p.m.) with full entrées such as steak or curry"
    },
    {
        mealName: "Late-Night Snack / Bites",
        correctAnswer: "A",
        description: "Light late-night food served after normal dinner hours, e.g., pizza slices or ramen (after 9 p.m.)"
    }
];

// Menu Language Quiz
const menuLanguageQuiz = [
    {
        id: 1,
        question: "What does 'vegetarian' mean on a menu?",
        options: ["No animal food at all", "No meat, but maybe eggs or milk", "Contains nuts"],
        correctAnswer: 1,
        explanation: "Vegetarian means no meat, poultry, or fish, but may include dairy and eggs."
    },
    {
        id: 2,
        question: "If a dish is labeled 'vegan', what does it include?",
        options: ["Has fish", "Has no animal food at all", "Is low-fat"],
        correctAnswer: 1,
        explanation: "Vegan means no animal products whatsoever—no meat, fish, eggs, dairy, or honey."
    },
    {
        id: 3,
        question: "What kind of food follows Muslim dietary laws?",
        options: ["Halal", "Vegetarian", "Low-fat"],
        correctAnswer: 0,
        explanation: "Halal food follows Islamic dietary laws regarding what is permissible to eat."
    },
    {
        id: 4,
        question: "Which label means the food follows Jewish food rules?",
        options: ["Kosher", "Spicy", "Gluten-Free"],
        correctAnswer: 0,
        explanation: "Kosher food follows Jewish dietary laws and is prepared according to Jewish traditions."
    },
    {
        id: 5,
        question: "What is a 'set menu'?",
        options: ["One price for several courses", "Choose any item freely", "Just kids' items"],
        correctAnswer: 0,
        explanation: "A set menu (or prix fixe) offers multiple courses for one fixed price."
    },
    {
        id: 6,
        question: "What does 'à la carte' mean?",
        options: ["One price for all items", "Choose and pay per item", "Buffet only"],
        correctAnswer: 1,
        explanation: "À la carte means you choose individual dishes and pay separately for each item."
    },
    {
        id: 7,
        question: "What does 'market price (MP)' mean on a menu?",
        options: ["Price may change", "It's free", "Only available at night"],
        correctAnswer: 0,
        explanation: "Market price means the price varies based on current market conditions for ingredients."
    },
    {
        id: 8,
        question: "If an item says 'no substitutions', what does it mean?",
        options: ["You can change items", "You cannot change anything", "You get a side"],
        correctAnswer: 1,
        explanation: "No substitutions means you cannot swap out or replace any ingredients in that dish."
    },
    {
        id: 9,
        question: "What does 'gratuity included' mean?",
        options: ["Tip is already added", "You pay less", "It's a free meal"],
        correctAnswer: 0,
        explanation: "Gratuity included means the tip has already been added to your bill."
    },
    {
        id: 10,
        question: "What is a 'service charge'?",
        options: ["Free extra dish", "Fee for service added", "Kids eat free"],
        correctAnswer: 1,
        explanation: "A service charge is a fee added to your bill for the restaurant's service."
    },
    {
        id: 11,
        question: "What does 'happy hour' mean?",
        options: ["Free drinks all day", "Special discounts during certain hours", "Only desserts"],
        correctAnswer: 1,
        explanation: "Happy hour is a time period when restaurants offer discounted drinks and appetizers."
    },
    {
        id: 12,
        question: "If a food 'contains seafood', what does it have?",
        options: ["Fish or shellfish", "Vegan ingredients", "Dairy-free content"],
        correctAnswer: 0,
        explanation: "Seafood includes fish and shellfish (like shrimp, crab, mussels, etc.)."
    },
    {
        id: 13,
        question: "What is a 'chef's special'?",
        options: ["Spicy only", "A daily recommended dish", "Always a dessert"],
        correctAnswer: 1,
        explanation: "Chef's special is a dish specially recommended by the chef, often not on the regular menu."
    },
    {
        id: 14,
        question: "What does 'seasonal' mean for a menu item?",
        options: ["Always available", "Changes with the season", "For kids only"],
        correctAnswer: 1,
        explanation: "Seasonal means the item changes depending on what's fresh and available at that time of year."
    },
    {
        id: 15,
        question: "In North America, what does 'entrée' usually mean?",
        options: ["Appetizer", "Main course", "Dessert"],
        correctAnswer: 1,
        explanation: "In North America, entrée refers to the main course (in Europe, it means appetizer)."
    }
];

// Conversation Completion Words
const conversationCompletionWords = [
    "Appetizer", "Main Course", "Half Portion", "Contains Nuts",
    "Gluten-Free", "Substitute", "Side Dish", "Extra",
    "Combo", "Sharing Plate", "Beverage", "Dairy-Free",
    "Add-On", "Dessert"
];

const conversationCompletionExercise = {
    dialogue: [
        { speaker: "Server", text: "Would you like an __________ to start?" },
        { speaker: "Guest 1", text: "I'll take the chicken curry as my __________." },
        { speaker: "Guest 2", text: "I'm not very hungry. Can I get a __________?" },
        { speaker: "Guest 3", text: "I want a smaller portion. Do you have a __________ size?" },
        { speaker: "Guest 4", text: "I'm allergic. Does this __________?" },
        { speaker: "Server", text: "Yes. It's marked as '__________'." },
        { speaker: "Guest 1", text: "Can I change fries for salad as my __________?" },
        { speaker: "Server", text: "Yes, you can make a __________." },
        { speaker: "Guest 2", text: "Can I get an __________ scoop of ice cream?" },
        { speaker: "Guest 3", text: "I'd like a __________ with burger, fries, and a drink." },
        { speaker: "Guest 4", text: "I want to share something. Do you have a __________?" },
        { speaker: "Guest 5", text: "I need the bread to be __________." },
        { speaker: "Guest 6", text: "Do you have anything that's __________ but still creamy?" },
        { speaker: "Guest 1", text: "I'll just take a __________—maybe juice." },
        { speaker: "Guest 2", text: "I'll finish with something sweet. Do you have a __________?" }
    ],
    correctAnswers: [
        "Appetizer", "Main Course", "Half Portion", "Small", "Contains Nuts",
        "Gluten-Free", "Side Dish", "Substitute", "Extra", "Combo",
        "Sharing Plate", "Gluten-Free", "Dairy-Free", "Beverage", "Dessert"
    ]
};

// Vocabulary Cheat Sheet Data
const vocabularyCheatSheet = {
    "Course / Dish Types": [
        "Appetizer - A small dish served before the main course",
        "Side Dish - A smaller dish served alongside the main course",
        "Main Course / Entrée - The primary dish of a meal",
        "Dessert - A sweet course served at the end of a meal",
        "Beverage - Any drink (water, coffee, tea, juice, alcohol)"
    ],
    "Menu Labels (Dietary • Flavor • Allergen)": [
        "Vegetarian - No meat, but may include dairy and eggs",
        "Vegan - No animal products at all",
        "Gluten-Free - No gluten (safe for celiac disease)",
        "Dairy-Free - No milk or milk products",
        "Contains Nuts / Shellfish / Egg / Soy / Sesame / Seafood - Allergen warnings",
        "Spicy - Food with hot, peppery taste",
        "Halal - Follows Muslim dietary laws",
        "Kosher - Follows Jewish dietary laws",
        "Allergy Alert - Warning about potential allergens"
    ],
    "Pricing & Menu Styles": [
        "Chef's Special - A dish specially recommended by the chef",
        "Set Menu / Prix Fixe - Multiple courses for one fixed price",
        "À la Carte - Choose and pay per individual item",
        "Kids' Menu - Special menu with smaller portions",
        "Market Price (MP) - Price varies based on market conditions",
        "Seasonal / Limited Time - Available only during certain seasons",
        "Happy Hour - Discounted drinks and appetizers during certain hours",
        "Service Charge / Gratuity Included - Tip already added to bill"
    ],
    "Portions & Add-Ons": [
        "Small / Large / Half Portion - Different serving sizes",
        "Family-Style / Sharing Plate - Large portions meant to be shared",
        "Combo / Add-On / Extra - Bundled items or additional items",
        "Substitute - Replace one item with another",
        "No Substitutions - Cannot change items in the dish"
    ],
    "Service & Take-Out Styles": [
        "Table Service - Server takes order and brings food to table",
        "Buffet - Self-service dining with multiple food stations",
        "Food Court - Multiple food vendors in one area",
        "Drive-Through - Order and receive food without leaving car",
        "Take-Out / Takeaway - Food ordered to be eaten elsewhere"
    ]
};

// Speaking Language Cheat Sheet
const speakingLanguageCheatSheet = {
    "Expressing a Need or Craving": [
        "I'm starving! Where should we go?",
        "I'm in the mood for… (pizza / sushi / burgers / something spicy)",
        "I feel like eating…",
        "I want something… (cheap / healthy / fast / light)"
    ],
    "Making Suggestions": [
        "How about…?",
        "Why don't we try…?",
        "Let's go to…",
        "I recommend this place because it is [delicious/near]"
    ],
    "Talking About the Menu": [
        "Does this place have vegetarian / vegan / halal options?",
        "Do they have gluten-free dishes?",
        "Is there a service charge or gratuity included?",
        "Is there a happy hour?",
        "Look, the main course is only $12!",
        "This place has a set menu.",
        "We can order à la carte.",
        "I want to skip the appetizer and go straight to dessert.",
        "Can we substitute fries for salad?"
    ],
    "Giving Opinions": [
        "I prefer…",
        "That sounds great!",
        "That's a good idea.",
        "I agree. Let's do it. (Yes)",
        "I'm not sure. I don't really like [fish/spicy food]. (No)",
        "I prefer [Mexican food/Burgers]"
    ],
    "Making Offers & Sharing": [
        "I can share the [fries/pizza] with you.",
        "Do you want to share a combo?",
        "Would you like to split the bill?",
        "Don't worry, I'll pay for the drinks.",
        "Do you want to try some of mine?",
        "We can order one dish and split it"
    ],
    "Final Decision Language": [
        "So, we decided to go to…",
        "We think this is the best choice because…",
        "It's better than the others because… (It's the cheapest / healthiest / most convenient option.)"
    ]
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        restaurantDetectiveQuestions,
        mealTimesMatching,
        menuLanguageQuiz,
        conversationCompletionWords,
        conversationCompletionExercise,
        vocabularyCheatSheet,
        speakingLanguageCheatSheet
    };
}
