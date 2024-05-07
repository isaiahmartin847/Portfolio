import NavBar from "@/app/components/nav"
import Image from "next/image"


const QRCodeProject = () => {
    return ( 
        <>
            <NavBar 
            btn1Text="Home"
            btn1Url="/"
            btn2Text="Projects"
            btn2Url="/"
            />
            <div className="border-2 border-black mt-12 flex">
                <div className=" w-fit border-r-2 border-black">
                    <Image 
                    src="/photos/qr-code.png"
                    width={800}
                    height={800}
                    />
                </div>
                <div className="w-[60%] border-red-500 border-2">
                    <div className="flex justify-center items-center font-bold text-xl mt-2">
                        <h1>QR Code Generator</h1>
                    </div>            

                </div>

            </div>
        </>
    )
}


export default QRCodeProject