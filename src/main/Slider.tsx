import { slider } from "../supaBase/getSliders"
import { useEffect, useState } from 'react'

type props = {
    imgs: Array<slider>
}

const Slider: React.FC<props> = ({ imgs }) => {
    const [currentImg, setCurrentImg] = useState<string>()
    const [className, setClassName] = useState<string>('SliderImage')
    useEffect(()=>{
        let number = 1
        setInterval(()=>{
            if(number === imgs.length) number = 1
            setClassName('SliderDissapear')
            setTimeout(()=> {
                setCurrentImg(imgs[number-1].img)
                setClassName('SliderImage')
            }, 300)
            number++
        }, 5000)
    }, [])
    return(
        <>
            <img className={className} src={currentImg} alt=""/>
        </>
    )
} 

export default Slider