// Enhanced Vocabulary Data with Images and Reorganized Structure

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
                        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
                        audioFile: "fast_food_restaurant.mp3"
                    },
                    {
                        word: "Food Truck",
                        definition: "A mobile restaurant that serves food from a truck or van",
                        example: "The food truck serves delicious tacos on the street corner.",
                        image: "https://images.unsplash.com/photo-1555939594-58d7cb561404?w=600&h=400&fit=crop",
                        audioFile: "food_truck.mp3"
                    },
                    {
                        word: "Drive-Through",
                        definition: "A service where customers order and receive food without leaving their car",
                        example: "I'll get coffee from the drive-through on my way to work.",
                        image: "https://images.unsplash.com/photo-1585238341710-4b4e6ceeb88d?w=600&h=400&fit=crop",
                        audioFile: "drive_through.mp3"
                    },
                    {
                        word: "Food Court",
                        definition: "An area with multiple fast food vendors, usually in a mall",
                        example: "The shopping mall has a large food court with many options.",
                        image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop",
                        audioFile: "food_court.mp3"
                    },
                    {
                        word: "Coffee Shop",
                        definition: "A small restaurant that primarily serves coffee and light meals",
                        example: "Let's meet at the coffee shop for a quick breakfast.",
                        image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&h=400&fit=crop",
                        audioFile: "coffee_shop.mp3"
                    },
                    {
                        word: "Bakery",
                        definition: "A shop that makes and sells bread, cakes, and pastries",
                        example: "The bakery has fresh croissants every morning.",
                        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop",
                        audioFile: "bakery.mp3"
                    },
                    {
                        word: "Sandwich Shop",
                        definition: "A restaurant specializing in sandwiches and quick meals",
                        example: "I grabbed a turkey sandwich from the sandwich shop for lunch.",
                        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&h=400&fit=crop",
                        audioFile: "sandwich_shop.mp3"
                    },
                    {
                        word: "Juice Bar",
                        definition: "A shop that serves fresh juices, smoothies, and health drinks",
                        example: "The juice bar makes delicious açai bowls and fresh smoothies.",
                        image: "https://images.unsplash.com/photo-1590080876-b5e0e9b1d0f5?w=600&h=400&fit=crop",
                        audioFile: "juice_bar.mp3"
                    }
                ]
            },
            casualDining: {
                title: "Casual & Family Dining",
                words: [
                    {
                        word: "Casual Dining Restaurant",
                        definition: "A restaurant with table service and moderate prices",
                        example: "Applebee's is a casual dining restaurant popular with families.",
                        image: "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=600&h=400&fit=crop",
                        audioFile: "casual_dining_restaurant.mp3"
                    },
                    {
                        word: "Family Restaurant",
                        definition: "A restaurant designed to accommodate families with children",
                        example: "This family restaurant has a kids' menu and high chairs.",
                        image: "https://images.unsplash.com/photo-1504674900967-a8f32de4a645?w=600&h=400&fit=crop",
                        audioFile: "family_restaurant.mp3"
                    },
                    {
                        word: "Diner",
                        definition: "A casual restaurant serving simple, hearty American food",
                        example: "The diner is famous for its all-day breakfast menu.",
                        image: "https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=600&h=400&fit=crop",
                        audioFile: "diner.mp3"
                    },
                    {
                        word: "Pizzeria",
                        definition: "A restaurant that specializes in pizza",
                        example: "The local pizzeria makes the best thin-crust pizza in town.",
                        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600&h=400&fit=crop",
                        audioFile: "pizzeria.mp3"
                    },
                    {
                        word: "Buffet Restaurant",
                        definition: "A restaurant where customers serve themselves from a variety of dishes",
                        example: "The buffet restaurant has over 50 different dishes to choose from.",
                        image: "https://images.unsplash.com/photo-1555939594-58d7cb561404?w=600&h=400&fit=crop",
                        audioFile: "buffet_restaurant.mp3"
                    },
                    {
                        word: "Taco Stand",
                        definition: "A casual eatery specializing in tacos and Mexican food",
                        example: "The taco stand on the corner has amazing al pastor tacos.",
                        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop",
                        audioFile: "taco_stand.mp3"
                    },
                    {
                        word: "Ramen Shop",
                        definition: "A restaurant specializing in Japanese noodle soups",
                        example: "The ramen shop serves authentic tonkotsu and miso broths.",
                        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop",
                        audioFile: "ramen_shop.mp3"
                    }
                ]
            },
            upscale: {
                title: "Upscale & Specialty",
                words: [
                    {
                        word: "Fine Dining Restaurant",
                        definition: "An upscale restaurant with high-quality food and formal service",
                        example: "We made reservations at a fine dining restaurant for our anniversary.",
                        image: "https://images.unsplash.com/photo-1559339352-11d3b0ab6d4f?w=600&h=400&fit=crop",
                        audioFile: "fine_dining_restaurant.mp3"
                    },
                    {
                        word: "Steakhouse",
                        definition: "A restaurant that specializes in grilled steaks and meat dishes",
                        example: "The steakhouse is known for its perfectly cooked ribeye steaks.",
                        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
                        audioFile: "steakhouse.mp3"
                    },
                    {
                        word: "Seafood Restaurant",
                        definition: "A restaurant that specializes in fish and seafood dishes",
                        example: "The seafood restaurant serves fresh lobster and salmon.",
                        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
                        audioFile: "seafood_restaurant.mp3"
                    },
                    {
                        word: "Italian Restaurant",
                        definition: "A restaurant that serves Italian cuisine like pasta and pizza",
                        example: "The Italian restaurant makes authentic pasta from scratch.",
                        image: "https://images.unsplash.com/photo-1571407970349-bc2c40e1b272?w=600&h=400&fit=crop",
                        audioFile: "italian_restaurant.mp3"
                    },
                    {
                        word: "Bar",
                        definition: "An establishment that primarily serves alcoholic beverages",
                        example: "The sports bar has big screens showing the game.",
                        image: "https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=600&h=400&fit=crop",
                        audioFile: "bar.mp3"
                    },
                    {
                        word: "Sushi Restaurant",
                        definition: "A Japanese restaurant specializing in sushi and sashimi",
                        example: "The sushi restaurant offers an omakase experience with fresh fish.",
                        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop",
                        audioFile: "sushi_restaurant.mp3"
                    },
                    {
                        word: "Gastropub",
                        definition: "A pub that serves high-quality, gourmet food",
                        example: "The gastropub offers craft beers paired with elevated pub fare.",
                        image: "https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=600&h=400&fit=crop",
                        audioFile: "gastropub.mp3"
                    },
                    {
                        word: "Michelin-Starred Restaurant",
                        definition: "A prestigious restaurant recognized for exceptional cuisine",
                        example: "Dining at a Michelin-starred restaurant is a special culinary experience.",
                        image: "https://images.unsplash.com/photo-1559339352-11d3b0ab6d4f?w=600&h=400&fit=crop",
                        audioFile: "michelin_starred.mp3"
                    }
                ]
            }
        }
    },

    menuVocabulary: {
        title: "Menu Vocabulary",
        icon: "fas fa-book-open",
        categories: {
            courseTypes: {
                title: "Course Types",
                words: [
                    {
                        word: "Appetizer",
                        definition: "A small dish served before the main course to stimulate appetite",
                        example: "We ordered calamari as an appetizer to share.",
                        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
                        audioFile: "appetizer.mp3"
                    },
                    {
                        word: "Main Course",
                        definition: "The primary dish of a meal, usually the largest portion",
                        example: "For my main course, I'll have the grilled salmon.",
                        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
                        audioFile: "main_course.mp3"
                    },
                    {
                        word: "Side Dish",
                        definition: "A smaller dish served alongside the main course",
                        example: "The steak comes with mashed potatoes as a side dish.",
                        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop",
                        audioFile: "side_dish.mp3"
                    },
                    {
                        word: "Dessert",
                        definition: "A sweet course served at the end of a meal",
                        example: "The chocolate cake is the most popular dessert here.",
                        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop",
                        audioFile: "dessert.mp3"
                    },
                    {
                        word: "Beverage",
                        definition: "Any drink, including water, soft drinks, coffee, tea, or alcohol",
                        example: "What beverage would you like with your meal?",
                        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop",
                        audioFile: "beverage.mp3"
                    },
                    {
                        word: "Soup",
                        definition: "A liquid dish made by combining ingredients like meat, vegetables, and broth",
                        example: "The tomato soup is a perfect starter on a cold day.",
                        image: "https://images.unsplash.com/photo-1547592166-7aae4d755744?w=600&h=400&fit=crop",
                        audioFile: "soup.mp3"
                    },
                    {
                        word: "Salad",
                        definition: "A dish of raw or cooked vegetables, often with dressing",
                        example: "The Caesar salad comes with homemade croutons.",
                        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop",
                        audioFile: "salad.mp3"
                    },
                    {
                        word: "Entrée",
                        definition: "The main dish of a meal (especially in French cuisine)",
                        example: "The beef bourguignon is our most popular entrée.",
                        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
                        audioFile: "entree.mp3"
                    }
                ]
            },
            cookingMethods: {
                title: "Cooking Methods",
                words: [
                    {
                        word: "Grilled",
                        definition: "Cooked over direct heat, usually on a grill",
                        example: "The grilled chicken has a nice smoky flavor.",
                        image: "https://images.unsplash.com/photo-1555939594-58d7cb561404?w=600&h=400&fit=crop",
                        audioFile: "grilled.mp3"
                    },
                    {
                        word: "Fried",
                        definition: "Cooked in hot oil or fat",
                        example: "The fried fish is crispy on the outside and tender inside.",
                        image: "https://images.unsplash.com/photo-1612874742237-415c69f18d29?w=600&h=400&fit=crop",
                        audioFile: "fried.mp3"
                    },
                    {
                        word: "Baked",
                        definition: "Cooked in an oven using dry heat",
                        example: "The baked potato is served with butter and sour cream.",
                        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop",
                        audioFile: "baked.mp3"
                    },
                    {
                        word: "Steamed",
                        definition: "Cooked using steam from boiling water",
                        example: "The steamed vegetables retain their nutrients and color.",
                        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop",
                        audioFile: "steamed.mp3"
                    },
                    {
                        word: "Sautéed",
                        definition: "Cooked quickly in a small amount of fat over high heat",
                        example: "The sautéed mushrooms are cooked in garlic and butter.",
                        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
                        audioFile: "sauteed.mp3"
                    },
                    {
                        word: "Roasted",
                        definition: "Cooked with dry heat in an oven, often with oil",
                        example: "The roasted vegetables have a caramelized exterior.",
                        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop",
                        audioFile: "roasted.mp3"
                    },
                    {
                        word: "Boiled",
                        definition: "Cooked in hot water at 100 degrees Celsius",
                        example: "The boiled eggs are served with toast soldiers.",
                        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop",
                        audioFile: "boiled.mp3"
                    },
                    {
                        word: "Braised",
                        definition: "Cooked slowly in liquid in a covered pot",
                        example: "The braised beef is tender and flavorful.",
                        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
                        audioFile: "braised.mp3"
                    }
                ]
            },
            dietaryLabels: {
                title: "Dietary Labels",
                words: [
                    {
                        word: "Vegetarian",
                        definition: "Food that contains no meat, but may include dairy and eggs",
                        example: "The vegetarian pasta is made with fresh vegetables and cheese.",
                        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop",
                        audioFile: "vegetarian.mp3"
                    },
                    {
                        word: "Vegan",
                        definition: "Food that contains no animal products at all",
                        example: "The vegan burger is made with plant-based ingredients.",
                        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop",
                        audioFile: "vegan.mp3"
                    },
                    {
                        word: "Gluten-Free",
                        definition: "Food that does not contain gluten, safe for people with celiac disease",
                        example: "We have a separate gluten-free menu available.",
                        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop",
                        audioFile: "gluten_free.mp3"
                    },
                    {
                        word: "Spicy",
                        definition: "Food that has a hot, peppery taste",
                        example: "The spicy curry might be too hot for some people.",
                        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
                        audioFile: "spicy.mp3"
                    },
                    {
                        word: "Dairy-Free",
                        definition: "Food that contains no milk or milk products",
                        example: "The dairy-free ice cream is made with coconut milk.",
                        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop",
                        audioFile: "dairy_free.mp3"
                    },
                    {
                        word: "Organic",
                        definition: "Food produced without synthetic pesticides or fertilizers",
                        example: "Our organic vegetables come from local farms.",
                        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop",
                        audioFile: "organic.mp3"
                    },
                    {
                        word: "Low-Calorie",
                        definition: "Food with reduced calories, often for health-conscious diners",
                        example: "The low-calorie options are clearly marked on the menu.",
                        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop",
                        audioFile: "low_calorie.mp3"
                    },
                    {
                        word: "Kosher",
                        definition: "Food prepared according to Jewish dietary laws",
                        example: "This restaurant is certified kosher.",
                        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
                        audioFile: "kosher.mp3"
                    }
                ]
            },
            menuStyles: {
                title: "Menu Styles & Pricing",
                words: [
                    {
                        word: "À la Carte",
                        definition: "Ordering individual dishes separately, each with its own price",
                        example: "You can order à la carte or choose from our set menu.",
                        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
                        audioFile: "a_la_carte.mp3"
                    },
                    {
                        word: "Prix Fixe",
                        definition: "A set menu with a fixed price for multiple courses",
                        example: "The prix fixe menu includes appetizer, main course, and dessert.",
                        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
                        audioFile: "prix_fixe.mp3"
                    },
                    {
                        word: "Happy Hour",
                        definition: "A time period with discounted drinks and appetizers",
                        example: "Happy hour is from 4 to 6 PM with half-price drinks.",
                        image: "https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=600&h=400&fit=crop",
                        audioFile: "happy_hour.mp3"
                    },
                    {
                        word: "Chef's Special",
                        definition: "A dish specially recommended by the chef, often not on the regular menu",
                        example: "Tonight's chef's special is pan-seared duck with cherry sauce.",
                        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
                        audioFile: "chefs_special.mp3"
                    },
                    {
                        word: "Kids' Menu",
                        definition: "A special menu with smaller portions and child-friendly foods",
                        example: "The kids' menu has chicken nuggets and mac and cheese.",
                        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
                        audioFile: "kids_menu.mp3"
                    },
                    {
                        word: "Tasting Menu",
                        definition: "A curated selection of small courses chosen by the chef",
                        example: "The tasting menu showcases the chef's best creations.",
                        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
                        audioFile: "tasting_menu.mp3"
                    },
                    {
                        word: "Seasonal Menu",
                        definition: "A menu featuring dishes made with seasonal ingredients",
                        example: "The seasonal menu changes every three months.",
                        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
                        audioFile: "seasonal_menu.mp3"
                    },
                    {
                        word: "Combo Meal",
                        definition: "A bundle of items sold together at a discounted price",
                        example: "The combo meal includes a burger, fries, and a drink.",
                        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
                        audioFile: "combo_meal.mp3"
                    }
                ]
            }
        }
    },

    generalVocabulary: {
        title: "General Restaurant Vocabulary",
        icon: "fas fa-comments",
        categories: {
            staff: {
                title: "Restaurant Staff",
                words: [
                    {
                        word: "Server",
                        definition: "A person who takes orders and serves food to customers",
                        example: "Our server was very friendly and helpful.",
                        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop",
                        audioFile: "server.mp3"
                    },
                    {
                        word: "Host",
                        definition: "A person who greets customers and shows them to their table",
                        example: "The host seated us at a table by the window.",
                        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop",
                        audioFile: "host.mp3"
                    },
                    {
                        word: "Chef",
                        definition: "A professional cook who prepares food in a restaurant",
                        example: "The chef came out to ask how we enjoyed our meal.",
                        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
                        audioFile: "chef.mp3"
                    },
                    {
                        word: "Bartender",
                        definition: "A person who prepares and serves drinks at a bar",
                        example: "The bartender makes excellent cocktails.",
                        image: "https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=600&h=400&fit=crop",
                        audioFile: "bartender.mp3"
                    },
                    {
                        word: "Manager",
                        definition: "A person who oversees the restaurant's operations",
                        example: "I spoke to the manager about our dining experience.",
                        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop",
                        audioFile: "manager.mp3"
                    },
                    {
                        word: "Busboy",
                        definition: "A restaurant staff member who clears tables and assists servers",
                        example: "The busboy quickly cleared our plates between courses.",
                        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop",
                        audioFile: "busboy.mp3"
                    },
                    {
                        word: "Sommelier",
                        definition: "A wine expert who helps customers choose wines",
                        example: "The sommelier recommended a perfect wine pairing.",
                        image: "https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=600&h=400&fit=crop",
                        audioFile: "sommelier.mp3"
                    },
                    {
                        word: "Sous Chef",
                        definition: "The second-in-command in a kitchen, assisting the head chef",
                        example: "The sous chef manages the kitchen during service.",
                        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
                        audioFile: "sous_chef.mp3"
                    }
                ]
            },
            service: {
                title: "Service Types",
                words: [
                    {
                        word: "Table Service",
                        definition: "Service where a server takes your order and brings food to your table",
                        example: "This restaurant offers full table service.",
                        image: "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=600&h=400&fit=crop",
                        audioFile: "table_service.mp3"
                    },
                    {
                        word: "Take-Out",
                        definition: "Food ordered to be eaten elsewhere, not in the restaurant",
                        example: "We ordered take-out because we were in a hurry.",
                        image: "https://images.unsplash.com/photo-1585238341710-4b4e6ceeb88d?w=600&h=400&fit=crop",
                        audioFile: "take_out.mp3"
                    },
                    {
                        word: "Delivery",
                        definition: "Service where food is brought to your home or office",
                        example: "The restaurant offers free delivery within 5 miles.",
                        image: "https://images.unsplash.com/photo-1585238341710-4b4e6ceeb88d?w=600&h=400&fit=crop",
                        audioFile: "delivery.mp3"
                    },
                    {
                        word: "Reservation",
                        definition: "Booking a table in advance",
                        example: "I made a reservation for 7 PM under the name Smith.",
                        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
                        audioFile: "reservation.mp3"
                    },
                    {
                        word: "Walk-In",
                        definition: "Arriving at a restaurant without a reservation",
                        example: "Do you accept walk-ins, or do we need a reservation?",
                        image: "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=600&h=400&fit=crop",
                        audioFile: "walk_in.mp3"
                    },
                    {
                        word: "Buffet Service",
                        definition: "Service where customers serve themselves from various dishes",
                        example: "The buffet service allows you to try many different foods.",
                        image: "https://images.unsplash.com/photo-1555939594-58d7cb561404?w=600&h=400&fit=crop",
                        audioFile: "buffet_service.mp3"
                    },
                    {
                        word: "Catering",
                        definition: "Service providing food and beverages for events",
                        example: "We hired the restaurant to cater our wedding reception.",
                        image: "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=600&h=400&fit=crop",
                        audioFile: "catering.mp3"
                    },
                    {
                        word: "Dine-In",
                        definition: "Eating at the restaurant's tables",
                        example: "Would you like to dine-in or take-out?",
                        image: "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=600&h=400&fit=crop",
                        audioFile: "dine_in.mp3"
                    }
                ]
            },
            payment: {
                title: "Payment & Tipping",
                words: [
                    {
                        word: "Check",
                        definition: "The bill showing what you owe for your meal",
                        example: "Could we have the check, please?",
                        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
                        audioFile: "check.mp3"
                    },
                    {
                        word: "Tip",
                        definition: "Extra money given to service staff for good service",
                        example: "In the US, it's customary to leave a 15-20% tip.",
                        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
                        audioFile: "tip.mp3"
                    },
                    {
                        word: "Split the Bill",
                        definition: "Dividing the cost of a meal among multiple people",
                        example: "Let's split the bill four ways.",
                        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
                        audioFile: "split_the_bill.mp3"
                    },
                    {
                        word: "Credit Card",
                        definition: "A payment method using a plastic card",
                        example: "Do you accept credit cards?",
                        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
                        audioFile: "credit_card.mp3"
                    },
                    {
                        word: "Receipt",
                        definition: "A written record of your payment",
                        example: "Could I have a receipt for my business expenses?",
                        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
                        audioFile: "receipt.mp3"
                    },
                    {
                        word: "Cash",
                        definition: "Physical money used for payment",
                        example: "Do you prefer cash or card?",
                        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
                        audioFile: "cash.mp3"
                    },
                    {
                        word: "Gratuity",
                        definition: "A formal term for tip or service charge",
                        example: "Gratuity is not included in the bill.",
                        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
                        audioFile: "gratuity.mp3"
                    },
                    {
                        word: "Discount",
                        definition: "A reduction in the regular price",
                        example: "We offer a 10% discount for seniors.",
                        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
                        audioFile: "discount.mp3"
                    }
                ]
            }
        }
    }
};

// Practice words for pronunciation section
const practiceWords = [
    "Restaurant", "Appetizer", "Reservation", "Vegetarian", "Gluten-Free",
    "À la Carte", "Chef's Special", "Take-Out", "Delivery", "Tip",
    "Server", "Host", "Bartender", "Fine Dining", "Casual Dining",
    "Food Truck", "Buffet", "Steakhouse", "Seafood", "Pizzeria"
];

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { vocabularyData, practiceWords };
}
