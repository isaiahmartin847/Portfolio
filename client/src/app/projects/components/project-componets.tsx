"use client"
import GithubLastUpdate from "@/app/components/github_last_update"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"

// import { ImInsertTemplate } from "react-icons/im"
// import { LiaCoinsSolid } from "react-icons/lia"
// import { IoLogoJavascript } from "react-icons/io5";



type Props = {
    title: string 
    github: string 
    text: string
    photoPath: string
    skills: Array<string>

}




const ProjectProp = ({title, github, photoPath, skills, text}: Props) => {
    const [divHigh, setDivHigh] = useState<number>(0);

        const divRef = useRef(null);

        useEffect(() => {
            if (divRef.current) {
                const height: number = divRef.current.clientHeight;
                setDivHigh(() => {
                    return height * 1.16
                })
            }
        }, []);



    return (
        <div ref={divRef} className="flex mt-4 ml-10 mr-10 border-2 border-black rounded h-[50vh]">
            <div>
                <Image 
                src={photoPath}
                // layout="responsive"
                width={divHigh}
                height={divHigh}
                alt="project photo"
                className="border-2 border-black"
                />
            </div>
            <div>
                <div className="ml-5 mt-2 font-bold">
                    <h1 className="font-bold text-2xl">{title}</h1>
                </div>
                <div className="w-3/4 ml-10 mt-2">
                    <h1 className="font-bold text-xl">About</h1>
                    {/* <p className="ml-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veniam, itaque quasi dolor esse harum, provident in accusantium doloremque cumque sunt tempore earum labore iusto! Aperiam incidunt nobis neque debitis.</p> */}
                    <p className="ml-10">{text}</p>
                </div>   
                <div className="ml-10">
                    <h4 className="font-bold font-sans">Skills</h4>
                    <div className="flex flex-row ml-4">
                    <ul className="list-disc flex">
                    <Skills 
                    skills={skills}/>
                    </ul>
                    </div>
                </div> 
                <div className="text-center bg-slate-600 text-white font-bold rounded ml-3 mr-3"> 
                    <GithubLastUpdate 
                    repo={github}
                    />

                </div>
            </div>
        </div>
    )
}


const Skills = ({ skills }: Props) => {
    return (
        <>        
            {skills.map((skill: string, index: number) => (
                <li className="ml-10 font-mono" key={index}>{skill}</li>
            ))}
        </>
    )
}
export default ProjectProp