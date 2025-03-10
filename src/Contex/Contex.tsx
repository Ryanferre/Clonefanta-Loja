import { ReactNode, createContext, useState } from "react";

interface TypeContext { 
    Backgrond: number|undefined;
    BackColorText: string|undefined;
    RotateImg: string|undefined;
    TimeRotate: string|undefined;
    ManipulationRotate: (e: string|undefined)=> void
    ManipulationBack: (e: number|undefined)=> void
    settTime: (e: string|undefined)=> void
    setColortext: (e: string|undefined)=> void
}


export const ContextArmValue= createContext<TypeContext>({
    Backgrond: undefined,
    BackColorText: undefined,
    RotateImg: undefined,
    TimeRotate: undefined,
    ManipulationRotate: ()=> {},
    ManipulationBack: ()=> {},
    settTime: ()=> {},
    setColortext: ()=> {}
})


export const ContextArm= ({ children }: { children: ReactNode })=>{
    const [ Backgrond, setBack ]= useState<number | undefined>()
    const [ RotateImg, setRotation]= useState<string | undefined>()
    const [ TimeRotate, settTimeIten]= useState<string | undefined>()
    const [ BackColorText, setColor]= useState<string |undefined>()

    const ManipulationBack= (e)=>{
        setBack(e)
    }

    const ManipulationRotate= (e)=>{
        setRotation(e)
    }

    const settTime= ((e)=>{
        settTimeIten(e)
    })

    const setColortext= ((e)=>{
        setColor(e)
    })

    return (
        <ContextArmValue.Provider value={{ManipulationBack, ManipulationRotate, Backgrond, RotateImg, TimeRotate, settTime, BackColorText, setColortext}}>
            {children}
        </ContextArmValue.Provider>
    )
}

export default ContextArmValue