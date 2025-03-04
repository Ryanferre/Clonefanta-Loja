import Img1 from "../../home/imagens/Img1.png"
import { useState } from "react";

const Cart= ()=>{
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
      };
    
    return(
        <section className="absolute right-0 h-full pt-24">
            <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', gap:'30px'}}>
            <ul>
                <li className="w-[300px]">
                    <div className="flex items-center justify-between px-2">
                    <label className="flex items-center cursor-pointer">
                        <input type="checkbox" checked={checked} onChange={handleChange} className="hidden"/>
                        <div className={`w-[12px] h-[12px] rounded-full border-[2px] flex items-center justify-center ${checked ? '' : 'bg-white'}`} >
                            <div className={`bg-white ${checked ? 'invisible' : 'visible'}`}/>
                        </div>
                    </label>
                        <p className="font-semibold tracking-[2px] text-[15px] text-white">1x</p>
                        <h1 className="font-light text-[15px] text-white" style={{fontFamily: "Poppins"}}>Sabor Laranja</h1>
                        <img className="w-[70px]" src={Img1} />
                    </div>
                </li>
            </ul>
            <button className="flex justify-center items-center gap-[15px] bg-gradient-to-b from-transparent to-[#31262667] border-b-2 h-[40px] w-full rounded-[7px] border-[#31262667]">
                <span className="content w-[2px] h-[25px] rounded-3 rotate-[45deg] bg-white">
                </span>
                <span className="content w-[2px] h-[25px] rounded-3 rotate-[-45deg] bg-white">
                </span>
            </button>
            </div>
        </section>
    )
}

export default Cart