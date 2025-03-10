import Slider from "../Slider/Slider"
import { useContext, useEffect, useState } from "react"
import ContextArmValue from "../../../Contex/Contex.tsx"
import { FaLocationPin } from "react-icons/fa6"


const Apress= ()=>{
    const { Backgrond, setColortext, BackColorText, setBackUniver }= useContext(ContextArmValue)
    const [ colorBack, setColor ]= useState('')
 

    //modificacao da cor de fundo e atualizacao de input
    useEffect(()=>{
        const IconsAs= document.querySelectorAll(".Icon") as NodeListOf<HTMLElement>

        switch (Backgrond) {
            case 0:
                setColor('#304878')
                setColortext('#ff824a')
                IconsAs[0].style.opacity= "1"
                IconsAs[1].style.opacity= "0"
                IconsAs[2].style.opacity= "0"
                IconsAs[3].style.opacity= "0"
                break;
            case 1:
                setColor('#ffffe2')
                setColortext('#f0ce4e')
                IconsAs[1].style.opacity= "1"
                IconsAs[2].style.opacity= "0"
                IconsAs[3].style.opacity= "0"
                IconsAs[0].style.opacity= "0"
                break;
            case 2:
                setColor('#8f8f8f')
                setColortext('#fea887')
                IconsAs[2].style.opacity= "1"
                IconsAs[3].style.opacity= "0"
                IconsAs[1].style.opacity= "0"
                IconsAs[0].style.opacity= "0"
                break;
            case 3:
                setColor('#ededf2')
                setColortext('#09738a')
                IconsAs[3].style.opacity= "1"
                IconsAs[2].style.opacity= "0"
                IconsAs[1].style.opacity= "0"
                IconsAs[0].style.opacity= "0"
                break;
        
            default:
                break;
        }
    }, [Backgrond])

    useEffect(()=>{
        setBackUniver(colorBack)
    }, [colorBack])

    return(
        <section className={`flex flex-col items-center justify-end gap-[50px] pb-10`} style={{zIndex: '0', width: "100vmax", height: "100%", background: `${colorBack}`}}>
            <div className={`flex flex-row items-center justify-center`}>
                <h1 className={`text-[200px] font-bold`} style={{fontFamily: "Poppins", color: `${BackColorText}`}}>Drex</h1>
                <Slider />
            </div>
            <ul className="flex flex-row gap-4 m-0 mx-auto">
                <li>
                    <input id="checked-button-Item-One" className="invisible" type="checkbox"/>
                    <label className={`flex flex-col justify-center items-center gap-1`} htmlFor="checked-button-Item-One">
                        <FaLocationPin className="Icon" color={`${BackColorText}`} style={{opacity: "0", transition: "1s"}} />
                        <span className="flex fle-col justify-center items-center w-[10px] h-[10px] rounded-[50px] border-[1px] border-transparent" style={{backgroundColor: `${BackColorText}`}}>
                        </span>
                    </label>
                </li>
                <li>
                    <input id="checked-button-Item-Two" className="invisible" type="checkbox"/>
                    <label className="flex flex-col justify-center items-center gap-1" htmlFor="checked-button-Item-Two">
                        <FaLocationPin className='Icon' color={`${BackColorText}`} style={{opacity: "0", transition: "1s"}} />
                        <span className="flex fle-col justify-center items-center w-[10px] h-[10px] rounded-[50px] border-[1px] border-transparent" style={{backgroundColor: `${BackColorText}`}}>
                        </span>
                    </label>
                </li>
                <li>
                    <input id="checked-button-Item-Tree" className="invisible" type="checkbox"/>
                    <label className="flex flex-col justify-center items-center gap-1" htmlFor="checked-button-Item-Tree">
                        <FaLocationPin className='Icon' color={`${BackColorText}`} style={{opacity: "0", transition: "1s"}} />
                        <span className="flex fle-col justify-center items-center w-[10px] h-[10px] rounded-[50px] border-[1px] border-transparent" style={{backgroundColor: `${BackColorText}`}}>
                        </span>
                    </label>
                </li>
                <li>
                    <input id="checked-button-Item-Tree" className="invisible" type="checkbox"/>
                    <label className="flex flex-col justify-center items-center gap-1" htmlFor="checked-button-Item-Tree">
                        <FaLocationPin className='Icon' color={`${BackColorText}`} style={{opacity: "0", transition: "1s"}} />
                        <span className="flex fle-col justify-center items-center w-[10px] h-[10px] rounded-[50px] border-[1px] border-transparent" style={{backgroundColor: `${BackColorText}`}}>
                        </span>
                    </label>
                </li>
            </ul>
        </section>
    )
}


export default Apress