import { ReactNode, createContext, useState } from "react";

interface TypeContext { 
    Backgrond: number|undefined;
    BackColorText: string|undefined;
    BackGroundUniver: string|undefined;
    RotateImg: string|undefined;
    TimeRotate: string|undefined;
    ManipulationRotate: (e: string|undefined)=> void
    ManipulationBack: (e: number|undefined)=> void
    settTime: (e: string|undefined)=> void
    setColortext: (e: string|undefined)=> void
    setBackUniver: (e : string|undefined)=> void
}


export const ContextArmValue= createContext<TypeContext>({
    Backgrond: undefined,
    BackColorText: undefined,
    BackGroundUniver: undefined,
    RotateImg: undefined,
    TimeRotate: undefined,
    ManipulationRotate: ()=> {},
    ManipulationBack: ()=> {},
    settTime: ()=> {},
    setColortext: ()=> {},
    setBackUniver: ()=> {}
})


export const ContextArm= ({ children }: { children: ReactNode })=>{
    const [ Backgrond, setBack ]= useState<number | undefined>()
    const [ RotateImg, setRotation]= useState<string | undefined>()
    const [ TimeRotate, settTimeIten]= useState<string | undefined>()
    const [ BackColorText, setColor]= useState<string |undefined>()
    const [ BackGroundUniver, setBackUniveruser]= useState<string | undefined> ()

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

    const setBackUniver= ((e)=>{
        setBackUniveruser(e)
    })

    return (
        <ContextArmValue.Provider value={{ManipulationBack, ManipulationRotate, Backgrond, RotateImg, TimeRotate, settTime, BackColorText, setColortext, setBackUniver, BackGroundUniver}}>
            {children}
        </ContextArmValue.Provider>
    )
}

export default ContextArmValue