import { SignInButton } from "@clerk/clerk-react"
import { FaGoogle } from "react-icons/fa"
import { useContext } from "react"
import ContextArmValue from "../../../Contex/Contex.tsx"

const Login= ()=>{
    const { Backgrond, BackColorText, BackGroundUniver }= useContext(ContextArmValue)

    return(
        <div className="w-screen h-screen" style={{backgroundColor: `${BackGroundUniver}`}}>
           <div className={`m-auto w-[400px] h-[300px] flex flex-col items-center my-20 justify-start gap-9 rounded-[15px]`} style={{backgroundColor: `${Backgrond}`}}>
            <div>
                <h1 className="text-[52px] text-center w-full text-white font-bold" style={{color: `${BackColorText}`}}>Wellcome!</h1>
                <p className="text-center text-white" style={{color: `${BackColorText}`}}>Log in with your social network</p>
            </div>
            <div className="flex flex-col w-[240px] justify-around h-[100px]">
             <SignInButton>
                <span className="border flex items-center justify-around py-2 px-5 rounded-[8px] shadow cursor-pointer" style={{borderColor: `${BackColorText}`}}>
                 <FaGoogle className="w-6 h-6" color={BackColorText} />
                 <p className="w-[150px]" style={{color: `${BackColorText}`}}>Google Acount</p>
                </span>
             </SignInButton>
            </div>
         </div>
        </div>
    )
}


export default Login