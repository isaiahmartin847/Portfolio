
import { SiNextdotjs, SiTailwindcss, SiMysql } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaPython, FaHtml5, FaNodeJs, FaCss3Alt, FaGithub, FaDigitalOcean} from "react-icons/fa";



export default function AnimatedLogos () {
    const logoSize: number = 50

    return (
        <>  

            <FaReact 
                className="mr-2"
                size={logoSize}
                color="#087ea4"
            > 
            </FaReact>

            <SiNextdotjs 
                className="mr-2"
                size={logoSize}
                color="black"
            />

            <BiLogoTypescript 
                className="mr-2"
                size={logoSize}
                color="#3178c6"
            />
            <RiJavascriptFill 
                className="mr-2"
                size={logoSize}
                color="#f0db4f"
            />

            <FaHtml5 
                className="mr-2"
                size={logoSize}
                color="#f06529"
            />


            <SiMysql 
                className="mr-2"
                size={logoSize}
                color="#264de4"            
            />

            <FaPython 
                className="mr-2"
                size={logoSize}
                color="#fbcb24"            
            />

            <SiTailwindcss 
                className="mr-2"
                size={logoSize}
                color="#3490dc"            
            />

            <FaDigitalOcean 
                className="mr-2"
                size={logoSize}
                color="aqua"
            />

            <FaGithub
                className="mr-2"
                size={logoSize}
                color="black"
            />

            <FaCss3Alt
                className="mr-2"
                size={logoSize}
                color="#2965f1"
             />
             
            <FaNodeJs 
            className="mr-2"
            size={logoSize}
            color="#68A063"
            />


            
        </>
    )
}


