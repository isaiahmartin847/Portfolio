
import NavBar from "@/app/components/nav"
import Image from "next/image"
import { FaReact,  FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";
import GithubLastUpdate from "@/app/components/github_last_update";
import Link from "next/link";


const PersonalWeb = () => {
    return (
        <>
            <NavBar 
            btn1Text="home"
            btn1Url="/"
            />

            <div id="parent" className="flex flex-row mt-10 relative border-2 border-black">

                <div id="text field" className="w-full">
                    <div className="flex justify-center items-center font-bold text-xl mt-2">
                        <h1>Personal Website</h1>
                    </div>
                    <div className="ml-[15%] mr-[15%] mt-4">
                        <h1 className="font-bold text-lg border-b-2 border-black border-w-2">About</h1>
                        <p className="ml-5">
                        My portfolio project is one of my favorites. It's a website where I can show more personality and passion for coding. This website was created with cutting-edge front-end technology. I had a lot of fun with this project; for instance, I used GitHub's RESTful API to get the latest pushes on all my GitHub projects and utilized React Icons to display my skills in an intuitive way.
                        </p>
                    </div>
                    <div>
                        <h1 className="text-[20px] text-center mt-10 mb-2 font-mono">Skills</h1>
                        <div id="skills" className="ml-[20%] mr-[20%] border-t-2 border-b-2 border-blue-300 flex flex-row items-center justify-center h-20"> 
                            <Skills />
                        </div>  
                    </div>

                    <div className="bg-[#666666] text-white text-[20px] w-[50%] text-center ml-[26%] rounded-lg font-semibold mt-4 mb-2">
                        <GithubLastUpdate 
                        repo="personal_web"
                        />
                    </div>
                </div>

            </div>
            <div className="mt-4 flex ml-2 mr-2 justify-between">
                    <Image
                        src="/photos/personal.png"
                        width={500} 
                        height={500}
                        className="w-[30%] border-black border-2"
                        // layout="responsive" 
                        alt={"image of project"}
                        />

                        <Image
                        src="/photos/personal-project-nav.png"
                        width={500} 
                        height={500}
                        className="w-[30%] border-black border-2"
                        // layout="responsive" 
                        alt={"image of project"}
                        />

                        <Image
                        src="/photos/personal-project-resume.png"
                        width={500} 
                        height={500}
                        className="w-[30%] border-black border-2"
                        // layout="responsive" 
                        alt={"image of project"}
                        />
            </div>

            
        </>
    )
}



const Skills = () => {
    const iconSize: number = 50
    return (
        <div className="flex">
            
            <div className="ml-4 flex flex-col items-center">
                <FaReact 
                size={iconSize}
                color="#61DBFB"
                />
                <h4>React</h4>
            </div>
            
            <div className="ml-4 flex flex-col items-center">
                
                <SiTypescript 
                size={iconSize}
                color="#007acc"
                />

                <h4>TypesScript</h4>
            </div>

            <div className="ml-4 flex flex-col items-center">
                
                <SiNextdotjs 
                size={iconSize}
                color="#000000"
                />

                <h4>Next.js</h4>
            </div>

            <div className="ml-4 flex flex-col items-center">
            <FaGithub 
            size={iconSize}
            color="#666666"
            />
            <h4>Github</h4>
            </div>

            <div className="ml-4 flex flex-col items-center">
            <SiTailwindcss 
            size={iconSize}
            color="#2565AE"

            />
            <h4>Tailwind</h4>
            </div>

        </div>
    )
}



export default PersonalWeb