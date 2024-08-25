import Image from "next/image";


const FarmImg = () => {
    return (
        <div className="flex items-center justify-center mt-2 md:m-2 space-x-0 space-y-3 md:space-y-0 md:space-x-4 flex-wrap">
            <div className="w-fit border-black border-2 flex items-center justify-center">
                <Image 
                src="/photos/farmweb.png"
                width={300}
                height={300}
                alt="Image of project"
                priority={true}
                />
                
            </div>
            <div className="w-fit border-black border-2 flex items-center justify-center">
                <Image 
                src="/photos/farm-web2.png"
                width={300}
                height={300}
                alt="Image of project"
                priority={true}
                />
                
            </div>
        </div>
    )
}


export default FarmImg;