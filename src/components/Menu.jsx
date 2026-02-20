import './Menu.css'
import { useNavigate } from 'react-router-dom'
import { Header } from 'matts-dinner-component-library'
import { CategoryTab } from 'matts-dinner-component-library'
import { ProductCard } from 'matts-dinner-component-library'
import { CartFooter } from 'matts-dinner-component-library'
import { menuData } from '../data/menuData'



export default function Menu(){
    const navigate = useNavigate()

    return(
        <div className='menu-page-container'>
            <Header showNavIcons={true}></Header>
            <div className='category-tab'>
                <CategoryTab activeIndex={0}></CategoryTab>
            </div>
            <div className='menu-items-container'>
                {menuData.burgers.map((burger)=>(
                    <ProductCard 
                    onClick={()=>navigate('/product-detail')}
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
            <CartFooter variant='summary'></CartFooter>
           
        </div>
    )
}