import { useState, createContext, useContext } from "react";

const CartContext = createContext()

export function CartProvider({children}){
    const [cartItems, setCartItems] = useState([])
   
    function addToCart(product){
        setCartItems((prev)=>[...prev, product])
        
    }

    function clearCart(){
        setCartItems([])
    }
    return(
        <CartContext.Provider value={{cartItems, addToCart, clearCart}}> {/* Le drone qui va apporter les données a tous les composants */}
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){ {/* La télécommande qui va permettre d'ouvrir ce que le drone transporte (en faisant useContext dans le composant en question) */}
    return useContext(CartContext)
}