import mattsBurger from './../assets/images/Burgers/matts-burger.jpg'
import fishBurger from './../assets/images/Burgers/fish-burger.webp'
import doubleBeef from './../assets/images/Burgers/double-beef.jpg'
import signatureBurger from './../assets/images/Burgers/signature-burger.jpg'
import fries from './../assets/images/Sides/fries.PNG'
import sweetPotatoesFries from './../assets/images/Sides/sweet-potatoes-fries.png'
import chickenNuggets from './../assets/images/Sides/chicken-nuggets.PNG'
import onionRings from './../assets/images/Sides/onion-rings.PNG'

export const menuData = {
    burgers: [
        {id: 1, name: "Matt's burger", price: '4.90€', img: mattsBurger, badge: {include: true, color: 'yellow', text: "Popular", showIcon: true, variant:"square"}},
        {id: 2, name: "Double beef", price: '5.90€', img: doubleBeef, badge: {include: true, color: 'green', text: "New", showIcon: true, variant:"square"}},
        {id: 3, name: "Signature burger", price: '4.50€', img: signatureBurger, badge: {include: false, color: '', text: "", showIcon: false, variant:"square"}},
        {id: 4, name: "Fish burger", price: '5.90€', img: fishBurger, badge: {include: false, color: '', text: "", showIcon: false, variant:"square"}},
    ],

    sides: [
        {id: 1, name: "Fries ", price: '4.50€', img: fries, badge: {include: true, color: 'yellow', text: "Popular", showIcon: true, variant:"square"}},
        {id: 2, name: "Sweet potato fries", price: '4.90€', img: sweetPotatoesFries, badge: {include: true, color: 'yellow', text: "Popular", showIcon: true, variant:"square"}},
        {id: 3, name: "Nuggets", price: '3.90€', img: signatureBurger, badge: {include: true, color: 'green', text: "New", showIcon: true, variant:"square"}},
        {id: 4, name: "Onion rings", price: '3.50€', img: fishBurger, badge: {include: false, color: '', text: "", showIcon: false, variant:"square"}},
    ]
    
}