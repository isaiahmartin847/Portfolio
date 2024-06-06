"use client"

import ProjectLink from "./project-link"
// import { useEffect, useState } from "react"

type Props = {
    visible: boolean
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}




const ProjectNav: React.FC<Props> = ({visible, setVisible}) => {

// set this back to visible
    if(visible) {
        return (
            <div className="flex justify-center ml-2 mr-2">
                <div className='flex flex-col justify-center text-center border-black border-2 mt-4 p-4 rounded-xl w-full md:w-fit'>
                    {/* <div className=''>
                        <h1 className=''>Choose what project you want to learn more about</h1>
                    </div> */}
                    <div className=''>
            
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

                    <div className="flex justify-center mt-4">
                        <button className="border-black border-2 bg-red-400 p-2 rounded-xl w-fit font-semibold" onClick={() => {
                            setVisible(!visible)
                        }}>Close</button>
                    </div>
                </div>
            </div>
        )} 
}

export default ProjectNav