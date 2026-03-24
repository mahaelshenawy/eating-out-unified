
const vocabularyData = {
    restaurantTypes: {
        title: "Restaurant Types",
        icon: "fas fa-store",
        categories: {
            fastFood: {
                title: "Fast Food & Quick Service",
                words: [
                    {
                        word: "Fast Food Restaurant",
                        definition: "A restaurant that serves quickly prepared food at low prices",
                        example: "McDonald's and Burger King are popular fast food restaurants.",
                        image: "images/vocabulary/fast-food-restaurant.jpg",
                        audioFile: "fast_food_restaurant.mp3"
                    },
                    {
                        word: "Food Truck",
                        definition: "A mobile restaurant that serves food from a truck or van",
                        example: "The food truck serves delicious tacos on the street corner.",
                        image: "images/vocabulary/food-truck.jpg",
                        audioFile: "food_truck.mp3"
                    },
                    {
                        word: "Drive-Through",
                        definition: "A service where customers order and receive food without leaving their car",
                        example: "I'll get coffee from the drive-through on my way to work.",
                        image: "images/vocabulary/drive-through.jpg",
                        audioFile: "drive_through.mp3"
                    },
                    {
                        word: "Food Court",
                        definition: "An area with multiple fast food vendors, usually in a mall",
                        example: "The shopping mall has a large food court with many options.",
                        image: "images/vocabulary/food-court.jpg",
                        audioFile: "food_court.mp3"
                    },
                    {
                        word: "Coffee Shop",
                        definition: "A small restaurant that primarily serves coffee and light meals",
                        example: "Let's meet at the coffee shop for a quick breakfast.",
                        image: "images/vocabulary/coffee-shop.jpg",
                        audioFile: "coffee_shop.mp3"
                    },
                    {
                        word: "Bakery",
                        definition: "A shop that makes and sells bread, cakes, and pastries",
                        example: "The bakery has fresh croissants every morning.",
                        image: "images/vocabulary/bakery.jpg",
                        audioFile: "bakery.mp3"
                    },
                    {
                        word: "Sandwich Shop",
                        definition: "A restaurant specializing in sandwiches and subs",
                        example: "I grabbed a sandwich from the shop for lunch.",
                        image: "images/vocabulary/sandwich-shop.jpg",
                        audioFile: "sandwich_shop.mp3"
                    },
                    {
                        word: "Juice Bar",
                        definition: "A shop that serves fresh juices and smoothies",
                        example: "The juice bar makes healthy smoothies with fresh fruit.",
                        image: "images/vocabulary/juice-bar.jpg",
                        audioFile: "juice_bar.mp3"
                    }
                ]
            },
            casual: {
                title: "Casual & Family Dining",
                words: [
                    {
                        word: "Casual Dining",
                        definition: "A restaurant with a relaxed atmosphere and moderate prices",
                        example: "We went to a casual dining restaurant for family dinner.",
                        image: "images/vocabulary/casual-dining.jpg",
                        audioFile: "casual_dining.mp3"
                    },
                    {
                        word: "Family Restaurant",
                        definition: "A restaurant designed to welcome families with children",
                        example: "The family restaurant has a kids' menu and high chairs.",
                        image: "images/vocabulary/family-restaurant.jpg",
                        audioFile: "family_restaurant.mp3"
                    },
                    {
                        word: "Diner",
                        definition: "A casual restaurant with a retro aesthetic serving comfort food",
                        example: "We had breakfast at the classic diner downtown.",
                        image: "images/vocabulary/diner.jpg",
                        audioFile: "diner.mp3"
                    },
                    {
                        word: "Pizzeria",
                        definition: "A restaurant that specializes in making and serving pizza",
                        example: "The pizzeria has the best wood-fired pizza in town.",
                        image: "images/vocabulary/pizzeria.jpg",
                        audioFile: "pizzeria.mp3"
                    },
                    {
                        word: "Buffet",
                        definition: "A restaurant where customers serve themselves from various dishes",
                        example: "The buffet restaurant offers unlimited food for one price.",
                        image: "images/vocabulary/buffet-restaurant.jpg",
                        audioFile: "buffet.mp3"
                    },
                    {
                        word: "Taco Stand",
                        definition: "A casual eatery specializing in tacos and Mexican street food",
                        example: "The taco stand on the corner is always busy.",
                        image: "images/vocabulary/taco-stand.jpg",
                        audioFile: "taco_stand.mp3"
                    },
                    {
                        word: "Ramen Shop",
                        definition: "A Japanese restaurant specializing in ramen noodles",
                        example: "The ramen shop serves authentic Japanese noodle soup.",
                        image: "images/vocabulary/ramen-shop.jpg",
                        audioFile: "ramen_shop.mp3"
                    }
                ]
            },
            upscale: {
                title: "Upscale & Specialty",
                words: [
                    {
                        word: "Fine Dining",
                        definition: "An upscale restaurant with elegant service and gourmet food",
                        example: "We celebrated our anniversary at a fine dining restaurant.",
                        image: "images/vocabulary/fine-dining.jpg",
                        audioFile: "fine_dining.mp3"
                    },
                    {
                        word: "Steakhouse",
                        definition: "A restaurant specializing in high-quality steaks and beef",
                        example: "The steakhouse serves premium cuts of beef.",
                        image: "images/vocabulary/steakhouse.jpg",
                        audioFile: "steakhouse.mp3"
                    },
                    {
                        word: "Seafood Restaurant",
                        definition: "A restaurant specializing in fish and seafood dishes",
                        example: "The seafood restaurant has fresh lobster and salmon.",
                        image: "images/vocabulary/seafood-restaurant.jpg",
                        audioFile: "seafood_restaurant.mp3"
                    },
                    {
                        word: "Italian Restaurant",
                        definition: "A restaurant serving traditional Italian cuisine",
                        example: "The Italian restaurant makes fresh pasta daily.",
                        image: "images/vocabulary/italian-restaurant.jpg",
                        audioFile: "italian_restaurant.mp3"
                    },
                    {
                        word: "Bar",
                        definition: "An establishment serving alcoholic beverages and food",
                        example: "We went to the bar for drinks and appetizers.",
                        image: "images/vocabulary/bar.jpg",
                        audioFile: "bar.mp3"
                    },
                    {
                        word: "Sushi Restaurant",
                        definition: "A Japanese restaurant specializing in sushi and sashimi",
                        example: "The sushi restaurant has an excellent chef.",
                        image: "images/vocabulary/sushi-restaurant.jpg",
                        audioFile: "sushi_restaurant.mp3"
                    },
                    {
                        word: "Gastropub",
                        definition: "An upscale pub serving gourmet food and craft beer",
                        example: "The gastropub offers creative dishes and craft beers.",
                        image: "images/vocabulary/gastropub.jpg",
                        audioFile: "gastropub.mp3"
                    }
                ]
            }
        }
    },
    menuVocabulary: {
        title: "Menu Vocabulary",
        icon: "fas fa-utensils",
        categories: {
            courseTypes: {
                title: "Course Types",
                words: [
                    {
                        word: "Appetizer",
                        definition: "A small dish served before the main course",
                        example: "We ordered shrimp appetizers to start.",
                        image: "images/vocabulary/appetizer.jpg",
                        audioFile: "appetizer.mp3"
                    },
                    {
                        word: "Main Course",
                        definition: "The primary dish served as the main part of a meal",
                        example: "For the main course, I had grilled salmon.",
                        image: "images/vocabulary/main-course.jpg",
                        audioFile: "main_course.mp3"
                    },
                    {
                        word: "Side Dish",
                        definition: "A small dish served alongside the main course",
                        example: "Mashed potatoes are a popular side dish.",
                        image: "images/vocabulary/side-dish.jpg",
                        audioFile: "side_dish.mp3"
                    },
                    {
                        word: "Dessert",
                        definition: "A sweet course served at the end of a meal",
                        example: "We shared a chocolate cake for dessert.",
                        image: "images/vocabulary/dessert.jpg",
                        audioFile: "dessert.mp3"
                    },
                    {
                        word: "Beverage",
                        definition: "A drink served with a meal",
                        example: "What beverage would you like with your meal?",
                        image: "images/vocabulary/beverage.jpg",
                        audioFile: "beverage.mp3"
                    },
                    {
                        word: "Soup",
                        definition: "A liquid dish usually served as a starter",
                        example: "The tomato soup was delicious.",
                        image: "images/vocabulary/soup.jpg",
                        audioFile: "soup.mp3"
                    },
                    {
                        word: "Salad",
                        definition: "A cold dish of mixed vegetables",
                        example: "I had a Caesar salad for lunch.",
                        image: "images/vocabulary/salad.jpg",
                        audioFile: "salad.mp3"
                    },
                    {
                        word: "Entrée",
                        definition: "The main dish of a meal (especially in French cuisine)",
                        example: "The beef bourguignon was an excellent entrée.",
                        image: "images/vocabulary/entree.jpg",
                        audioFile: "entree.mp3"
                    }
                ]
            },
            cookingMethods: {
                title: "Cooking Methods",
                words: [
                    {
                        word: "Grilled",
                        definition: "Cooked on a hot surface or over flames",
                        example: "The grilled vegetables were perfectly charred.",
                        image: "images/vocabulary/grilled.jpg",
                        audioFile: "grilled.mp3"
                    },
                    {
                        word: "Fried",
                        definition: "Cooked in hot oil",
                        example: "The fried chicken was crispy and delicious.",
                        image: "images/vocabulary/fried.jpg",
                        audioFile: "fried.mp3"
                    },
                    {
                        word: "Baked",
                        definition: "Cooked in an oven using dry heat",
                        example: "The baked potato was fluffy inside.",
                        image: "images/vocabulary/baked.jpg",
                        audioFile: "baked.mp3"
                    },
                    {
                        word: "Steamed",
                        definition: "Cooked using steam from boiling water",
                        example: "The steamed vegetables retained their nutrients.",
                        image: "images/vocabulary/steamed.jpg",
                        audioFile: "steamed.mp3"
                    },
                    {
                        word: "Sautéed",
                        definition: "Cooked quickly in a small amount of oil or butter",
                        example: "The sautéed mushrooms were tender and flavorful.",
                        image: "images/vocabulary/sauteed.jpg",
                        audioFile: "sauteed.mp3"
                    },
                    {
                        word: "Roasted",
                        definition: "Cooked in an oven with dry heat, often at high temperature",
                        example: "The roasted vegetables had caramelized edges.",
                        image: "images/vocabulary/roasted.jpg",
                        audioFile: "roasted.mp3"
                    },
                    {
                        word: "Boiled",
                        definition: "Cooked in hot water",
                        example: "The boiled eggs were soft-boiled with runny yolks.",
                        image: "images/vocabulary/boiled.jpg",
                        audioFile: "boiled.mp3"
                    },
                    {
                        word: "Braised",
                        definition: "Cooked slowly in a small amount of liquid in a covered pot",
                        example: "The braised beef was tender and flavorful.",
                        image: "images/vocabulary/braised.jpg",
                        audioFile: "braised.mp3"
                    }
                ]
            },
            dietaryLabels: {
                title: "Dietary Labels",
                words: [
                    {
                        word: "Vegetarian",
                        definition: "A diet that excludes meat but includes vegetables, dairy, and eggs",
                        example: "The vegetarian option has roasted vegetables and grains.",
                        image: "images/vocabulary/vegetarian.jpg",
                        audioFile: "vegetarian.mp3"
                    },
                    {
                        word: "Vegan",
                        definition: "A diet that excludes all animal products",
                        example: "The vegan burger is made from plant-based ingredients.",
                        image: "images/vocabulary/vegan.jpg",
                        audioFile: "vegan.mp3"
                    },
                    {
                        word: "Gluten-Free",
                        definition: "Food that does not contain gluten, a protein in wheat",
                        example: "The restaurant offers gluten-free pasta options.",
                        image: "images/vocabulary/gluten-free.jpg",
                        audioFile: "gluten_free.mp3"
                    },
                    {
                        word: "Spicy",
                        definition: "Food seasoned with hot peppers or spices",
                        example: "The spicy curry was very flavorful.",
                        image: "images/vocabulary/spicy.jpg",
                        audioFile: "spicy.mp3"
                    },
                    {
                        word: "Dairy-Free",
                        definition: "Food that does not contain milk or dairy products",
                        example: "The dairy-free ice cream is made with coconut milk.",
                        image: "images/vocabulary/dairy-free.jpg",
                        audioFile: "dairy_free.mp3"
                    },
                    {
                        word: "Organic",
                        definition: "Food produced without synthetic pesticides or fertilizers",
                        example: "The restaurant uses organic vegetables from local farms.",
                        image: "images/vocabulary/organic.jpg",
                        audioFile: "organic.mp3"
                    },
                    {
                        word: "Low-Calorie",
                        definition: "Food with fewer calories than typical versions",
                        example: "The low-calorie menu has healthy options.",
                        image: "images/vocabulary/low-calorie.jpg",
                        audioFile: "low_calorie.mp3"
                    },
                    {
                        word: "Kosher",
                        definition: "Food prepared according to Jewish dietary laws",
                        example: "The restaurant serves kosher meals.",
                        image: "images/vocabulary/organic.jpg",
                        audioFile: "kosher.mp3"
                    }
                ]
            },
            menuStyles: {
                title: "Menu Styles & Pricing",
                words: [
                    {
                        word: "À la Carte",
                        definition: "A menu where each dish is priced individually",
                        example: "We ordered from the à la carte menu.",
                        image: "images/vocabulary/prix-fixe.jpg",
                        audioFile: "a_la_carte.mp3"
                    },
                    {
                        word: "Prix Fixe",
                        definition: "A fixed price for a complete meal with multiple courses",
                        example: "The prix fixe menu includes three courses for $45.",
                        image: "images/vocabulary/prix-fixe.jpg",
                        audioFile: "prix_fixe.mp3"
                    },
                    {
                        word: "Happy Hour",
                        definition: "A time period when drinks and appetizers are discounted",
                        example: "Happy hour specials run from 4-6 PM.",
                        image: "images/vocabulary/happy-hour.jpg",
                        audioFile: "happy_hour.mp3"
                    },
                    {
                        word: "Chef's Special",
                        definition: "A unique dish created by the chef, not on the regular menu",
                        example: "Today's chef's special is pan-seared scallops.",
                        image: "images/vocabulary/chefs-special.jpg",
                        audioFile: "chefs_special.mp3"
                    },
                    {
                        word: "Kids' Menu",
                        definition: "A menu section with smaller portions and simpler dishes for children",
                        example: "The kids' menu has chicken nuggets and pasta.",
                        image: "images/vocabulary/kids-menu.jpg",
                        audioFile: "kids_menu.mp3"
                    },
                    {
                        word: "Tasting Menu",
                        definition: "A multi-course meal with small portions of various dishes",
                        example: "The tasting menu showcased the chef's best creations.",
                        image: "images/vocabulary/seasonal-menu.jpg",
                        audioFile: "tasting_menu.mp3"
                    },
                    {
                        word: "Seasonal Menu",
                        definition: "A menu featuring ingredients that are fresh and in season",
                        example: "The seasonal menu changes every three months.",
                        image: "images/vocabulary/seasonal-menu.jpg",
                        audioFile: "seasonal_menu.mp3"
                    },
                    {
                        word: "Combo Meal",
                        definition: "A package deal combining a main item, sides, and a drink",
                        example: "The combo meal includes a burger, fries, and a drink.",
                        image: "images/vocabulary/seasonal-menu.jpg",
                        audioFile: "combo_meal.mp3"
                    }
                ]
            }
        }
    },
    generalRestaurantVocabulary: {
        title: "General Restaurant Vocabulary",
        icon: "fas fa-handshake",
        categories: {
            restaurantStaff: {
                title: "Restaurant Staff",
                words: [
                    {
                        word: "Server",
                        definition: "A person who takes orders and serves food to customers",
                        example: "The server was very attentive and friendly.",
                        image: "images/vocabulary/server.jpg",
                        audioFile: "server.mp3"
                    },
                    {
                        word: "Host",
                        definition: "A person who greets customers and seats them at tables",
                        example: "The host welcomed us at the entrance.",
                        image: "images/vocabulary/host.jpg",
                        audioFile: "host.mp3"
                    },
                    {
                        word: "Chef",
                        definition: "The head cook who oversees the kitchen",
                        example: "The chef prepared each dish with care.",
                        image: "images/vocabulary/chef.jpg",
                        audioFile: "chef.mp3"
                    },
                    {
                        word: "Bartender",
                        definition: "A person who prepares and serves drinks at a bar",
                        example: "The bartender made excellent cocktails.",
                        image: "images/vocabulary/bartender.jpg",
                        audioFile: "bartender.mp3"
                    },
                    {
                        word: "Manager",
                        definition: "A person who oversees restaurant operations",
                        example: "The manager ensured excellent customer service.",
                        image: "images/vocabulary/manager.jpg",
                        audioFile: "manager.mp3"
                    },
                    {
                        word: "Busboy",
                        definition: "A person who clears tables and prepares them for new guests",
                        example: "The busboy quickly cleared our empty plates.",
                        image: "images/vocabulary/busboy.jpg",
                        audioFile: "busboy.mp3"
                    },
                    {
                        word: "Sommelier",
                        definition: "An expert in wine who helps customers choose wines",
                        example: "The sommelier recommended an excellent wine pairing.",
                        image: "images/vocabulary/sommelier.jpg",
                        audioFile: "sommelier.mp3"
                    },
                    {
                        word: "Sous Chef",
                        definition: "The second-in-command in the kitchen, assisting the head chef",
                        example: "The sous chef supervised the line cooks.",
                        image: "images/vocabulary/sous-chef.jpg",
                        audioFile: "sous_chef.mp3"
                    }
                ]
            },
            serviceTypes: {
                title: "Service Types",
                words: [
                    {
                        word: "Table Service",
                        definition: "A service style where servers bring food to customers' tables",
                        example: "The restaurant offers full table service.",
                        image: "images/vocabulary/table-service.jpg",
                        audioFile: "table_service.mp3"
                    },
                    {
                        word: "Take-Out",
                        definition: "Food prepared to be eaten elsewhere, not at the restaurant",
                        example: "I ordered take-out for dinner at home.",
                        image: "images/vocabulary/take-out.jpg",
                        audioFile: "take_out.mp3"
                    },
                    {
                        word: "Delivery",
                        definition: "A service where food is brought to the customer's location",
                        example: "We ordered pizza delivery to our office.",
                        image: "images/vocabulary/delivery.jpg",
                        audioFile: "delivery.mp3"
                    },
                    {
                        word: "Reservation",
                        definition: "A booking made in advance to guarantee a table",
                        example: "I made a reservation for 7 PM.",
                        image: "images/vocabulary/reservation.jpg",
                        audioFile: "reservation.mp3"
                    },
                    {
                        word: "Walk-In",
                        definition: "A customer who arrives without a prior reservation",
                        example: "We were walk-ins and got seated immediately.",
                        image: "images/vocabulary/walk-in.jpg",
                        audioFile: "walk_in.mp3"
                    },
                    {
                        word: "Buffet Service",
                        definition: "A service style where customers serve themselves from food stations",
                        example: "The buffet service allows you to choose your own portions.",
                        image: "images/vocabulary/buffet-service.jpg",
                        audioFile: "buffet_service.mp3"
                    },
                    {
                        word: "Catering",
                        definition: "A service that provides food for events and parties",
                        example: "We hired a catering company for our wedding.",
                        image: "images/vocabulary/catering.jpg",
                        audioFile: "catering.mp3"
                    },
                    {
                        word: "Dine-In",
                        definition: "Eating at the restaurant rather than taking food elsewhere",
                        example: "We chose to dine-in rather than take-out.",
                        image: "images/vocabulary/dine-in.jpg",
                        audioFile: "dine_in.mp3"
                    }
                ]
            },
            paymentTipping: {
                title: "Payment & Tipping",
                words: [
                    {
                        word: "Check",
                        definition: "The bill or invoice for food and drinks consumed",
                        example: "Can we have the check, please?",
                        image: "images/vocabulary/check.jpg",
                        audioFile: "check.mp3"
                    },
                    {
                        word: "Tip",
                        definition: "Extra money given to service staff as a reward for good service",
                        example: "We left a 20% tip for excellent service.",
                        image: "images/vocabulary/tip.jpg",
                        audioFile: "tip.mp3"
                    },
                    {
                        word: "Split the Bill",
                        definition: "Dividing the total cost among multiple people",
                        example: "We decided to split the bill equally.",
                        image: "images/vocabulary/split-the-bill.jpg",
                        audioFile: "split_the_bill.mp3"
                    },
                    {
                        word: "Credit Card",
                        definition: "A payment card used to purchase goods and services",
                        example: "I paid with my credit card.",
                        image: "images/vocabulary/credit-card.jpg",
                        audioFile: "credit_card.mp3"
                    },
                    {
                        word: "Receipt",
                        definition: "A printed record of a transaction showing items and prices",
                        example: "The server brought the receipt with the bill.",
                        image: "images/vocabulary/receipt.jpg",
                        audioFile: "receipt.mp3"
                    },
                    {
                        word: "Cash",
                        definition: "Physical money in the form of bills and coins",
                        example: "I paid in cash instead of using a card.",
                        image: "images/vocabulary/cash.jpg",
                        audioFile: "cash.mp3"
                    },
                    {
                        word: "Gratuity",
                        definition: "A formal term for tip or money given for service",
                        example: "The gratuity is not included in the bill.",
                        image: "images/vocabulary/gratuity.jpg",
                        audioFile: "gratuity.mp3"
                    },
                    {
                        word: "Discount",
                        definition: "A reduction in price from the original cost",
                        example: "The restaurant offered a 10% discount for seniors.",
                        image: "images/vocabulary/discount.jpg",
                        audioFile: "discount.mp3"
                    }
                ]
            }
        }
    }
};
