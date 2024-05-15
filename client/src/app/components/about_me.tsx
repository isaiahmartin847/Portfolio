import React from 'react'
import { SiNextdotjs, SiTailwindcss, SiMysql } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { FaGlassCheers, FaReact, FaPython, FaNodeJs, FaGithub } from "react-icons/fa";






export default function AboutMe () {
    return (
        <>
            <div className='mt-[8vh] mr-[10vw] ml-[10vw] border-2 border-slate-600 rounded-lg pb-6'>                    
                <h1 className='text-5xl p-4 ml-6'>Isaiah Martin | Full Stack Engineer</h1>
                <div>
                    <div className='w-fit ml-28 pr-10 mt-10'>
                        <div className='flex flex-col'>
                            <div className='flex items-center space-x-2'>
                                <p className='text-xl'>Hi, I'm Isaiah. I'm a highly motivated Full Stack Engineer focusing on front-end development. I've worked with various technologies like robotics and drones, but I have a deep passion for creating high-performing full-stack applications. After completing Harvard's website development class, I shifted my focus to Next.js and React with TypeScript. I've built and deployed multiple full-stack applications for local companies. Have a look around, cheers.</p>
                                {/* <span><FaGlassCheers size={25} className=''/></span> */}
                            </div>
                        </div>
                    </div> 
                    <div>
                        <h1 className='ml-[5vw] text-xl mt-5 text-blue-500 font-bold'>Tech Stack</h1>
                        <div className='flex'>
                            <div className='pl-6 p-1'>
                                <FaReact size='5rem' color='#087ea4'/>
                                <p className='text-center font-serif'>React</p>
                            </div>
                            <div className='p-1'> 
                                <BiLogoTypescript size='5rem' color='#3178c6'/>
                                <p className='text-center font-serif '>Type Script</p>
                            </div>
                            <div className='p-1'>
                                <RiJavascriptFill size='5rem' color='#f0db4f'/>
                                <p className='text-center font-serif '>Java Script</p>
                            </div>
                            <div className='p-1'>
                                <SiNextdotjs size='5rem' color='#000000'/>
                                <p className='text-center font-serif '>Next.js</p>
                            </div>
                            <div className='p-1'>
                                <FaPython size="5rem" color='#fbcb24'/>
                                <p className='text-center font-serif '>Python</p>
                            </div>
                            <div className='p-1'>
                                <FaNodeJs size='5rem' color='#68A063'/>
                                <p className='text-center font-serif '>Node.js</p>
                            </div>
                            <div className='p-1'>
                                <SiTailwindcss  size='5rem' color='#3490dc'/>
                                <p className='text-center font-serif '>TailWindCss</p>
                            </div>
    
                            <div className='p-1'>
                                <SiMysql size='5rem' color='#264de4'/>
                                <p className='text-center font-serif '>MySQL</p>
                            </div>
                            <div className='p-1 pr-6'>
                                <FaGithub size='5rem' color='#000000'/>
                                <p className='text-center font-serif '>Github</p>
                            </div>
                        </div>
                    </div>   
                </div>   
            </div>
        </>
    )
}