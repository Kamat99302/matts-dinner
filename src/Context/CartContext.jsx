import { useState, createContext, useContext } from "react";

const CartContext = createContext()

export function CartProvider({children}){
    const [cartItems, setCartItems] = useState([])
    const [activeCategory, setActiveCategory] = useState('burgers')
    const [activeIndex, setActiveIndex] = useState(0)
    const subTotal = cartItems.reduce((total,item)=>{
        return total + parseFloat(item.price) * item.quantity
    },0)
    const tax = (subTotal * 0.1)
    const total = (subTotal + tax)
   
    function addToCart(product){
        setCartItems((prev)=>[...prev, product])
        
    }

    function removeFromCart(id){
        setCartItems((prev)=>prev.filter(item=>item.id !== id))
    }

    function clearCart(){
        setCartItems([])
    }

    return(
        <CartContext.Provider value={{cartItems, addToCart, clearCart, removeFromCart, tax, subTotal, total, activeCategory, setActiveCategory, activeIndex, setActiveIndex}}> {/* Le drone qui va apporter les données a tous les composants */}
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){ {/* La télécommande qui va permettre d'ouvrir ce que le drone transporte (en faisant useContext dans le composant en question) */}
    return useContext(CartContext)
}