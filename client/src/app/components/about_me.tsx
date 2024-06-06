import { SiNextdotjs, SiTailwindcss, SiMysql } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { FaGlassCheers, FaReact, FaPython, FaNodeJs, FaGithub } from "react-icons/fa";






export default function AboutMe () {
    return (
        <>
            <div className='mt-[8vh] border-2 border-slate-600 rounded-lg ml-2 mr-2 pb-6 md:mr-[10vw] md:ml-[10vw]'>                    
                <h1 className='text-5xl p-4 md:ml-6'>Isaiah Martin <span className="text-blue-500">&bull;</span> Full Stack Engineer</h1>
                <div>
                    <div className=' ml-5 mr-5 md:ml-28 md:pr-10 md:mt-10 flex flex-col'>
                        <p className='text-xl'>Hi, I&apos;m Isaiah. I&apos;m a highly motivated Full Stack Engineer focusing on front-end development. I&apos;ve worked with various technologies like robotics and drones, but I have a deep passion for creating high-performing, full-stack applications. After completing Harvard&apos;s website development class, I shifted my focus to Next.js and React with TypeScript. I&apos;ve built and deployed multiple full-stack applications for local companies. Have a look around, cheers.</p>
                    </div> 
                    <div>
                        <h1 className='ml-[5vw] text-xl mt-5 text-blue-500 font-bold'>Tech Stack</h1>
                        <div className='flex flex-wrap'>
                            <div className='p-1 md:pl-6'>
                                <FaReact size='5rem' color='#087ea4'/>
                                <p className='text-center font-serif'>React</p>
                            </div>
                            <div className='p-1'> 
                                <BiLogoTypescript size='5rem' color='#3178c6'/>
                                <p className='text-center font-serif '>TypeScript</p>
                            </div>
                            <div className='p-1'>
                                <RiJavascriptFill size='5rem' color='#f0db4f'/>
                                <p className='text-center font-serif '>JavaScript</p>
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