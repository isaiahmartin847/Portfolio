import { Margarine } from "next/font/google";
import { FaReact,  FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiTailwindcss, SiMysql, SiNodedotjs } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import GithubLastUpdate from "./github_last_update";


export default function MyProjects () {
    
    return (
        <div className="flex border-2 border-black ml-[10vw] mr-[10vw] mt-16 rounded">
            <div className=" w-1/4 p-3">
                <img className="border-2 border-black rounded-[20px]" src="/photos/farmweb.png"/>
            </div>
            <div className="w-fit relative">
                <h1 className="font-bold text-xl text-center">Farm Website</h1>
                <p className="text-center w-fit pr-[10%] pl-[10%] mt-4">The Covenant Gardens Farm website was created to offer shoppers an alternative way to select products without relying on physical pamphlets, saving the farm hundreds of dollars on printing and folding costs. I began by developing the front end of the application using the latest frontend technologies, including React, Next.js, JavaScript, Tailwind, and CSS. Once the front end was completed, I proceeded to implement the backend using Node.js and Express for the REST API. After finalizing the routing, I integrated it with a relational database called MySQL to manage products, users, and users cart. Additionally, I utilized version control using GitHub to maintain high code standards and for project management purposes.</p>
                <div className="font-bold text-center bg-[#555C61] rounded absolute inset-x-0 bottom-4 text-white text-md border-2 border-black">
                    <GithubLastUpdate />
                </div>
            </div>
            <div className="w-1/4">
                <h1 className="text-center text-lg font-bold">tech stack</h1>
                <ul className="ml-4">
                    <li><div className="flex text-xl"><FaReact color='#087ea4' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> react.js</div></li>
                    <li><div className="flex text-xl"><RiJavascriptFill color='#f0db4f' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> Java Script</div></li>
                    <li><div className="flex text-xl"><SiNextdotjs color='#000000' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> Next.js</div></li>
                    <li><div className="flex text-xl"><SiNodedotjs color='#68A063' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> Node.js</div></li>
                    <li><div className="flex text-xl"><SiTailwindcss color='#3490dc' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> Tailwind</div></li>
                    <li><div className="flex text-xl"><SiMysql color='#264de4' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> MySQL</div></li>
                    <li><div className="flex text-xl"><SiExpress color='#000000' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> Express</div></li>
                    <li><div className="flex text-xl"><FaGithub color='#000000' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> GitHub</div></li>
                    <li><div className="flex text-xl"><FaCss3Alt color='#087ea4' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> CSS</div></li>
                </ul>
            </div>
            
        </div>
    )
}