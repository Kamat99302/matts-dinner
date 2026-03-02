import './Cart.css'
import { Header } from 'matts-dinner-component-library'
import { CartItemCard } from 'matts-dinner-component-library'
import { Button } from 'matts-dinner-component-library'
import { CartFooter } from 'matts-dinner-component-library'
import fries from '../assets/images/Sides/Fries.png'
import deleteImg from '../assets/images/trash-can.png'
import addBtn from '../assets/images/add-button.png'
import removeBtn from '../assets/images/remove-button.png'
import { useNavigate } from 'react-router-dom'



export default function Cart(){
    const navigate = useNavigate()
    return(
        <div className='cart-page-container'>
            <Header onGoBack={()=>navigate('/menu')} showNavIcons={true}></Header>
            <span className='title'>Your cart</span>

            <div className='cart-container'>
            <CartItemCard 
            imgAdd={addBtn} 
            imgRemove={removeBtn}
            deleteIcon={deleteImg} 
            productImg={fries}
            productName={'Matts burger'} 
            productOptions={'Medium+, bacon'}
            productPrice={'3.50€'}>
            </CartItemCard> 

            <CartItemCard 
            imgAdd={addBtn} 
            imgRemove={removeBtn}
            deleteIcon={deleteImg} 
            productImg={fries}
            productName={'Matts burger'} 
            productOptions={'Medium+, bacon'}
            productPrice={'3.50€'}>
            </CartItemCard>
            </div>
            
        <div className='cart-subtotal-tax-container'>
            <div className='cart-subtotal-tax-container-left'>
                <span>Subtotal</span>
                <span className='cart-subtotal-tax'>Tax (10%)</span>
            </div>
            <div className='cart-subtotal-tax-container-right'>
                <span className='cart-subtotal-subtotal'>12.80€</span>
                <span className='cart-subtotal-tax'>1.28€</span>
            </div>
        </div>

        <div className='cart-total-container'>
            <span>Total</span>
            <span>14,08€</span>
        </div>
        <div className='cart-complete-order-button'>
            <Button variant='primary-black' size='medium-bebas' onClick={()=>navigate('/confirmation')} >Complete order</Button>
        </div>
            <CartFooter onGoMenu={()=>navigate('/menu')} variant='cart'></CartFooter>
        </div>
    )
}