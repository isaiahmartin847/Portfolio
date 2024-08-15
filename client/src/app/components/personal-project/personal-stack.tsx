import { FaReact,  FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiNodedotjs, SiVercel } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";


const PersonalTechStack = () => {
    return (
        <div className="md:w-1/4">
            <h1 className="text-center text-lg font-bold">tech stack</h1>
            
            <div className="ml-4 mr-4 justify-between flex flex-wrap md:flex-nowrap md:flex-col">
                <div className="flex text-xl"><FaReact color='#087ea4' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> React.js</div>
                <div className="flex text-xl"><BiLogoTypescript color='#3178c6' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/>Type Script</div>
                <div className="flex text-xl"><SiNextdotjs color='#000000' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> Next.js</div>
                <div className="flex text-xl"><SiNodedotjs color='#68A063' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> Node.js</div>
                <div className="flex text-xl"><SiVercel color='#000000' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> Vercel</div>
                <div className="flex text-xl"><SiTailwindcss color='#3490dc' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> Tailwind</div>
                <div className="flex text-xl"><FaGithub color='#000000' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> GitHub</div>
                <div className="flex text-xl"><FaCss3Alt color='#087ea4' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> CSS</div>
            </div>
        </div>            
    )
}


export default PersonalTechStack;


