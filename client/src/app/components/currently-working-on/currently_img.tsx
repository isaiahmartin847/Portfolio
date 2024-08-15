import Image from "next/image"

const CurrentlyImg = () => {
    return (
        <div className="flex items-center justify-center mt-2 md:m-2">
            <div className="w-fit border-black border-2 flex items-center justify-center m-2 md:m-0 rounded">
                <Image 
                src="/photos/dark_mounts.png"
                width={900}
                height={400}
                alt="Image of project"
                priority={true}
                className=""
                />
            </div>
        </div>        
    )
}

export default CurrentlyImg