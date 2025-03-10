import { useState } from 'react'
import './App.css'
import Header from './componentesGlobais/header/Header.tsx'
import Footer from './componentesGlobais/footer/footer.tsx'
import { ContextArmValue } from "./Contex/Contex.tsx"
import { Outlet } from 'react-router-dom'
import Cart from './componentesGlobais/Cart/Cart.tsx'



function App() {
  const [Backgrond, setBack]= useState(0)
  const [ RotateImg, setRotation ]= useState(undefined)
  const [ TimeRotate, settTimeIten]= useState('1s')
  const [ BackColorText, setColor]= useState<string |undefined>(undefined)

    const ManipulationBack=(e)=>{
        setBack(e)
    }
    const ManipulationRotate= (e)=>{
      setRotation(e)
    }
    const settTime= (e)=>{
      settTimeIten(e)
    }
    const setColortext= (e)=>{
      setColor(e)
    }

  return (
    <section className="h-screen w-screen flex flex-col justify-between">
      <ContextArmValue.Provider value={{ManipulationBack, ManipulationRotate, Backgrond, RotateImg, TimeRotate, settTime, BackColorText, setColortext}}>
        <Header />
        <Cart />
        <Footer />
        <Outlet />
      </ContextArmValue.Provider>
    </section>
  )
}

export default App
