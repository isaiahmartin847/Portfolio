"use client"

import useWindowWidth from "@/app/hooks/useWidth"
import NavBar from "@/app/components/nav"
import Image from "next/image"
import { FaReact,  FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiTailwindcss, SiMysql, SiNodedotjs } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import GithubLastUpdate from "@/app/components/github_last_update";
import Link from "next/link";


const FarmWeb  = () => {
    const windowWidth: number = useWindowWidth()


    return (
        <>
            <NavBar 
            btn1Text="home"
            btn1Url="/"
            />

            <div className="mb-2 flex flex-col ml-2 mr-2 mt-10 relative border-2 border-black md:flex-row md:ml-0 md:mr-0">

                <div id="text field" className="w-full">
                    <div className="flex justify-center items-center font-bold text-xl mt-2">
                        <h1>Farm Website</h1>
                    </div>

                    <div className="ml-[15%] mr-[15%] mt-4">
                        <h1 className="font-bold text-lg border-b-2 border-black border-w-2">About</h1>
                        <p className="ml-5">
                        The Covenant Gardens Farm website was created to offer shoppers an alternative way to select products without relying on physical pamphlets, saving the farm hundreds of dollars on printing and folding costs. I began by developing the front end of the application using the latest frontend technologies, including React, Next.js, JavaScript, Tailwind, and CSS. Once the front end was completed, I proceeded to implement the backend using Node.js and Express for the REST API. After finalizing the routing, I integrated it with a relational database called MySQL to manage products, users, and users cart. Additionally, I utilized version control using GitHub to maintain high code standards and for project management purposes.                                                                                                                                                                                                
                        </p>
                    </div>

                    <div className="mb-4">
                        <h1 className="text-[20px] text-center mt-10 mb-2 font-mono">Skills</h1>
                        <div className=""> 
                            <Skills />
                        </div>  
                    </div>

                    <div className="flex justify-center">
                        <div className="bg-blue-500 w-fit p-1 rounded-lg text-white font-semibold mb-4 hover:bg-blue-400">
                            <Link
                            href={"https://farm-web-psi.vercel.app/"}
                            target="_blank"
                            >Visit the site</Link>
                        </div>
                    </div>

                    <div className="bg-[#666666] text-white text-[20px] text-center rounded-lg font-semibold ml-2 mr-2">
                        <GithubLastUpdate 
                        repo="farm-web"
                        />
                    </div>
                </div>
                <div className="mb-4 border-black border-2 rounded-xl ml-2 mr-2 mt-4 md:ml-2 md:mr-2  md:border-l-2 md:border-black">
                    <Image
                        src="/photos/farmweb.png"
                        width={windowWidth}
                        height={500} 
                        layout="responsive" 
                        alt={"image of project"}
                        className="rounded-xl"
                        />
                </div>

            </div>
        </>
    )
}


const Skills = () => {
    const iconSize: number = 50
    return (
        <div className=" ml-[20%] mr-[20%] border-t-2 border-b-2 border-blue-300 flex flex-wrap items-center justify-center">
            
            <div className="ml-4 flex flex-col items-center">
                <FaReact 
                size={iconSize}
                color="#61DBFB"
                />
                <h4>React</h4>
            </div>
            
            <div className="ml-4 flex flex-col items-center">
                
                <RiJavascriptFill 
                size={iconSize}
                color="#F0DB4F"
                />

                <h4>JavaScript</h4>
            </div>
            
            <div className="ml-4 flex flex-col items-center">
                <SiNextdotjs
                size={iconSize}
                />
                <h4>Next.Js</h4>
            </div>
            
            <div className="ml-4 flex flex-col items-center">
            <SiNodedotjs 
            size={iconSize}
            color="#68A063"            
            />
            <h4>Node.Js</h4>
            </div>
            
            <div className="ml-4 flex flex-col items-center">
            <SiMysql 
            size={iconSize}
            color="#F29111"
            />
            <h4>MySQL</h4>
            </div>
            
            <div className="ml-4 flex flex-col items-center">
            <SiExpress 
            size={iconSize}
            />
            <h4>Express</h4>
            </div>

            <div className="ml-4 flex flex-col items-center">
            <FaGithub 
            size={iconSize}
            color="#666666"
            />
            <h4>Github</h4>
            </div>

            <div className="ml-4 flex flex-col items-center">
            <FaCss3Alt 
            size={iconSize}
            color="#2565AE"

            />
            <h4>CSS</h4>
            </div>

        </div>
    )
}

export default FarmWeb
