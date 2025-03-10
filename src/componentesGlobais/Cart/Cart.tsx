import Img1 from "../../home/imagens/r1.png"
import { useState, useContext } from "react";
import ContextArmValue from "../../Contex/Contex.tsx"


const Cart= ()=>{
    const [checked, setChecked] = useState(false);
    const { BackColorText }= useContext(ContextArmValue)

    const handleChange = () => {
        setChecked(!checked);
      };
    
    return(
        <section className="absolute right-0 h-full pt-24" style={{zIndex: '1'}}>
            <div className="flex-row justify-between items-center h-[300px] bg-slate-500">
                <ul>
                    <li className="w-[300px]">

                        <div className="flex items-center justify-between px-2">

                            <label className="flex items-center cursor-pointer">
                                <input type="checkbox" checked={checked} onChange={handleChange} className="hidden"/>
                                <span className={`w-[12px] h-[12px] rounded-full border-[2px] flex items-center justify-center`} style={{backgroundColor: `${checked ? '' : BackColorText}`, borderColor: `${BackColorText}`}}>
                                    <span className={`${checked ? 'invisible' : 'visible'}`}/>
                                </span>
                            </label>

                            <p className="font-semibold tracking-[2px] text-[15px]" style={{color: `${BackColorText}`}}>1x</p>
                            <h1 className="font-light text-[15px]" style={{fontFamily: "Poppins", color: `${BackColorText}`}}>Sabor Laranja</h1>
                            <img className="w-[70px]" src={Img1} />
                        </div>

                    </li>
                </ul>

                <button className="flex justify-center items-center gap-[15px] bg-gradient-to-b from-transparent to-[#31262667] border-b-2 h-[40px] w-full rounded-[7px] border-[#31262667]">
                    <span className="content w-[2px] h-[25px] rounded-3 rotate-[45deg]" style={{backgroundColor: `${BackColorText}`}}></span>
                    <span className="content w-[2px] h-[25px] rounded-3 rotate-[-45deg]" style={{backgroundColor: `${BackColorText}`}}></span>
                </button>
            </div>
        </section>
    )
}

export default Cart