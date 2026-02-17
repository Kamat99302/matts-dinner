import './ServiceChoice.css'
import { Header } from 'matts-dinner-component-library'
import { LanguageSelector } from 'matts-dinner-component-library'
import dineInImg from '.././assets/images/dine-in.png'
import takeAwayImg from '.././assets/images/take-away.png'
export default function ServiceChoice(){
    return(
        <>
        <div className='service-choice-container'>
            <Header
                showNavIcons={false}
            ></Header>
            <h2>Where will you be eating today?</h2>
            <div className='options-container'> 
                <div className='dine-in-container'>
                    <img src={dineInImg} className='dine-in-img'/>
                    <span className='dine-in-title'>DINE IN</span>
                </div>
                <div className='take-away-container'>
                    <img src={takeAwayImg} className='take-away-img'/>
                    <span className='take-away-title'>TAKE AWAY</span>
                </div>
            </div>
        </div>
        <div className='language-selector-container'>
            <LanguageSelector></LanguageSelector>
        </div>
        </>
        
    )
}