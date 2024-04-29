import './App.css'
import Home from './view/Home'
import Navbar1 from './components/Navbar1'
import { Route, Routes } from 'react-router-dom'
import Pizzas from "./view/Pizzas"
import Carrito from "./view/Carrito"



const App = () => {

  return (
    <>
    <Navbar1/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pizzas/:id' element={<Pizzas/>}/>
      <Route path='/carrito' element={<Carrito/>}/>
    </Routes>

 
    
    </>
  )
}

export default App
