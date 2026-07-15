import { useState, createContext, useContext } from "react";
import { type CartItem, type CartContextType, type MenuCategory } from "../types";
import type { ReactNode } from "react"
const CartContext = createContext<CartContextType | undefined> (undefined)

export function CartProvider({children}:{children: ReactNode}){
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [quantity, setQuantity] = useState(1)
    const [activeCategory, setActiveCategory] = useState<MenuCategory>('burgers')
    const [activeIndex, setActiveIndex] = useState(0)
    const subTotal = cartItems.reduce((total,item)=>{
        return total + parseFloat(item.price) * item.quantity
    },0)
    const tax = (subTotal * 0.1)
    const total = (subTotal + tax)
   
    function addToCart(product:CartItem){
        setCartItems((prev)=>[...prev, product])
    }

    function removeFromCart(id:number){
        setCartItems((prev)=>prev.filter(item=>item.id !== id))
    }

    function clearCart(){
        setCartItems([])
    }
    
    function incrementQuantity(){
        if (quantity === 5){
            return
        }
        setQuantity(prev=>prev + 1)
    }

    function decrementQuantity(){
        if (quantity === 1){
            return
        }
        setQuantity(prev=>prev - 1)
    }

    function decrementItemQuantity(id: number) {
        setCartItems(prev =>
             prev.map(item => {
                if (item.id !== id){
                    return item
                }

                if (item.quantity > 1 ){
                    return { ...item, quantity: item.quantity - 1 }
                }          
                return item
             }
    ))
    }


    function incrementItemQuantity(id: number) {
        setCartItems(prev =>
             prev.map(item => {
                if (item.id !== id){
                    return item
                }

                if (item.quantity < 5 ){
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
             }
    ))
    }



    return(
        <CartContext.Provider value={{cartItems, addToCart, clearCart, removeFromCart, tax, subTotal, total, activeCategory, setActiveCategory, activeIndex, setActiveIndex, quantity, incrementQuantity, decrementQuantity, incrementItemQuantity, decrementItemQuantity}}> {/* Le drone qui va apporter les données a tous les composants */}
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){ {/* La télécommande qui va permettre d'ouvrir ce que le drone transporte (en faisant useContext dans le composant en question) */}
    const context = useContext(CartContext)
    if (!context){
        throw new Error ('useCart must be used within a CartProvider')
    }
    return context
}