import './StartScreen.css'
import startScreenBg from '../assets/images/bg-startScreen.png'
import { Button } from 'matts-dinner-component-library'
import { useNavigate } from 'react-router-dom'
export default function StartScreen(){
    const navigate = useNavigate()
   
    return(
        <div
        style={{backgroundImage: `url(${startScreenBg})`}}
        className='start-screen-container'
        onClick={()=>navigate('/service-choice')}>
            <div className='order-here'>
                <span className='order'>ORDER</span>
                <span className='here'>HERE</span>
            </div>
            <div className='touch-to-order-btn'>
                <Button variant="primary-black" size="large">
                    Touch to order
                </Button>
            </div>

        </div>
        
        
        
    )
}