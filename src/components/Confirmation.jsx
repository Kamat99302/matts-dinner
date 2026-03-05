import './Confirmation.css'
import { Header } from "matts-dinner-component-library";
import { Button } from "matts-dinner-component-library";
import { LanguageSelector } from 'matts-dinner-component-library';
import successIcon from '../assets/images/success-icon.png'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext'

export default function Confirmation(){
    const navigate = useNavigate()
    const {total, clearCart} = useCart()
    return(
        <div className='confirmation-page-container'>
            <Header showNavIcons={false}></Header>

            <div className='order-confirmed-container'>
                <img src={successIcon} className='success-icon'/>
                <span className='order-confirmed-message'>Order confirmed!</span>
            </div>
            <div className='order-confirmed-order-details-container'>
                <span className='order-confirmed-order-details'>Order #1247</span>
                <span className='order-confirmed-order-details'>Total: {total.toFixed(2)} €</span>
                <span className='order-confirmed-order-details'>Estimated time: 10 minutes</span>
            </div>
            <div className='order-confirmed-instructions'>
                <span>Please wait at the counter</span>
            </div>
            <div className='confirmation-page-new-order-button'>
                <Button variant='primary-black' size='xl' onClick={()=>{
                    clearCart()
                    navigate('/service-choice')}}>New order</Button>
            </div>
            <div className='bottom-page-language-selector-container'>
                <LanguageSelector></LanguageSelector>
            </div>
            
            
        </div>
    )
}