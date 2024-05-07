"use client"

import NavBar from "@/app/components/nav"
import Image from "next/image"
import { useEffect, useState } from "react"



const FarmWeb  = () => {
    const [vh, setVh] = useState<number>(0)
    const [vw, setVw] = useState<number>(0)

    useEffect(() => {
        const aspectRatio = 16 / 9; // Example aspect ratio
        setVh(() => {
            return Math.floor(window.innerHeight) // Adjusted to use full viewport height
        }) 
        setVw(() => {
            return Math.floor(window.innerHeight * aspectRatio)
        }) 
    }, [])
    return (
        <>
            <NavBar 
            btn1Text="home"
            btn1Url="/"
            btn2Text="projects"
            btn2Url="/"
            />

            <div id="parent" className="flex flex-row mt-10">

                <div id="picture div" className="border-2 border-black">
                    <Image
                    src="/photos/farmweb.png"
                    width={vw} // Width calculated based on the aspect ratio
                    height={vh} // Set height to full viewport height
                    layout="responsive" // Image will scale both width and height while maintaining aspect ratio
                    />
                </div>
                <div id="text field" className="border-2 border-red-500 w-full
                ">

                </div>

            </div>
        </>
    )
}


export default FarmWeb