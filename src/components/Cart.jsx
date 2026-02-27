import './Cart.css'
import { Header } from 'matts-dinner-component-library'
import { CartItemCard } from 'matts-dinner-component-library'
import fries from '../assets/images/Sides/Fries.png'
import deleteImg from '../assets/images/trash-can.png'
import addBtn from '../assets/images/add-button.png'
import removeBtn from '../assets/images/remove-button.png'

export default function Cart(){
    return(
        <div className='cart-page-container'>
            <Header showNavIcons={true}></Header>
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
            
        </div>
    )
}