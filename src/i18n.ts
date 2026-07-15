import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                //START SCREEN
                "order_here": "ORDER HERE",

                //SERVICE CHOICE
                "where_eat": "Where will you be eating today?",
                "dine_in": "DINE IN",
                "take_away": "TAKE AWAY",

                //CATEGORIES
                "burgers": "Burgers",
                "sides": "Sides",
                "beverages": "Beverages",
                "desserts": "Desserts",

                //BADGES
                "popular": "Popular",
                "new" : "New",

                //ARTICLES
                "signature_burger": "Signature burger",
                "fish_burger": "Fish burger",
                "truffle_burger": "Truffle burger",
                "swiss_burger": "Swiss burger",

                "sweet_potato_fries": "Sweet potato fries",
                "pasta_bolognese": "Pasta bolognese",
                "caesar_salad": "Caesar salad",
                "coleslaw": "Coleslaw",

                "hot_chocolate": "Hot chocolate",
                "blond_beer": "Blond beer",
                "lager_beer": "Lager beer",
                "mango_juice": "Mango juice",
                "lemonade": "Lemonade",

                "waffles": "Waffles",
                "matcha_ice_cream": "Matcha ice cream",
                
                // BURGERS
                "ingredients_matts_burger": "Steak, cheddar, lettuce...",
                "ingredients_double_beef": "Double steak, cheddar, onions...",
                "ingredients_signature_burger": "Chicken, avocado, tomato...",
                "ingredients_fish_burger": "Fish fillet, tartar sauce, lettuce...",
                "ingredients_truffle_burger": "Beef, truffle mayo, mushrooms...",
                "ingredients_chicken_burger": "Crispy chicken, lettuce, tomatoes...",
                "ingredients_swiss_burger": "Beef, swiss cheese, sautéed mushrooms...",
                "ingredients_teriyaki_burger": "Crispy chicken, teriyaki sauce, coleslaw...",

                // SIDES
                "ingredients_matts_fries": "Potatoes, salt...",
                "ingredients_sweet_potato_fries": "Sweet potatoes, paprika, salt...",
                "ingredients_chicken_nuggets": "9 chicken nuggets, crispy breadcrumbs...",
                "ingredients_onion_rings": "Onions, flour, breadcrumbs...",
                "ingredients_mac_and_cheese": "Macaroni, cheddar sauce...",
                "ingredients_pasta_bolognese": "Spaghetti, beef, tomato sauce...",
                "ingredients_caesar_salad": "Romaine, parmesan, croutons...",
                "ingredients_coleslaw": "Cabbage, carrots, mayo...",

                // DRINKS
                "ingredients_coca_cola": "Sparkling water, sugar, caramel...",
                "ingredients_erin_coffee": "Espresso, hot water...",
                "ingredients_orangina": "Orange juice, sparkling water...",
                "ingredients_hot_chocolate": "Milk, cocoa, sugar...",
                "ingredients_blond_beer": "Malt, hops, water, yeast...",
                "ingredients_lager_beer": "Malt, hops, water, crisp finish...",
                "ingredients_mango_juice": "Mango, sugar, water...",
                "ingredients_lemonade": "Lemon juice, sparkling water, sugar...",

                // DESSERTS
                "ingredients_brownies": "Chocolate, butter, eggs...",
                "ingredients_cheese_cake": "Cream cheese, biscuits, sugar...",
                "ingredients_churros": "Flour, sugar, cinnamon...",
                "ingredients_waffles": "Flour, eggs, butter, vanilla...",
                "ingredients_matcha_ice_cream": "Matcha, milk, sugar, cream...",

                //CART
                "your_cart": "Your cart",
                "your_cart_empty": "Your cart is empty",
                "sub_total": "Subtotal",
                "tax": "Tax",

                //BUTTONS
                "complete_order": "Complete order",
                "add_to_cart": "ADD TO CART",
                "view_cart": "VIEW CART",
                "clear_cart": "CLEAR CART",
                "menu": "MENU",

                //QUANTITY
                "quantity": "Quantity",

                //OPTIONS
                "add_ice": "Add ice",
                "cheesy": "Cheesy",
                "spicy":"Spicy",
                "add_milk":"Add milk",
                "add_sugar": "Add sugar",
                "add_lemon": "Add lemon",

                //CART OPTIONS VALUES
                "ice": "Ice",
                "hot_milk": "Hot milk",
                "sugar": "Sugar",
                "lemon": "Lemon",
                "chocolate": "Chocolate",
                "vanilla": "Vanilla",
                "ketchup": "Ketchup",
                "mayo": "Mayo",
                "bacon": "Bacon",
                "cheese": "Cheese",
                "chili": "Chili",

                //CONFIRMATION
                "order_confirmed": "Order confirmed!",
                "order_number": "Order",
                "total": "Total",
                "estimated_time": "Estimated time: 10 minutes",
                "wait_counter": "Please wait at the counter",
                "new_order": "New order",

            }
        },
        fr: {
            translation: {
                //SERVICE CHOICE
                "where_eat": "Où allez vous manger aujourd'hui?",
                "dine_in": "SUR PLACE",
                "take_away": "À EMPORTER",

                //CATEGORIES

                "burgers": "Burgers",
                "sides": "Accomp.",
                "beverages": "Boissons",
                "desserts": "Desserts",

                //BADGES
                "popular": "Populaire",
                "new" : "Nouveau",

                //ARTICLES 
                "signature_burger": "Burger Signature",
                "fish_burger": "Burger poisson",
                "truffle_burger": "Burger à la truffe",
                "swiss_burger": "Burger suisse",

                "sweet_potato_fries": "Frites douces",
                "pasta_bolognese": "Pâtes bolognaise",
                "caesar_salad": "Salade César",
                "coleslaw": "Salade de choux",

                "hot_chocolate": "Chocolat chaud",
                "blond_beer": "Bière blonde",
                "lager_beer": "Bière Lager",
                "mango_juice": "Jus de mangue",
                "lemonade": "Limonade",

                "waffles": "Gaufres",
                "matcha_ice_cream": "Glace au Matcha",


                //INGREDIENTS
                // BURGERS
                "ingredients_matts_burger": "Bœuf, cheddar, laitue...",
                "ingredients_double_beef": "Double bœuf, cheddar, oignons...",
                "ingredients_signature_burger": "Poulet, avocat, tomate...",
                "ingredients_fish_burger": "Filet de poisson, sauce tartare, laitue...",
                "ingredients_truffle_burger": "Bœuf, mayo à la truffe, champignons...",
                "ingredients_chicken_burger": "Poulet croustillant, laitue, tomates...",
                "ingredients_swiss_burger": "Bœuf, fromage suisse, champignons sautés...",
                "ingredients_teriyaki_burger": "Poulet croustillant, sauce teriyaki, coleslaw...",

                // SIDES
                "ingredients_matts_fries": "Pommes de terre, sel...",
                "ingredients_sweet_potato_fries": "Patates douces, paprika, sel...",
                "ingredients_chicken_nuggets": "9 nuggets de poulet, chapelure croustillante...",
                "ingredients_onion_rings": "Oignons, farine, chapelure...",
                "ingredients_mac_and_cheese": "Macaroni, sauce au cheddar...",
                "ingredients_pasta_bolognese": "Spaghetti, bœuf, sauce tomate...",
                "ingredients_caesar_salad": "Romaine, parmesan, croûtons...",
                "ingredients_coleslaw": "Chou, carottes, mayo...",

                // BEVERAGES
                "ingredients_coca_cola": "Eau gazeuse, sucre, caramel...",
                "ingredients_erin_coffee": "Espresso, eau chaude...",
                "ingredients_orangina": "Jus d'orange, eau gazeuse...",
                "ingredients_hot_chocolate": "Lait, cacao, sucre...",
                "ingredients_blond_beer": "Malt, houblon, eau, levure...",
                "ingredients_lager_beer": "Malt, houblon, eau, final rafraîchissant...",
                "ingredients_mango_juice": "Mangue, sucre, eau...",
                "ingredients_lemonade": "Jus de citron, eau gazeuse, sucre...",

                // DESSERTS
                "ingredients_brownies": "Chocolat, beurre, œufs...",
                "ingredients_cheese_cake": "Fromage à la crème, biscuits, sucre...",
                "ingredients_churros": "Farine, sucre, cannelle...",
                "ingredients_waffles": "Farine, œufs, beurre, vanille...",
                "ingredients_matcha_ice_cream": "Matcha, lait, sucre, crème...",

                // CART 
                "your_cart": "Votre panier",
                "your_cart_empty": "Votre panier est vide",
                "sub_total": "Sous-total",
                "tax": "Taxes",

                // BUTTONS
                "complete_order": "Commander",
                "add_to_cart": "AJOUTER",
                "view_cart": "VOIR PANIER",
                "clear_cart": "VIDER",
                "menu": "MENU",

                //QUANTITY
                "quantity": "Quantité",

                //OPTIONS PRODUCTDETAIL
                "add_ice": "Glaçons",
                "cheesy": "Fromage",
                "spicy": "Épicé",
                "add_milk":"Lait",
                "add_sugar": "Sucre",
                "add_lemon": "Citron",

                //CART OPTIONS VALUES
                "ice": "Glaçons",
                "hot_milk": "Lait chaud",
                "sugar": "Sucre",
                "lemon": "Citron",
                "chocolate": "Chocolat",
                "vanilla": "Vanille",

                //CONFIRMATION
                "order_confirmed": "Commande confirmée !",
                "order_number": "Commande",
                "estimated_time": "Temps estimé: 10 minutes",
                "wait_counter": "Veuillez patienter au comptoir",
                "new_order": "Commander",
            }
        }
    },
    lng: 'en',
    fallbackLng: 'en'
})

export default i18n