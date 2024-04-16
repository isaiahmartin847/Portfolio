import { Margarine } from "next/font/google";
import { FaReact,  FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiTailwindcss, SiMysql, SiNodedotjs } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";


export default function MyProjects () {
    
    return (
        <div className="flex border-4 ml-[10vw] mr-[10vw] mt-16">
            <div className="border-2 border-red-500 w-1/4">
                <img className="p-3 w-[300px] rounded-[30px]" src="https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </div>
            <div className="border-2 border-black w-max text-center">
                <h1 className="font-bold text-xl text-center">Farm Website</h1>
                <p className="w-3/4 pl-[20%] ml-3 mt-4">The Covenant Gardens Farm website was created to offer shoppers an alternative way to select products without relying on physical pamphlets, saving the farm hundreds of dollars on printing and folding costs. I began by developing the front end of the application using the latest frontend technologies, including React, Next.js, JavaScript, Tailwind, and CSS. Once the front end was completed, I proceeded to implement the backend using Node.js and Express for the REST API. After finalizing the routing, I integrated it with a relational database called MySQL to manage products, users, and users cart. Additionally, I utilized version control using GitHub to maintain high code standards and for project management purposes.</p>
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