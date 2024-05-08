
import NavBar from "@/app/components/nav"
import Image from "next/image"
import { FaReact,  FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import GithubLastUpdate from "@/app/components/github_last_update";
import Link from "next/link";


const PersonalWeb = () => {
    return (
        <>
            <NavBar 
            btn1Text="home"
            btn1Url="/"
            btn2Text="projects"
            btn2Url="/"
            />

            <div id="parent" className="flex flex-row mt-10 relative border-2 border-black">

                <div id="picture div" className="border-r-2 border-black">
                    <Image
                        src="/photos/qr-code.png"
                        width={500} 
                        height={500} 
                        layout="responsive" 
                        alt={"image of project"}
                        />
                </div>
                <div id="text field" className="w-full">
                    <div className="flex justify-center items-center font-bold text-xl mt-2">
                        <h1>Personal Website</h1>
                    </div>
                    <div className="ml-[15%] mr-[15%] mt-4">
                        <h1 className="font-bold text-lg border-b-2 border-black border-w-2">About</h1>
                        <p className="ml-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consequuntur aperiam, ullam harum sint repellendus
                            rerum deserunt neque magnam qui provident exercitationem iste perspiciatis esse nobis natus ut quaerat molestias
                            mollitia placeat. Molestias quo eius labore magni placeat ipsam, tempora consequatur. Libero aliquid animi minus
                            illo, eveniet soluta vel facere debitis vero? Quaerat quia nisi delectus, omnis ipsam dolore eaque consequuntur
                            laborum assumenda aliquid, facilis consectetur nobis fuga necessitatibus. Reiciendis nulla vitae doloribus
                            minus. Debitis doloribus unde porro dolores nostrum aliquam maiores voluptate, repellendus 
                            est nobis ea eaque laboriosam possimus temporibus ab fugiat laudantium blanditiis repellat ipsa error nulla sed?
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