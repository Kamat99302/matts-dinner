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


export default function ProductDetail(){
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
                <ProductHero img={product.img} productName={product.name}/>
            </div>
            <div className='product-details'>
                <div className='product-details-name-price'>
                    <span>{product.name}</span>
                    <span>{product.price}</span>
                </div>
                <div className='product-details-ingredients'>
                    <span>{product.ingredients}</span>
                </div>
                <div className='checkbox-container'> 
                    {product.type && <Checkbox type={product.type}></Checkbox>}
                </div>
            </div>
           
            <QuantitySelector onDecrement={decrementQuantity} onIncrement={incrementQuantity} quantity={quantity} imgRemove={removeBtn} imgAdd={addBtn} ></QuantitySelector>
            <div className='product-details-add-to-cart-button'> 
                <Button onClick={()=>addToCart({...product, quantity})} variant='primary-black' size='medium-inter' >ADD TO CART {(parseFloat(product.price)*quantity).toFixed(2)} €</Button>
            </div>
           
            
            <CartFooter totalPrice={totalPrice.toFixed(2)} nbItems={nbItems} onViewCart={()=>navigate('/cart')} variant='summary'></CartFooter>
        </div>
    )
}