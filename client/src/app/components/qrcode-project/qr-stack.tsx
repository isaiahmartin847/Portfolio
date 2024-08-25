import { FaHtml5,  FaCss3Alt, FaGithub } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

// import { SiNextdotjs, SiTailwindcss, SiNodedotjs } from "react-icons/si";



const QRCodeTechStack = () => {
    return (
        <div className="flex flex-col justify-start items-center">
        <h1 className="text-center text-lg font-bold">tech stack</h1>
        
        <div className="justify-center space-x-4 flex flex-wrap w-4/5">
            <div className="flex text-xl"><RiJavascriptFill color='#F0DB4F' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/>Java Script</div>
            <div className="flex test-xl"><FaHtml5 color="#F06529" style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/>HTML</div>
            <div className="flex text-xl"><FaCss3Alt color='#087ea4' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> CSS</div>
            <div className="flex text-xl"><FaGithub color='#000000' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> GitHub</div>

        </div>
    </div>  
    )
}


export default QRCodeTechStack;


