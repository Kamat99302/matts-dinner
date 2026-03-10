import './Confirmation.css'
import { Header } from "matts-dinner-component-library";
import { Button } from "matts-dinner-component-library";
import { LanguageSelector } from 'matts-dinner-component-library';
import successIcon from '../assets/images/success-icon.png'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext'
import { useState } from 'react';
import i18n from '../i18n'
import { useTranslation } from 'react-i18next'

export default function Confirmation(){
    const {t} = useTranslation()
    const [orderNumber] = useState(() => Math.floor(Math.random() * 901) + 100)
    const navigate = useNavigate()
    const {total, clearCart} = useCart()
    return(
        <div className='confirmation-page-container'>
            <Header showNavIcons={false}></Header>

            <div className='order-confirmed-container'>
                <img src={successIcon} className='success-icon'/>
                <span className='order-confirmed-message'>{t('order_confirmed')}</span>
            </div>
            <div className='order-confirmed-order-details-container'>
                <span className='order-confirmed-order-details'>{t('order_number')} #{orderNumber}</span>
                <span className='order-confirmed-order-details'>{total.toFixed(2)} €</span>
                <span className='order-confirmed-order-details'>{t('estimated_time')}</span>
            </div>
            <div className='order-confirmed-instructions'>
                <span>{t('wait_counter')}</span>
            </div>
            <div className='confirmation-page-new-order-button'>
                <Button variant='primary-black' size='xl' onClick={()=>{
                    clearCart()
                    navigate('/service-choice')}}>{t('new_order')}</Button>
            </div>
            <div className='bottom-page-language-selector-container'>
                <LanguageSelector onLanguageChange={(lang)=>i18n.changeLanguage(lang)} />
            </div>
            
            
        </div>
    )
}