import NavBar from "@/app/components/nav"
import Image from "next/image"
import { FaCss3Alt, FaHtml5 } from "react-icons/fa"
import { RiJavascriptFill } from "react-icons/ri"


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
                        alt={"image of project"}
                        />
                </div>
                <div className="w-[60%]">
                    <div className="flex justify-center items-center font-bold text-xl mt-2">
                        <h1>QR Code Generator</h1>
                    </div> 
                    <div className="ml-[15%] mr-[15%] mt-4">
                        <h1 className="font-bold text-lg border-b-2 border-black border-w-2">About</h1>
                        <p className="ml-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consequuntur aperiam, ullam harum sint repellendus
                            rerum deserunt neque magnam qui provident exercitationem iste perspiciatis esse nobis natus ut quaerat molestias
                            mollitia placeat. Molestias quo eius labore magni placeat ipsam, tempora consequatur. Libero aliquid animi minus
                            illo, eveniet soluta vel facere debitis vero? Quaerat quia nisi delectus, omnis ipsam dolore eaque consequuntur
                        </p>
                    </div>
                    <div>
                        <h1 className="text-[20px] text-center mt-3 mb-2 font-mono">Skills</h1>
                        <div className="ml-[30%] mr-[30%] border-t-2 border-b-2 border-blue-300 flex flex-row items-center justify-center h-20">
                            {/* skills */}
                            <Skills />
                        </div>
                    </div>     

                </div>

            </div>
        </>
    )
}


const Skills = () => {

    const iconSize:number = 50
    return (
        <div className="flex">

            <div className="ml-4 flex flex-col items-center">
                
                <RiJavascriptFill 
                size={iconSize}
                color="#F0DB4F"
                />

                <h4>JavaScript</h4>
            </div>

            <div className="ml-4 flex flex-col items-center">
                <FaHtml5 
                size={iconSize}
                color="#E34C26"
                />
                <h4>HTML</h4>
            </div>

            <div className="ml-4 flex flex-col items-center">
                <FaCss3Alt 
                size={iconSize}
                color="#2565AE"

                />
                <h4>CSS</h4>
            </div>

        </div>
    )
}

export default QRCodeProject