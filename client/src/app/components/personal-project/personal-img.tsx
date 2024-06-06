import Image from "next/image"

const PersonalProjectImg = () => {
    return (
        <div className="flex items-center justify-center mt-2 md:m-2">
            <div className="w-fit border-black border-2 flex items-center justify-center m-2 md:m-0">
                <Image 
                src="/photos/personal.png"
                width={700}
                height={100}
                alt="Image of project"
                priority={true}
                />
            </div>
        </div>        
    )
}

export default PersonalProjectImg