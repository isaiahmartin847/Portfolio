"use client"

import ProjectLink from "./project-link"
// import { useEffect, useState } from "react"

type Props = {
    visible: boolean
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}




const ProjectNav: React.FC<Props> = ({visible, setVisible}) => {


    if(visible) {
        return (
            
            <div className='w-[1000px] h-fit pb-4 top-[15%] left-[25%] absolute z-10 border-black border-2 rounded-lg bg-white'>
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
        
                <button className="bg-blue-500 text-white font-semibold pt-1 pb-1 pr-2 pl-2 rounded-lg ml-[47%] mt-4" onClick={() => {
                    setVisible(!visible)
                }}>Close</button>
            </div>
        )} 
}

export default ProjectNav