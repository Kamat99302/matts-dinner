import mattsBurger from './../assets/images/Burgers/matts-burger.jpg'
import fishBurger from './../assets/images/Burgers/fish-burger.webp'
import doubleBeef from './../assets/images/Burgers/double-beef.jpg'
import signatureBurger from './../assets/images/Burgers/signature-burger.jpg'
import fries from './../assets/images/Sides/fries.PNG'
import sweetPotatoesFries from './../assets/images/Sides/sweet-potatoes-fries.png'
import chickenNuggets from './../assets/images/Sides/chicken-nuggets.PNG'
import onionRings from './../assets/images/Sides/onion-rings.PNG'
import cocaCola from './../assets/images/Drinks/coca-cola.PNG'
import erinCoffee from './../assets/images/Drinks/erin-coffee.PNG'
import orangina from './../assets/images/Drinks/orangina.PNG'
import hotChocolate from './../assets/images/Drinks/hot-chocolate.PNG'

export const menuData = {
    burgers: [
        {id: 1, name: "Matt's burger", price: '4.90€', img: mattsBurger, badge: {include: true, color: 'yellow', text: "Popular", showIcon: true, variant:"square"}},
        {id: 2, name: "Double beef", price: '5.90€', img: doubleBeef, badge: {include: true, color: 'green', text: "New", showIcon: true, variant:"square"}},
        {id: 3, name: "Signature burger", price: '4.50€', img: signatureBurger, badge: {include: false, showIcon: false, variant:"square"}},
        {id: 4, name: "Fish burger", price: '5.90€', img: fishBurger, badge: {include: false, showIcon: false, variant:"square"}},
    ],

    sides: [
        {id: 1, name: "Fries ", price: '4.50€', img: fries, badge: {include: true, color: 'yellow', text: "Popular", showIcon: true, variant:"square"}},
        {id: 2, name: "Sweet potato fries", price: '4.90€', img: sweetPotatoesFries, badge: {include: true, color: 'yellow', text: "Popular", showIcon: true, variant:"square"}},
        {id: 3, name: "Nuggets", price: '3.90€', img: chickenNuggets, badge: {include: true, color: 'green', text: "New", showIcon: true, variant:"square"}},
        {id: 4, name: "Onion rings", price: '3.50€', img: onionRings, badge: {include: false}},
    ],

    drinks: [
        {id: 1, name: "Coca-Cola ", price: '2.50€', img: cocaCola, badge: {include: true, color: 'yellow', text: "Popular", showIcon: true, variant:"square"}},
        {id: 2, name: "Erin's Coffee", price: '3.50€', img: erinCoffee, badge: {include: true, color: 'yellow', text: "Popular", showIcon: true, variant:"square"}},
        {id: 3, name: "Orangina", price: '2.50€', img: orangina, badge: {include: false, showIcon: true}},
        {id: 4, name: "Hot Chocolate", price: '3.00€', img: hotChocolate, badge: {include: false, showIcon: false}},
    ]
    
}