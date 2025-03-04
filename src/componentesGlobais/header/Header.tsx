import { FaUser } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"
import { useContext, useState, useEffect } from "react"
import ContextArmValue from "../../Contex/Contex.tsx"
import { Link } from "react-router-dom"
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

const Header= ()=>{
    const { Backgrond, ManipulationRotate }= useContext(ContextArmValue)
    const [ BackHeader, setBack ]= useState('')

    useEffect(()=>{
            switch (Backgrond) {
                case 0:
                    setBack('#F57E00')
                    break;
                case 1:
                    setBack('#9DF400')
                    break;
                case 2:
                    setBack('#F54001')
                    break;
                case 3:
                    setBack('#9928F5')
                    break;
            
                default:
                    break;
            }
        }, [Backgrond])
        //funcao para manipular a o footer

        const DesteFooter= ()=>{
            ManipulationRotate('none')
        }

        const ApressFooter= ()=>{
            ManipulationRotate('flex')
        }

    return(
        <header className={`items-center w-screen flex flex-row justify-between px-10 py-3`} style={{background: `${BackHeader}`}}>
            <div>
                <h1 className="font-semibold text-[34px] text-white" style={{fontFamily: "Poppins"}}>fanta</h1>
            </div>
            <ul className="flex flex-row gap-8">
                <li className="text-white" style={{fontFamily: "Poppins"}}><Link to="/about" onClick={DesteFooter}>Abolt</Link></li>
                <li className="text-white" style={{fontFamily: "Poppins"}}><Link to="/" onClick={ApressFooter}>Home</Link></li>
                <li className="text-white" style={{fontFamily: "Poppins"}}>Products</li>
                <li className="text-white" style={{fontFamily: "Poppins"}}>Contact</li>
            </ul>
            <div className="flex flex-row gap-6 items-center">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
                <Link className="flex flex-row items-center" to="/Login"><FaUser color="white" /><p className="text-white">!</p></Link>
            </SignedOut>
               <FaCartShopping color="white"/>
            </div>
        </header>
    )
}

export default Header