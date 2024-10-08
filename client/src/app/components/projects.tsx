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


        return (
            <>
                <div className="flex flex-col border-2 border-black mx-1  md:mx-[10vw] mt-16 rounded">
                    <FarmTitleAndDescription />
                    <FarmImg />
                    <FarmTechStack />
                </div>
    
    
                <div className="flex flex-col border-2 border-black mx-1  md:mx-[10vw] mt-16 rounded">
                    <PersonalTitleAndDescription />
                    <PersonalProjectImg />
                    <PersonalTechStack />
                </div>
    
                <div className="flex flex-col border-2 border-black mx-1  md:mx-[10vw] mt-16 rounded">
                    <QrCodeDescription />
                    <QrcodeProjectImg />
                    <QRCodeTechStack />
                </div>
    
            </>
        )


}