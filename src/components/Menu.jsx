import './Menu.css'
import { useNavigate } from 'react-router-dom'
import { Header } from 'matts-dinner-component-library'
import { CategoryTab } from 'matts-dinner-component-library'
import { ProductCard } from 'matts-dinner-component-library'
import { CartFooter } from 'matts-dinner-component-library'
import { menuData } from '../data/menuData'
import { useState } from 'react'

export default function Menu(){
    const [activeCategory, setActiveCategory] = useState('burgers')
    const [activeIndex, setActiveIndex] = useState(0)
    const navigate = useNavigate()
    const currentItems = menuData[activeCategory] || []
    
    return(
        <div className='menu-page-container'>
            <Header showNavIcons={true}></Header>
            <div className='category-tab'>
                <CategoryTab onCategoryClick={setActiveCategory} activeIndex={activeIndex} onIndexClick={setActiveIndex} ></CategoryTab>
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
                        badgeText={item.badge.text}
                        img={item.img}
                        productName= {item.name}
                        productPrice= {item.price}/>
                ))}
                
            </div>
            <CartFooter variant='summary'></CartFooter>
           
        </div>
    )
}