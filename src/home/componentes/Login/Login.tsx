import { SignInButton } from "@clerk/clerk-react"
import { FaGoogle } from "react-icons/fa"
import { useContext, useState, useEffect } from "react"
import ContextArmValue from "../../../Contex/Contex.tsx"

const Login= ()=>{
    const { Backgrond }= useContext(ContextArmValue)
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

    return(
        <div className="w-screen h-screen" style={{background: `${BackHeader}`}}>
           <div className={`m-auto w-[400px] h-[300px] flex flex-col items-center my-20 justify-start gap-9 rounded-[15px]`} style={{background: `${BackHeader}`}}>
            <div>
                <h1 className="text-[52px] text-center w-full text-white font-bold">Wellcome!</h1>
                <p className="text-center text-white">Log in with your social network</p>
            </div>
            <div className="flex flex-col w-[240px] justify-around h-[100px]">
             <SignInButton>
                <span className="border flex items-center justify-around bg-white py-2 px-5 rounded-[8px] shadow cursor-pointer">
                 <FaGoogle className="w-6 h-6" />
                 <p className="w-[150px] text-[#9F9F9F]">Google Acount</p>
                </span>
             </SignInButton>
            </div>
         </div>
        </div>
    )
}


export default Login