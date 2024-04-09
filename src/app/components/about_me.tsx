import React from 'react'
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaPython, FaHtml5, FaNodeJs, FaCss3Alt, FaStackOverflow } from "react-icons/fa";





export default function AboutMe () {
    return (
        <>
            <div className='relative h-fit pt-[8vh]'>
                {/* photo div */}
                <div className='absolute right-[69vw]'>
                    <img className="img"src='/headshot.png' alt='profile img' />
                </div>
                {/* about card */}
                <div className='aboutmetext border-2 border-slate-600 rounded-lg'>                    
                    <h1 className='text-5xl p-4 ml-6'>Isaiah Martin | Frontend Engineer</h1>
                    <div className=' w-fit ml-28 pr-10 mt-10'>
                        <p className='text-xl'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius pariatur in numquam atque animi minima temporibus quas voluptas inventore reprehenderit esse asperiores consectetur, voluptatibus ut, quod quia beatae deleniti molestiae similique obcaecati nisi! Suscipit impedit beatae aut. Deleniti, incidunt rerum! Quidem rem voluptate, atque illum laudantium animi doloribus quibusdam placeat fuga alias. Voluptate dolore perferendis suscipit quod voluptatibus recusandae explicabo eum id ullam iste omnis ut distinctio eligendi neque magnam doloremque rerum, quo itaque nulla nisi inventore. Odit adipisci doloremque incidunt ipsa tempore, id soluta voluptas. Nam qui possimus facilis magnam saepe provident rerum quisquam excepturi, quos laboriosam temporibus debitis.</p>
                    </div>  
                    <h1 className='ml-[5vw] text-xl mt-5 text-blue-500 font-bold'>Tech Stack</h1>
                    <div className='border-blue-500 border flex w-fit rounded-full ml-[2vw]'>
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
                            <FaHtml5 size='5rem' color='#f06529'/>
                            <p className='text-center font-serif '>HTML</p>
                        </div>
                        <div className='p-1'>
                            <SiTailwindcss  size='5rem' color='#3490dc'/>
                            <p className='text-center font-serif '>TailWindCss</p>
                        </div>
                        <div className='p-1'>
                            <FaNodeJs size='5rem' color='#68A063'/>
                            <p className='text-center font-serif '>Node.js</p>
                        </div>
                        <div className='p-1 pr-6'>
                            <FaCss3Alt size='5rem' color='#264de4'/>
                            <p className='text-center font-serif '>CSS</p>
                        </div>
                        
                    </div>   
                </div>
            </div>
        </>
    )
}