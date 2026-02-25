import './ProductDetail.css'
import {Header } from 'matts-dinner-component-library'
import {ProductHero} from 'matts-dinner-component-library'
import { CartFooter } from 'matts-dinner-component-library'
import { Checkbox } from 'matts-dinner-component-library'
import { QuantitySelector } from 'matts-dinner-component-library'
import { Button } from 'matts-dinner-component-library'
import { useParams } from 'react-router-dom'
import { menuData } from '../data/menuData'


export default function ProductDetail(){
    const { id } = useParams()
    const allItems = Object.values(menuData) //transforme l'objet menuData en tableau. Crée un tableau de tableaux
                    .flat() //applatis en tableau simple
    console.log(allItems)
    const product = allItems.find(item=>item.id === Number(id)) //cherche les produits correspondant à l'id de l'url
    return(
        <div className='product-detail-page-container'>
            <Header showNavIcons={true}></Header>
            <div className='product-hero-wrapper'>
                <ProductHero img={product.img} productName={product.name}/>
            </div>
            <div className='product-details'>
                <div className='product-details-name-price'>
                    <span>{product.name}</span>
                    <span>{product.price}</span>
                </div>
                <div className='product-details-ingredients'>
                    <span>Steak, cheddar, lettuce...</span>
                </div>
                <div className='checkbox-container'> 
                    {product.type && <Checkbox type={product.type}></Checkbox>}
                </div>
            </div>
            <QuantitySelector></QuantitySelector>
            
            <div className='product-details-add-to-cart-button'> 
                <Button variant='primary-black' size='medium-inter' >ADD TO CART {product.price}</Button>
            </div>
            <CartFooter variant='summary'></CartFooter>
        </div>
    )
}