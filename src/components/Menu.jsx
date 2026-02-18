import './Menu.css'
import { Header } from 'matts-dinner-component-library'
import { CategoryTab } from 'matts-dinner-component-library'
import { ProductCard } from 'matts-dinner-component-library'
import { LanguageSelector } from 'matts-dinner-component-library'
import { Button } from 'matts-dinner-component-library'
import cartIcon from './../assets/images/cart.webp'
import mattsBurger from './../assets/images/Burgers/matts-burger.jpg'
import fishBurger from './../assets/images/Burgers/fish-burger.webp'
import doubleBeef from './../assets/images/Burgers/double-beef.jpg'
import signatureBurger from './../assets/images/Burgers/signature-burger.jpg'

export default function Menu(){
    return(
        <div className='menu-page-container'>
            <Header showNavIcons={true}></Header>
            <div className='category-tab'>
                <CategoryTab activeIndex={0}></CategoryTab>
            </div>
            <div className='menu-items-container'>
                <ProductCard
                    includeBadge={true}
                    badgeColor='yellow'
                    badgeVariant='square'
                    showIcon={true}
                    badgeText='Popular'
                    img={mattsBurger}
                    productName= 'Matts Burger'
                    productPrice= '4.90€'/>
                    
                    <ProductCard
                    includeBadge={true}
                    badgeColor='green'
                    badgeVariant='square'
                    showIcon={true}
                    badgeText='New'
                    img={doubleBeef}
                    productName= 'Double Beef'
                    productPrice= '5.90€'/>

                    <ProductCard
                    includeBadge={false}
                    img={signatureBurger}
                    productName= 'Signature Burger'
                    productPrice= '4.50€'/>

                    <ProductCard
                    includeBadge={false}
                    img={fishBurger}
                    productName= 'Fish Burger'
                    productPrice= '5.90€'/>
            </div>
            <footer>

                <div className='cart-footer-section'>
                    <div className='cart-footer-info'>
                        <img src={cartIcon} className='cart-footer-icon'/>
                        <span className='cart-footer-nb-items'><span className='cart-footer-nb-item-number'>2</span> ITEM(S) • </span>
                        <span className='cart-footer-price'>10.75€</span>
                    </div>
                    <div className='view-cart-btn'>
                        <Button variant="primary-white" size='small'>VIEW CART</Button>
                    </div>
                </div>

                <div className='language-selector-container'>
                    <LanguageSelector></LanguageSelector>
                </div>
            </footer>
        </div>
    )
}