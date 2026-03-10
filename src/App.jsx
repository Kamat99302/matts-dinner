import { CartProvider } from './Context/CartContext';
import {Routes, Route} from 'react-router-dom'
import StartScreen from './components/StartScreen';
import ServiceChoice from './components/ServiceChoice';
import Menu from './components/Menu'
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import 'matts-dinner-component-library/dist/matts-dinner-component-library.css';
import './App.css'
import Confirmation from './components/Confirmation';
import { useEffect } from 'react';

function App() {

  // Ajuste le scale de l'app (1080x1920) pour s'adapter à la taille de l'écran
  useEffect(() => {
    function adjustScale() {
        const root = document.getElementById('root')
        const scaleX = window.innerWidth / 1080
        const scaleY = window.innerHeight / 1920
        const scale = Math.min(scaleX, scaleY)
        root.style.transform = `scale(${scale})`
        root.style.visibility = 'visible'
    }
    adjustScale()
    window.addEventListener('resize', adjustScale)
    return () => window.removeEventListener('resize', adjustScale)
}, [])
  return (
  
    <CartProvider>
      <Routes>
        <Route path='/' element={<StartScreen />} />
        <Route path='/service-choice' element={<ServiceChoice />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/product-detail/:id' element={<ProductDetail />}/>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/confirmation' element={<Confirmation />}></Route>
      </Routes>
    </CartProvider>
  )
}

export default App
