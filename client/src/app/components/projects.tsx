// import { Margarine } from "next/font/google";

import FarmImg from "./farm-project/farm-img";
import FarmTechStack from "./farm-project/farm-stack";
import FarmTitleAndDescription from "./farm-project/farm-title";
import PersonalProjectImg from "./personal-project/personal-img";
import PersonalTitleAndDescription from "./personal-project/personal-title";


export default function MyProjects () {
    
    return (
        <>
            <div className="flex border-2 border-black ml-[10vw] mr-[10vw] mt-16 rounded">
                    <FarmImg />
                    <FarmTitleAndDescription />
                    <FarmTechStack />
            </div>

            <div className="flex border-2 border-black ml-[10vw] mr-[10vw] mt-16 rounded">
                <PersonalProjectImg />
                <PersonalTitleAndDescription />
                <FarmTechStack />

            </div>
        </>
    )
}