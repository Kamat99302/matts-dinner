import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import StartScreen from './components/StartScreen';
import ServiceChoice from './components/ServiceChoice';
import Menu from './components/Menu'
import 'matts-dinner-component-library/dist/matts-dinner-component-library.css';
import './App.css'
import ProductDetail from './components/ProductDetail';


function App() {


  return (
    <Routes>
      <Route path='/' element={<StartScreen />} />
      <Route path='/service-choice' element={<ServiceChoice />}/>
      <Route path='/menu' element={<Menu />}/>
      <Route path='/product-detail' element={<ProductDetail />}/>
    </Routes>
  )
}

export default App
