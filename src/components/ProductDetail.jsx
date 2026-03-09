import './ProductDetail.css'
import {Header } from 'matts-dinner-component-library'
import {ProductHero} from 'matts-dinner-component-library'
import { CartFooter } from 'matts-dinner-component-library'
import { Checkbox } from 'matts-dinner-component-library'
import { QuantitySelector } from 'matts-dinner-component-library'
import { Button } from 'matts-dinner-component-library'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { menuData } from '../data/menuData'
import { useNavigate } from 'react-router-dom'
import addBtn from '../assets/images/add-button.png'
import removeBtn from '../assets/images/remove-button.png'
import { useCart } from '../Context/CartContext'
import i18n from '../i18n'
import { useTranslation } from 'react-i18next'


export default function ProductDetail(){
    const {t} = useTranslation()
    const checkboxLabels = {
        cheesy: t('cheesy'),
        spicy: t('spicy'),
        add_milk: t('add_milk'),
        add_sugar: t('add_sugar'),
        add_ice: t('add_ice'),
        add_lemon: t('add_lemon')
    }
    const [selectedOptions, setSelectedOptions] = useState([])
    const {cartItems, addToCart} = useCart()
    const nbItems = cartItems.reduce((total, item)=> total + item.quantity,0)
    const totalPrice = cartItems.reduce((total,item)=>{
        return total + parseFloat(item.price) * item.quantity
    },0)
    const navigate = useNavigate()
    const [quantity, setQuantity] = useState(1)
    const { id } = useParams()
    const allItems = Object.values(menuData) //transforme l'objet menuData en tableau. Crée un tableau de tableaux
                    .flat() //applatis en tableau simple
    const product = allItems.find(item=>item.id === Number(id)) //cherche les produits correspondant à l'id de l'url

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
    return(
        <div className='product-detail-page-container'>
            <Header onViewCart={()=>navigate('/cart')} onGoBack={()=>navigate('/menu')} showNavIcons={true}></Header>
            <div className='product-hero-wrapper'>
                <ProductHero img={product.img} productName={product.nameKey? t(product.nameKey) : product.name}/>
            </div>
            <div className='product-details'>
                <div className='product-details-name-price'>
                    <span>{ product.nameKey? t(product.nameKey) : product.name}</span>
                    <span>{product.price}</span>
                </div>
                <div className='product-details-ingredients'>
                    <span>{t(product.ingredients)}</span>
                </div>
                <div className='checkbox-container'> 
                    {product.type && <Checkbox type={product.type} onOptionsChange={setSelectedOptions} labels={checkboxLabels}></Checkbox>}
                </div>
            </div>
           
            <QuantitySelector label={t('quantity')} onDecrement={decrementQuantity} onIncrement={incrementQuantity} quantity={quantity} imgRemove={removeBtn} imgAdd={addBtn} ></QuantitySelector>
            <div className='product-details-add-to-cart-button'> 
                <Button onClick={()=>addToCart({...product, quantity, options: selectedOptions})} variant='primary-black' size='medium-inter' >{t('add_to_cart')} {(parseFloat(product.price)*quantity).toFixed(2)}€</Button>
            </div>
           
            
            <CartFooter onLanguageChange={(lang)=>i18n.changeLanguage(lang)} totalPrice={totalPrice.toFixed(2)} nbItems={nbItems} onViewCart={()=>navigate('/cart')} variant='summary' viewCartLabel={t('view_cart')}></CartFooter>
        </div>
    )
}