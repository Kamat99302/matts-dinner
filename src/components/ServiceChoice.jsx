import './ServiceChoice.css'
import { Header } from 'matts-dinner-component-library'
import { LanguageSelector } from 'matts-dinner-component-library'
import { useNavigate } from 'react-router-dom'
import dineInImg from '.././assets/images/dine-in.png'
import takeAwayImg from '.././assets/images/take-away.png'
import i18n from '../i18n'
import { useTranslation } from 'react-i18next'
export default function ServiceChoice(){
    const navigate = useNavigate()
    const {t} = useTranslation()
    return(
        <>
        <div className='service-choice-container'>
            <Header
                showNavIcons={false}
            ></Header>
            <h2>{t('where_eat')}</h2>
            <div className='options-container'> 
                <div className='dine-in-container' onClick={()=>navigate('/menu')}>
                    <img src={dineInImg} className='dine-in-img'/>
                    <span className='dine-in-title'>{t('dine_in')}</span>
                </div>
                <div className='take-away-container' onClick={()=>navigate('/menu')}>
                    <img src={takeAwayImg} className='take-away-img'/>
                    <span className='take-away-title'>{t('take_away')}</span>
                </div>
            </div>
        </div>
        <div className='bottom-page-language-selector-container'>
            <LanguageSelector onLanguageChange={(lang)=>i18n.changeLanguage(lang)}></LanguageSelector>
        </div>
        </>
        
    )
}