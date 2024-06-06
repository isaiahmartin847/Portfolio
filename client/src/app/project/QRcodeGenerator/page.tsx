"use client"

import GithubLastUpdate from "@/app/components/github_last_update"
import NavBar from "@/app/components/nav"
import Image from "next/image"
import Link from "next/link"
import { FaCss3Alt, FaHtml5, FaGithub } from "react-icons/fa"
import { RiJavascriptFill } from "react-icons/ri"
import useWindowWidth from "@/app/hooks/useWidth"


const QRCodeProject = () => {

    const windowWidth: number = useWindowWidth() 

    return ( 
        <>
            <NavBar 
            btn1Text="Home"
            btn1Url="/"
            />

            <div className="mb-2 flex flex-col ml-2 mr-2 mt-10 relative border-2 border-black md:flex-row md:ml-0 md:mr-0">

                <div id="text field" className="w-full">
                    <div className="flex justify-center items-center font-bold text-xl mt-2">
                        <h1>QR Code Generator</h1>
                    </div>

                    <div className="ml-[15%] mr-[15%] mt-4">
                        <h1 className="font-bold text-lg border-b-2 border-black border-w-2">About</h1>
                        <p className="ml-5">
                        My QR code generator project is a testament to the basics. Itapos;s important to me to peel off all the modern frameworks and build websites with three tried and true technologies to fully understand whatapos;s under the hood of all these frameworks. These days, I feel like everyone is chasing the newest framework and the next big thing. While this is a good thing for the industry, there are a lot of people out there who don’t understand the basics and the underlying principles that all the frameworks are built upon.
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
                        src="/photos/qr-code.png"
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

    const iconSize:number = 50
    return (
        <div className=" ml-[20%] mr-[20%] border-t-2 border-b-2 border-blue-300 flex flex-wrap items-center justify-center">

            <div className="ml-4 flex flex-col items-center">
                
                <RiJavascriptFill 
                size={iconSize}
                color="#F0DB4F"
                />

                <h4>JavaScript</h4>
            </div>

            <div className="ml-4 flex flex-col items-center">
                <FaHtml5 
                size={iconSize}
                color="#E34C26"
                />
                <h4>HTML</h4>
            </div>

            <div className="ml-4 flex flex-col items-center">
                <FaCss3Alt 
                size={iconSize}
                color="#2565AE"
                />
                <h4>CSS</h4>
            </div>

            <div className="ml-4 flex flex-col items-center">
            <FaGithub 
            size={iconSize}
            color="#666666"
            />
            <h4>Github</h4>
            </div>



        </div>
    )
}

export default QRCodeProject
