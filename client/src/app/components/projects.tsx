// import { Margarine } from "next/font/google";

import FarmImg from "./farm-project/farm-img";
import FarmTechStack from "./farm-project/farm-stack";
import FarmTitleAndDescription from "./farm-project/farm-title";


export default function MyProjects () {
    
    return (
        <div className="flex border-2 border-black ml-[10vw] mr-[10vw] mt-16 rounded">
                <FarmImg />
                <FarmTitleAndDescription />
                <FarmTechStack />
            
        </div>
    )
}