import GithubLastUpdate from "../github_last_update";
import Link from "next/link";



const QrCodeDescription = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <Link href="/project/QRcodeGenorator"><h1 className="font-bold text-xl text-center">QR Code Generator</h1></Link>
            <p className="text-center w-fit px-[10%] mt-4">My QR code generator project is a testament to the basics. It&apos;s important to me to peel off all the modern frameworks and build websites with three tried and true technologies to fully understand what&apos;s under the hood of all these frameworks. These days, I feel like everyone is chasing the newest framework and the next big thing. While this is a good thing for the industry, there are a lot of people out there who don’t understand the basics and the underlying principles that all the frameworks are built upon.</p>
            <div className="mx-2 w-fit px-12 font-bold text-center bg-[#555C61] rounded text-white text-md border-2 border-black mt-7">
                <GithubLastUpdate 
                repo="QRCodeGenerator"
                delay={2000}
                />
            </div>
        </div>
    )
}



export default QrCodeDescription;