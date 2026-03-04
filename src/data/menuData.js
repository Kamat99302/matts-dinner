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

import cocaCola from './../assets/images/Drinks/coca-cola.PNG'
import erinCoffee from './../assets/images/Drinks/erin-coffee.PNG'
import orangina from './../assets/images/Drinks/orangina.PNG'
import hotChocolate from './../assets/images/Drinks/hot-chocolate.PNG'

import brownies from './../assets/images/Desserts/brownies.PNG'
import cheseCake from './../assets/images/Desserts/cheese-cake.PNG'
import churros from './../assets/images/Desserts/churros.PNG'
import waffles from './../assets/images/Desserts/waffles.PNG'

export const menuData = {
    burgers: [
        {id: 1, name: "Matt's burger", ingredients: 'Steak, cheddar, lettuce...', price: '4.90€', img: mattsBurger, badge: {include: true, color: 'yellow', text: "Popular", showIcon: true, variant:"square"}, type:'burger'},
        {id: 2, name: "Double beef", ingredients: 'Double steak, cheddar, onions...', price: '5.90€', img: doubleBeef, badge: {include: true, color: 'green', text: "New", showIcon: true, variant:"square"}, type:'burger'},
        {id: 3, name: "Signature burger", ingredients: 'Chicken, avocado, tomato...', price: '4.50€', img: signatureBurger, badge: {include: false, showIcon: false, variant:"square"}, type:'burger'},
        {id: 4, name: "Fish burger", ingredients: 'Fish fillet, tartar sauce, lettuce...', price: '5.90€', img: fishBurger, badge: {include: false, showIcon: false, variant:"square"}, type:'burger'},
        {id: 5, name: "Truffle burger", ingredients: 'Beef, truffle mayo, mushrooms...', price: '6.90€', img: truffleBurger, badge: {include: false, showIcon: false, variant:"square"}, type:'burger'},
        {id: 6, name: "Chicken burger", ingredients: 'Crispy chicken, lettuce, tomatoes... ', price: '5.50€', img: chickenBurger, badge: {include: false, showIcon: false, variant:"square"}, type:'burger'},
        {id: 7, name: "Swiss burger", ingredients: 'beef, swiss cheese, sautéed mushrooms... ', price: '5.90€', img: swissBurger, badge: {include: false, showIcon: false, variant:"square"}, type:'burger'},
        {id: 8, name: "Teriyaki burger", ingredients: 'crispy chicken, teriyaki sauce, coleslaw... ', price: '5.50€', img: teriyakiBurger, badge: {include: false, showIcon: false, variant:"square"}, type:'burger'}
    ],

    sides: [
        {id: 6, name: "Matt's Fries ", ingredients: 'Potatoes, salt...', price: '4.50€', img: fries, badge: {include: true, color: 'yellow', text: "Popular", showIcon: true, variant:"square"}, type:'fries'},
        {id: 7, name: "Sweet potato fries", ingredients: 'Sweet potatoes, paprika, salt...', price: '4.90€', img: sweetPotatoesFries, badge: {include: true, color: 'yellow', text: "Popular", showIcon: true, variant:"square"}, type:'fries'},
        {id: 8, name: "Nuggets", price: '3.90€', ingredients: 'Chicken, breadcrumbs, spices...', img: chickenNuggets, badge: {include: true, color: 'green', text: "New", showIcon: true, variant:"square"}, type:'nuggets'},
        {id: 9, name: "Onion rings", price: '3.50€', ingredients: 'Onions, flour, breadcrumbs...', img: onionRings, badge: {include: false}, type:'fries'},
        {id: 69, name: "Mac & cheese", price: '3.90€', ingredients: 'Macaroni, cheddar sauce...', img:macAndCheese, badge: {include: false}, type:'simple-side'},
        {id: 70, name: "Pasta bolognese", price: '3.80€', ingredients: 'Spaghetti, beef, tomato sauce...', img:pastaBolognese, badge: {include: false}, type:'simple-side'}

    ],

    beverages: [
        {id: 10, name: "Coca-Cola ", ingredients: 'Sparkling water, sugar, caramel...', price: '2.50€', img: cocaCola, badge: {include: true, color: 'yellow', text: "Popular", showIcon: true, variant:"square"}, type:'cold-drink'},
        {id: 11, name: "Erin's Coffee", ingredients: 'Espresso, hot water...', price: '3.50€', img: erinCoffee, badge: {include: true, color: 'yellow', text: "Popular", showIcon: true, variant:"square"}, type:'hot-drink'},
        {id: 12, name: "Orangina", ingredients: 'Orange juice, sparkling water...', price: '2.50€', img: orangina, badge: {include: false, showIcon: true}, type:'cold-drink'},
        {id: 13, name: "Hot Chocolate", ingredients: 'Milk, cocoa, sugar...', price: '3.00€', img: hotChocolate, badge: {include: false, showIcon: false}, type:'hot-drink'},
    ],

    desserts: [
        {id: 14, name: "Brownies ", ingredients: 'Chocolate, butter, eggs...', price: '3.50€', img: brownies, badge: {include: true, color: 'yellow', text: "Popular", showIcon: true, variant:"square"}},
        {id: 15, name: "Cheese Cake", ingredients : 'Cream cheese, biscuits, sugar...', price: '4.00€', img: cheseCake, badge: {include: true, color: 'green', text: "New", showIcon: true, variant:"square"}},
        {id: 16, name: "Churros", ingredients: 'Flour, sugar, cinnamon...', price: '3.00€', img: churros, badge: {include: false, showIcon: true}},
        {id: 17, name: "Waffles", ingredients: 'Flour, eggs, butter, vanilla...', price: '4.50€', img: waffles, badge: {include: false, showIcon: false}},
    ]
    
}