// import { Margarine } from "next/font/google";
"use client"

import useWindowWidth from "../hooks/useWidth";
import FarmImg from "./farm-project/farm-img";
import FarmTechStack from "./farm-project/farm-stack";
import FarmTitleAndDescription from "./farm-project/farm-title";
import PersonalProjectImg from "./personal-project/personal-img";
import PersonalTechStack from "./personal-project/personal-stack";
import PersonalTitleAndDescription from "./personal-project/personal-title";
import QrcodeProjectImg from "./qrcode-project/qr-img";
import QRCodeTechStack from "./qrcode-project/qr-stack";
import QrCodeDescription from "./qrcode-project/qr-title";


export default function MyProjects () {

    const windowWidth: number = useWindowWidth()

  
  


    if(windowWidth > 750){
        return (
            <>
    
                <div className="flex flex-wrap border-2 border-black mt-16 rounded md:ml-[10vw] md:mr-[10vw] md:flex-none md:flex-nowrap">
                    <FarmImg />
                    <FarmTitleAndDescription />
                    <FarmTechStack />
                </div>
    
    
                <div className="flex border-2 border-black ml-[10vw] mr-[10vw] mt-16 rounded">
                    <PersonalProjectImg />
                    <PersonalTitleAndDescription />
                    <PersonalTechStack />
                </div>
    
                <div className="flex border-2 border-black ml-[10vw] mr-[10vw] mt-16 rounded">
                    <QrcodeProjectImg />
                    <QrCodeDescription />
                    <QRCodeTechStack />
                </div>
    
            </>
        )
    } else {
        return (
            <>
                <div className="ml-2 mr-2 flex flex-col border-2 border-black mt-16 rounded md:ml-[10vw] md:mr-[10vw] md:flex-none md:flex-row">
                    <FarmTitleAndDescription />
                    <FarmImg />
                    <FarmTechStack />
                </div>
    
    
                <div className="ml-2 mr-2 flex flex-col border-2 border-black mt-16 rounded md:ml-[10vw] md:mr-[10vw] md:flex-none md:flex-row">
                    <PersonalTitleAndDescription />
                    <PersonalProjectImg />
                    <PersonalTechStack />
                </div>
    
                <div className="ml-2 mr-2 flex flex-col border-2 border-black mt-16 rounded md:ml-[10vw] md:mr-[10vw] md:flex-none md:flex-row">
                    <QrCodeDescription />
                    <QrcodeProjectImg />
                    <QRCodeTechStack />
                </div>
    
            </>
        )
    }

}