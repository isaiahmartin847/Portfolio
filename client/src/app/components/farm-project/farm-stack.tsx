import { FaReact,  FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiTailwindcss, SiMysql, SiNodedotjs } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";


const FarmTechStack = () => {
    return (
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
    )
}


export default FarmTechStack;


