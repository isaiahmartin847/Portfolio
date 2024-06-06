import { FaHtml5,  FaCss3Alt, FaGithub } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

// import { SiNextdotjs, SiTailwindcss, SiNodedotjs } from "react-icons/si";



const QRCodeTechStack = () => {
    return (
        <div className="md:w-1/4">
        <h1 className="text-center text-lg font-bold">tech stack</h1>
        
        <div className="ml-4 mr-4 justify-between flex flex-wrap md:flex-nowrap md:flex-col">
            <div className="flex text-xl"><RiJavascriptFill color='#F0DB4F' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/>Java Script</div>
            <div className="flex test-xl"><FaHtml5 color="#F06529" style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/>HTML</div>
            <div className="flex text-xl"><FaCss3Alt color='#087ea4' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> CSS</div>
            <div className="flex text-xl"><FaGithub color='#000000' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> GitHub</div>

        </div>
    </div>  
    )
}


export default QRCodeTechStack;


