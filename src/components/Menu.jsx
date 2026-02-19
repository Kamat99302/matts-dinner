import './Menu.css'
import { Header } from 'matts-dinner-component-library'
import { CategoryTab } from 'matts-dinner-component-library'
import { ProductCard } from 'matts-dinner-component-library'
import { LanguageSelector } from 'matts-dinner-component-library'
import { Button } from 'matts-dinner-component-library'
import cartIcon from './../assets/images/cart.webp'
import { menuData } from '../data/menuData'

export default function Menu(){
    return(
        <div className='menu-page-container'>
            <Header showNavIcons={true}></Header>
            <div className='category-tab'>
                <CategoryTab activeIndex={0}></CategoryTab>
            </div>
            <div className='menu-items-container'>
                {menuData.burgers.map((burger)=>(
                    <ProductCard
                    key={burger.id}
                    includeBadge={burger.badge.include}
                    badgeColor={burger.badge.color}
                    badgeVariant={burger.badge.variant}
                    showIcon={burger.badge.showIcon}
                    badgeText={burger.badge.text}
                    img={burger.img}
                    productName= {burger.name}
                    productPrice= {burger.price}/>
                ))}
                
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