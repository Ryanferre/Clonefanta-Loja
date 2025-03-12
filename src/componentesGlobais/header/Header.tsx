import { FaUser } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"
import { useContext, useState, useEffect } from "react"
import ContextArmValue from "../../Contex/Contex.tsx"
import { Link } from "react-router-dom"
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

const Header= ()=>{
    const { ManipulationRotate, BackColorText, BackGroundUniver }= useContext(ContextArmValue)

    
        //funcao para manipular a o footer

        const DesteFooter= ()=>{
            ManipulationRotate('none')
        }

        const ApressFooter= ()=>{
            ManipulationRotate('flex')
        }

    return(
        <header className={`items-center w-screen flex flex-row justify-between px-10 py-3`} style={{background: `${BackGroundUniver}`, zIndex: '3'}}>
            <div>
                <h1 className={`font-semibold text-[34px]`} style={{fontFamily: "Poppins", color: `${BackColorText}`}}>Drex</h1>
            </div>
            <ul className="flex flex-row gap-8">
                <li style={{fontFamily: "Poppins", color: `${BackColorText}`}}><Link to="/about" onClick={DesteFooter}>Abolt</Link></li>
                <li style={{fontFamily: "Poppins", color: `${BackColorText}`}}><Link to="/" onClick={ApressFooter}>Home</Link></li>
                <li style={{fontFamily: "Poppins", color: `${BackColorText}`}}><Link to="/products">Products</Link></li>
                <li style={{fontFamily: "Poppins", color: `${BackColorText}`}}>Contact</li>
            </ul>
            <div className="flex flex-row gap-6 items-center">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
                <Link className="flex flex-row items-center" to="/Login"><FaUser color={`${BackColorText}`} /><p style={{color: `${BackColorText}`}}>!</p></Link>
            </SignedOut>
               <FaCartShopping color={`${BackColorText}`} /><p style={{color: `${BackColorText}`}}/>
            </div>
        </header>
    )
}

export default Header