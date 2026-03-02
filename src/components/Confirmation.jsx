import './Confirmation.css'
import { Header } from "matts-dinner-component-library";
import { Button } from "matts-dinner-component-library";
import { LanguageSelector } from 'matts-dinner-component-library';
import successIcon from '../assets/images/success-icon.png'
import { useNavigate } from 'react-router-dom';

export default function Confirmation(){
    const navigate = useNavigate()
    return(
        <div className='confirmation-page-container'>
            <Header showNavIcons={true}></Header>

            <div className='order-confirmed-container'>
                <img src={successIcon} className='success-icon'/>
                <span className='order-confirmed-message'>Order confirmed!</span>
            </div>
            <div className='order-confirmed-order-details-container'>
                <span className='order-confirmed-order-details'>Order #1247</span>
                <span className='order-confirmed-order-details'>Total: 14.08€</span>
                <span className='order-confirmed-order-details'>Estimated time: 10 minutes</span>
            </div>
            <div className='order-confirmed-instructions'>
                <span>Please wait at the counter</span>
            </div>
            <div className='confirmation-page-new-order-button'>
                <Button variant='primary-black' size='xl' onClick={()=>navigate('/service-choice')}>New order</Button>
            </div>
            <div className='bottom-page-language-selector-container'>
                <LanguageSelector></LanguageSelector>
            </div>
            
            
        </div>
    )
}