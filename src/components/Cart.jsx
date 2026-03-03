import './Cart.css'
import { Header } from 'matts-dinner-component-library'
import { CartItemCard } from 'matts-dinner-component-library'
import { Button } from 'matts-dinner-component-library'
import { CartFooter } from 'matts-dinner-component-library'
import deleteImg from '../assets/images/trash-can.png'
import addBtn from '../assets/images/add-button.png'
import removeBtn from '../assets/images/remove-button.png'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../Context/CartContext'



export default function Cart(){
    const {cartItems, clearCart} = useCart()
    const navigate = useNavigate()
    const subTotal = cartItems.reduce((total,item)=>{
        return total + parseFloat(item.price) * item.quantity
    },0)
    const tax = subTotal * 0.1
    const total = subTotal + tax

    return(
        
        <div className='cart-page-container'>
            <Header onGoBack={()=>navigate('/menu')} showNavIcons={true}></Header>
            <span className='title'>Your cart</span>

            {cartItems.map((item)=>(
                <div className='cart-container' key={item.id}>
                <CartItemCard 
                imgAdd={addBtn} 
                imgRemove={removeBtn}
                deleteIcon={deleteImg} 
                productImg={item.img}
                productName={item.name} 
                productOptions={'Medium+, bacon'}
                productPrice={item.price}
                quantity={item.quantity}>
                </CartItemCard>
                </div>
            ))}
            
            
        <div className='cart-subtotal-tax-container'>
            <div className='cart-subtotal-tax-container-left'>
                <span>Subtotal</span>
                <span className='cart-subtotal-tax'>Tax (10%)</span>
            </div>
            <div className='cart-subtotal-tax-container-right'>
                <span className='cart-subtotal-subtotal'>{subTotal.toFixed(2)} €</span>
                <span className='cart-subtotal-tax'>{tax.toFixed(2)} €</span>
            </div>
        </div>

        <div className='cart-total-container'>
            <span>Total</span>
            <span>{total.toFixed(2)} €</span>
        </div>
        <div className='cart-complete-order-button'>
            <Button variant='primary-black'
            size='medium-bebas'
            onClick={()=>{
                navigate('/confirmation')
                clearCart()}}
                >Complete order</Button>
        </div>
            <CartFooter onClearCart={clearCart} onGoMenu={()=>navigate('/menu')} variant='cart'></CartFooter>
        </div> 
    )
}