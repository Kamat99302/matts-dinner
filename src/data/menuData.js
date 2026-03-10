import mattsBurger from './../assets/images/Burgers/matts-burger.jpg'
import fishBurger from './../assets/images/Burgers/fish-burger.webp'
import doubleBeef from './../assets/images/Burgers/double-beef.jpg'
import signatureBurger from './../assets/images/Burgers/signature-burger.jpg'
import truffleBurger from './../assets/images/Burgers/truffle-burger.PNG'
import chickenBurger from './../assets/images/Burgers/chicken-burger.PNG'
import swissBurger from './../assets/images/Burgers/swiss-burger.PNG'
import teriyakiBurger from './../assets/images/Burgers/teriyaki-burger.PNG'

import fries from './../assets/images/Sides/fries.PNG'
import sweetPotatoesFries from './../assets/images/Sides/sweet-potatoes-fries.png'
import chickenNuggets from './../assets/images/Sides/chicken-nuggets.PNG'
import onionRings from './../assets/images/Sides/onion-rings.PNG'
import macAndCheese from './../assets/images/Sides/mac-and-cheese.PNG'
import pastaBolognese from './../assets/images/Sides/pasta-bolognese.PNG'
import caesarSalad from './../assets/images/Sides/caesar-salad.PNG'
import colesaw from './../assets/images/Sides/colesaw.PNG'

import cocaCola from './../assets/images/Drinks/coca-cola.PNG'
import erinCoffee from './../assets/images/Drinks/erin-coffee.PNG'
import orangina from './../assets/images/Drinks/orangina.PNG'
import hotChocolate from './../assets/images/Drinks/hot-chocolate.PNG'
import blondBeer from './../assets/images/Drinks/blond-beer.PNG'
import lagerBeer from './../assets/images/Drinks/lager-beer.PNG'
import mangoJuice from './../assets/images/Drinks/mango-juice.PNG'
import lemonade from './../assets/images/Drinks/lemonade.PNG'

import brownies from './../assets/images/Desserts/brownies.PNG'
import cheseCake from './../assets/images/Desserts/cheese-cake.PNG'
import churros from './../assets/images/Desserts/churros.PNG'
import waffles from './../assets/images/Desserts/waffles.PNG'
import matchaIceCream from './../assets/images/Desserts/matcha-ice-cream.PNG'

export const menuData = {
    burgers: [
        {id: 1, name: "Matt's burger", ingredients: 'ingredients_matts_burger', price: '4.90€', img: mattsBurger, badge: {include: true, color: 'yellow', text: "popular", showIcon: true, variant:"square"}, type:'burger'},
        {id: 2, name: "Double beef", ingredients: 'ingredients_double_beef', price: '5.90€', img: doubleBeef, badge: {include: true, color: 'green', text: "new", showIcon: true, variant:"square"}, type:'burger'},
        {id: 3, name: "Signature burger", nameKey: "signature_burger", ingredients: 'ingredients_signature_burger', price: '4.50€', img: signatureBurger, badge: {include: false, showIcon: false, variant:"square"}, type:'burger'},
        {id: 4, name: "Fish burger", nameKey: "fish_burger", ingredients: 'ingredients_fish_burger', price: '5.90€', img: fishBurger, badge: {include: false, showIcon: false, variant:"square"}, type:'burger'},
        {id: 5, name: "Truffle burger", nameKey:"truffle_burger", ingredients: 'ingredients_truffle_burger', price: '6.90€', img: truffleBurger, badge: {include: false, showIcon: false, variant:"square"}, type:'burger'},
        {id: 6, name: "Chicken burger", ingredients: 'ingredients_chicken_burger', price: '5.50€', img: chickenBurger, badge: {include: false, showIcon: false, variant:"square"}, type:'burger'},
        {id: 7, name: "Swiss burger", nameKey:'swiss_burger', ingredients: 'ingredients_swiss_burger', price: '5.90€', img: swissBurger, badge: {include: false, showIcon: false, variant:"square"}, type:'burger'},
        {id: 8, name: "Teriyaki burger", ingredients: 'ingredients_teriyaki_burger', price: '5.50€', img: teriyakiBurger, badge: {include: false, showIcon: false, variant:"square"}, type:'burger'}
    ],

    sides: [
        {id: 9, name: "Matt's Fries ", ingredients: 'ingredients_matts_fries', price: '4.50€', img: fries, badge: {include: true, color: 'yellow', text: "popular", showIcon: true, variant:"square"}, type:'fries'},
        {id: 10, name: "Sweet potato fries", nameKey:'sweet_potato_fries', ingredients: 'ingredients_sweet_potato_fries', price: '4.90€', img: sweetPotatoesFries, badge: {include: true, color: 'yellow', text: "popular", showIcon: true, variant:"square"}, type:'fries'},
        {id: 11, name: "Nuggets (9pcs)", price: '3.50€', ingredients: 'ingredients_chicken_nuggets', img: chickenNuggets, badge: {include: true, color: 'green', text: "new", showIcon: true, variant:"square"}, type:'nuggets'},
        {id: 12, name: "Onion rings", price: '3.50€', ingredients: 'ingredients_onion_rings', img: onionRings, badge: {include: false}, type:'fries'},
        {id: 13, name: "Mac & cheese", price: '3.90€', ingredients: 'ingredients_mac_and_cheese', img: macAndCheese, badge: {include: false}},
        {id: 14, name: "Pasta bolognese", nameKey:'pasta_bolognese', price: '3.80€', ingredients: 'ingredients_pasta_bolognese', img: pastaBolognese, badge: {include: false}},
        {id: 15, name: "Caesar salad", nameKey:'caesar_salad', price: '4.50€', ingredients: 'ingredients_caesar_salad', img: caesarSalad, badge: {include: false}},
        {id: 16, name: "Coleslaw", nameKey:'coleslaw', price: '2.50€', ingredients: 'ingredients_coleslaw ', img: colesaw, badge: {include: false}}
    ],

    beverages: [
        {id: 17, name: "Coca-Cola ", ingredients: 'ingredients_coca_cola', price: '2.50€', img: cocaCola, badge: {include: true, color: 'yellow', text: "popular", showIcon: true, variant:"square"}, type:'cold-drink'},
        {id: 18, name: "Erin's Coffee", ingredients: 'ingredients_erin_coffee', price: '3.50€', img: erinCoffee, badge: {include: true, color: 'yellow', text: "popular", showIcon: true, variant:"square"}, type:'hot-drink'},
        {id: 19, name: "Orangina", ingredients: 'ingredients_orangina', price: '2.50€', img: orangina, badge: {include: true, color: 'green', text: 'new', showIcon: true}, type:'cold-drink'},
        {id: 20, name: "Hot chocolate", nameKey:'hot_chocolate', ingredients: 'ingredients_hot_chocolate', price: '3.00€', img: hotChocolate, badge: {include: false, showIcon: false}, type:'hot-drink'},
        {id: 21, name: "Blond beer", nameKey:'blond_beer', ingredients: 'ingredients_blond_beer', price: '3.50€', img: blondBeer, badge: {include: false, showIcon: false}},
        {id: 22, name: "Lager beer", nameKey:'lager_beer', ingredients: 'ingredients_lager_beer', price: '3.00€', img: lagerBeer, badge: {include: false, showIcon: false}},
        {id: 23, name: "Mango juice", nameKey:'mango_juice', price: '2.90€', ingredients: 'ingredients_mango_juice', img: mangoJuice, badge: {include: false}, type:'cold-drink'},
        {id: 24, name: "Lemonade", nameKey:'lemonade', price: '2.50€', ingredients: 'ingredients_lemonade', img: lemonade, badge: {include: false}, type:'cold-drink'}
    ],

    desserts: [
        {id: 25, name: "Brownies ", ingredients: 'ingredients_brownies', price: '3.50€', img: brownies, badge: {include: true, color: 'yellow', text: "popular", showIcon: true, variant:"square"}},
        {id: 26, name: "Cheese Cake", ingredients : 'ingredients_cheese_cake', price: '4.00€', img: cheseCake, badge: {include: true, color: 'green', text: "new", showIcon: true, variant:"square"}},
        {id: 27, name: "Churros", ingredients: 'ingredients_churros', price: '3.00€', img: churros, badge: {include: false, showIcon: true}},
        {id: 28, name: "Waffles", nameKey: 'waffles', ingredients: 'ingredients_waffles', price: '4.50€', img: waffles, badge: {include: false, showIcon: false}},
        {id: 29, name: "Matcha ice cream", nameKey:'matcha_ice_cream', ingredients: 'ingredients_matcha_ice_cream', price: '4.50€', img: matchaIceCream, badge: {include: false, showIcon: false}, type:'ice-cream'}
    ]
    
}