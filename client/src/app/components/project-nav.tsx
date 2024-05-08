"use client"

import ProjectLink from "./project-link"
import { useEffect, useState } from "react"


const ProjectNav = () => {
    const [visible, setVisible] = useState<boolean>(false)




    return (
        <div className='w-[1000px] h-[500px] top-[15%] left-[25%] absolute z-10 border-black border-2 rounded-lg bg-white'>
            <div className='w-fit ml-[28%] mb-4'>
                <h1 className='text-black font-semibold text-lg mt-2'>Choose what project you want to learn more about</h1>
            </div>
            <div className='w-fit ml-[25%]'>

                <ProjectLink 
                title='Farm website'
                url='/project/farm-website'
                />

                <ProjectLink 
                title='QRcode Generator'
                url="/project/QRcodeGenorator"
                />

                <ProjectLink 
                title='Personal Website'
                url='/project/personal'
                />
            </div>

            <button className="bg-black" onClick={() => {
                console.log("close button was clicked")
            }}>Close</button>
        </div>
    )
}

export default ProjectNav