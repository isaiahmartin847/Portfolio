// import { Margarine } from "next/font/google";

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
            <div className="flex border-2 border-black ml-[10vw] mr-[10vw] mt-16 rounded">
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
}