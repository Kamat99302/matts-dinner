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
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'




export default function Cart(){
    const {cartItems, clearCart, removeFromCart, tax, subTotal, total, decrementQuantity, incrementQuantity} = useCart()
    const navigate = useNavigate()
    const {t} = useTranslation()
    return(
        
        <div className='cart-page-container'>
            <Header onGoBack={()=>navigate('/menu')} showNavIcons={true}></Header>
            <span className='title'>
                {cartItems.length === 0 ? t('your_cart_empty'): t('your_cart')}</span>
            <div className='cart-articles-container'>
            {cartItems.map((item)=>(
                <div className='cart-container' key={item.id}>
                <CartItemCard 
                imgAdd={addBtn} 
                imgRemove={removeBtn}
                deleteIcon={deleteImg} 
                onDecrement={decrementQuantity} 
                onIncrement={incrementQuantity}
                onDeleteItem={()=>removeFromCart(item.id)}
                productImg={item.img}
                productName={item.name} 
                productOptions={item.options.join(', ')}
                productPrice={item.price}
                quantity={item.quantity}>
                </CartItemCard>
                </div>
            ))}
            </div>
            
        <div className='cart-subtotal-tax-container'>
            <div className='cart-subtotal-tax-container-left'>
                <span>{t('sub_total')}</span>
                <span className='cart-subtotal-tax'>{t('tax')} (10%)</span>
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
            <Button 
            disabled={cartItems.length === 0}
            variant='primary-black'
            size='medium-bebas'
            onClick={()=>
                navigate('/confirmation')
                }
                >{t('complete_order')}</Button>
        </div>
            <CartFooter onClearCart={clearCart} onGoMenu={()=>navigate('/menu')} variant='cart' onLanguageChange={(lang)=>i18n.changeLanguage(lang)}></CartFooter>
        </div> 
    )
}