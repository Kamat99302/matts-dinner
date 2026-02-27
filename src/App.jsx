import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import StartScreen from './components/StartScreen';
import ServiceChoice from './components/ServiceChoice';
import Menu from './components/Menu'
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import 'matts-dinner-component-library/dist/matts-dinner-component-library.css';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<StartScreen />} />
      <Route path='/service-choice' element={<ServiceChoice />}/>
      <Route path='/menu' element={<Menu />}/>
      <Route path='/product-detail/:id' element={<ProductDetail />}/>
      <Route path='/cart' element={<Cart />}></Route>
    </Routes>
  )
}

export default App
