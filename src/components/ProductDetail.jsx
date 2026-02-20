import './ProductDetail.css'
import {Header } from 'matts-dinner-component-library'
import {ProductHero} from 'matts-dinner-component-library'
import mattsBurger from './../assets/images/Burgers/matts-burger.jpg'
import { CartFooter } from 'matts-dinner-component-library'


export default function ProductDetail(){
    return(
        
        <div className='product-detail-page-container'>
            <Header showNavIcons={true}></Header>
            <div className='product-hero-container'>
                <ProductHero img={mattsBurger} productName={"Matt's burger"}/>
            </div>
            <CartFooter variant='summary'></CartFooter>
        </div>

        
       
    )
}