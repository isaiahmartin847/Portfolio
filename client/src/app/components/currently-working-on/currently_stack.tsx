import { FaReact,  FaDocker, FaGithub, FaPython, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMysql, SiNodedotjs, SiVercel, SiReactquery, SiFastapi } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { BsStripe } from "react-icons/bs";


const CurrentlyTechStack = () => {
    return (

            <div>
                <h1 className="text-center text-lg font-bold">tech stack</h1>
                <div className="ml-4 mr-4 md:my-5 md:mx-10 flex items-center justify-around flex-wrap space-x-2">
                    <div className="flex text-xl"><FaReact color='#087ea4' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> React.js</div>
                    <div className="flex text-xl"><BiLogoTypescript color='#3178c6' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/>TypeScript</div>
                    <div className="flex text-xl"><FaPython color='#FFDE57' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/>Python</div>
                    <div className="flex text-xl"><SiNextdotjs color='#000000' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> Next.js</div>
                    <div className="flex text-xl"><SiNodedotjs color='#68A063' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> Node.js</div>
                    <div className="flex text-xl"><SiReactquery color='#eb4034' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> React Query</div>
                    <div className="flex text-xl"><SiTailwindcss color='#3490dc' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> Tailwind</div>
                    <div className="flex text-xl"><SiMysql color='#264de4' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> MySQL</div>
                    <div className="flex text-xl"><SiFastapi color='#02b070' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> FastAPI</div>
                    <div className="flex text-xl"><FaGithub color='#000000' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> GitHub</div>
                    <div className="flex text-xl"><FaDocker color='#0db7ed' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> Docker</div>
                    <div className="flex text-xl"><FaAws color='#ff9900' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> AWS</div>
                    <div className="flex text-xl"><SiVercel color='#000000' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> Vercel</div>
                    <div className="flex text-xl"><BsStripe color='#5433FF' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> Stripe</div>
                </div>
        </div>
    )
}


export default CurrentlyTechStack;