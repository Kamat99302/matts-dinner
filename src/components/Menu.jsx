import './Menu.css'
import { useNavigate } from 'react-router-dom'
import { Header } from 'matts-dinner-component-library'
import { CategoryTab } from 'matts-dinner-component-library'
import { ProductCard } from 'matts-dinner-component-library'
import { CartFooter } from 'matts-dinner-component-library'
import { menuData } from '../data/menuData'
import { useCart } from '../Context/CartContext'
import i18n from '../i18n'
import { useTranslation } from 'react-i18next'


export default function Menu(){
    const {t} = useTranslation()
    const categoriesKeys = ['burgers', 'sides', 'beverages', 'desserts']
    const categoryLabels = categoriesKeys.map((key)=>t(key))
    const {cartItems, activeCategory, setActiveCategory, activeIndex, setActiveIndex} = useCart()
    const nbItems = cartItems.reduce((total, item)=> total + item.quantity,0)
    const totalPrice = cartItems.reduce((total,item)=>{
        return total + parseFloat(item.price) * item.quantity
    },0)

 
    const navigate = useNavigate()
    const currentItems = menuData[activeCategory] || []
    
    return(
        <div className='menu-page-container'>
            <Header onViewCart={()=>navigate('/cart')} onGoBack={()=>navigate('/service-choice')} showNavIcons={true}></Header>
            <div className='category-tab'>
                <CategoryTab 
                     categories={categoryLabels}
                     onCategoryClick={() => {}} 
                     activeIndex={activeIndex} 
                     // Utilise l'index au lieu du label traduit pour filtrer, car le label change selon la langue
                     onIndexClick={(index) => {
                         setActiveIndex(index)
                         setActiveCategory(categoriesKeys[index])
                     }} 
                ></CategoryTab>
            </div>
            <div className='menu-items-container'>
                {currentItems.map((item)=>(
                    <ProductCard 
                        onClick={()=>navigate(`/product-detail/${item.id}`)}
                        key={item.id}
                        includeBadge={item.badge.include}
                        badgeColor={item.badge.color}
                        badgeVariant={item.badge.variant}
                        showIcon={item.badge.showIcon}
                        badgeText={t(item.badge.text)}
                        img={item.img}
                        // Les produits avec un nameKey sont traduits via i18n, les autres gardent leur nom anglais
                        productName= {item.nameKey? t(item.nameKey) : item.name}
                        productPrice= {item.price}/>
                ))}
                
            </div>
            <CartFooter onLanguageChange={(lang)=>i18n.changeLanguage(lang)} totalPrice={totalPrice.toFixed(2)} nbItems={nbItems} onViewCart={()=>navigate('/cart')} variant='summary' viewCartLabel={t('view_cart')} clearCartLabel={t('clear_cart')}></CartFooter>
           
        </div>
    )
}