import { FaHtml5,  FaCss3Alt, FaGithub } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

// import { SiNextdotjs, SiTailwindcss, SiNodedotjs } from "react-icons/si";



const QRCodeTechStack = () => {
    return (
            <div className="w-1/4">
                <h1 className="text-center text-lg font-bold">tech stack</h1>
                <ul className="ml-4">
                    <li><div className="flex text-xl"><RiJavascriptFill color='#F0DB4F' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/>Java Script</div></li>
                    <li><div className="flex test-xl"><FaHtml5 color="#F06529" style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/>HTML</div></li>
                    <li><div className="flex text-xl"><FaCss3Alt color='#087ea4' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> CSS</div></li>
                    <li><div className="flex text-xl"><FaGithub color='#000000' style={{marginTop: 5, marginLeft: 2, marginRight: 2}}/> GitHub</div></li>
                </ul>
            </div>
    )
}


export default QRCodeTechStack;


