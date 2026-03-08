import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                //SERVICE CHOICE
                "where_eat": "Where will you be eating today?",
                "dine_in": "DINE IN",
                "take_away": "TAKE AWAY",

                //CART
                "your_cart": "Your cart",
                "your_cart_empty": "Your cart is empty",
                "sub_total": "Subtotal",
                "tax": "Tax",
                "complete_order": "Complete order",
                "add_to_cart": "ADD TO CART",
                "view_cart": "VIEW CART",
            }
        },
        fr: {
            translation: {
                //SERVICE CHOICE
                "where_eat": "Où allez vous manger aujourd'hui?",
                "dine_in": "SUR PLACE",
                "take_away": "À EMPORTER",

                //CART
                "your_cart": "Votre panier",
                "your_cart_empty": "Votre panier est vide",
                "sub_total": "Sous-total",
                "tax": "Taxes",
                "complete_order": "Commander",
                "add_to_cart": "AJOUTER AU PANIER",
                "view_cart": "VOIR LE PANIER",
            }
        }
    },
    lng: 'en',
    fallbackLng: 'en'
})

export default i18n