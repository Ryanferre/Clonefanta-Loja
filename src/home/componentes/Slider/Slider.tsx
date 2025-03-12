import { useEffect, useState } from "react"
import Img1 from "../../imagens/r1.png"
import Img2 from "../../imagens/r2.png"
import Img3 from "../../imagens/r3.png"
import Img4 from "../../imagens/r4.png"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css";
import { useContext } from "react"
import ContextArmValue from "../../../Contex/Contex.tsx"




const Slider= ()=>{
    const [ activeSlide, setSlide ]= useState(0)
    const [ RotateAplic, setRotate ]= useState<string | undefined>()
    const { ManipulationBack, RotateImg, TimeRotate }= useContext(ContextArmValue)

    const ActiveSlide= (e: any)=>{
        setSlide(e.realIndex)
    }

    //identificador de slide ativo
    useEffect(()=>{
       ManipulationBack(activeSlide)
    }, [activeSlide])

    //Modificacao de rotacao
    useEffect(()=>{
        setRotate(RotateImg)
    }, [activeSlide])

    return(
        <section className="absolute w-full h-[350px]">
            <Swiper className="w-full" style={{ display: "flex", justifyContent: "center", paddingLeft: "39%", alignItems: 'center'}} loop={true} centeredSlides={true} slidesPerView={1} modules={[Navigation]} navigation={{nextEl: ".Next-Previw", prevEl: ".Back-previw"}} onSlideChange={ActiveSlide} simulateTouch={false} speed={1200}>
                <SwiperSlide className="flex justify-center items-center"><img style={{transform: `${RotateAplic}`, transition: `${TimeRotate}`}} className="w-[300px] h-[406px]" src={Img1}/></SwiperSlide>    
                <SwiperSlide className="flex justify-center items-center"><img style={{transform: `${RotateAplic}`, transition: `${TimeRotate}`}} className="w-[380px] h-[406px]" src={Img2}/></SwiperSlide>
                <SwiperSlide className="flex justify-center items-center"><img style={{transform: `${RotateAplic}`, transition: `${TimeRotate}`}} className="w-[240px] h-[390px]" src={Img3}/></SwiperSlide>
                <SwiperSlide className="flex justify-center items-center"><img style={{transform: `${RotateAplic}`, transition: `${TimeRotate}`}} className="w-[380px] h-[395px]" src={Img4}/></SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Slider