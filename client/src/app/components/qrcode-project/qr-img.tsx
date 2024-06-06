import Image from "next/image"

const QrcodeProjectImg = () => {
    return (

        <div className="flex items-center justify-center mt-2 md:m-2">
            <div className="w-fit border-black border-2 flex items-center justify-center m-2 md:m-0">
                <Image 
                src="/photos/qr-code.png"
                width={850}
                height={100}
                alt="Image of project"
                priority={true}
                />
            </div>
        </div>
        
    )
}

export default QrcodeProjectImg