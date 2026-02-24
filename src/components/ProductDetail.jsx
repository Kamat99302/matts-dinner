import './ProductDetail.css'
import {Header } from 'matts-dinner-component-library'
import {ProductHero} from 'matts-dinner-component-library'
import { CartFooter } from 'matts-dinner-component-library'
import { Checkbox } from 'matts-dinner-component-library'
import { QuantitySelector } from 'matts-dinner-component-library'
import { Button } from 'matts-dinner-component-library'
import mattsBurger from './../assets/images/Burgers/matts-burger.jpg'



export default function ProductDetail(){
    return(
        <div className='product-detail-page-container'>
            <Header showNavIcons={true}></Header>
            <div className='product-hero-wrapper'>
                <ProductHero img={mattsBurger} productName={"Matt's burger"}/>
            </div>
            <div className='product-details'>
                <div className='product-details-name-price'>
                    <span>MATT'S BURGER</span>
                    <span>4.90€</span>
                </div>
                <div className='product-details-ingredients'>
                    <span>Steak, cheddar, lettuce...</span>
                </div>
                <div className='checkbox-container'>
                <Checkbox type='burger'></Checkbox>
                </div>
            </div>
            <QuantitySelector></QuantitySelector>
            
            <div className='product-details-add-to-cart-button'> 
                <Button variant='primary-black' size='medium-inter' >ADD TO CART 4.90€</Button>
            </div>
            <CartFooter variant='summary'></CartFooter>
        </div>
    )
}