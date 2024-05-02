import GithubLastUpdate from "@/app/components/github_last_update"
import Image from "next/image"


type Props = {
    title: string 
    github: string 
    // text: string
}




const ProjectProp = ({title, github}: Props) => {
    return (
        <div className="flex mt-4 border-2 border-red-900">
            <div className="border-blue-400 border-2">
                <Image 
                src="/photos/farmweb.png"
                // layout="responsive"
                width={228}
                height={228}
                alt="project photo"
                className="border-2 border-black"
                />
            </div>
            <div>
                <div className="ml-5 mt-2 font-bold">
                    <h1>{title}</h1>
                </div>
                <div className="w-3/4 ml-10">
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veniam, itaque quasi dolor esse harum, provident in accusantium doloremque cumque sunt tempore earum labore iusto! Aperiam incidunt nobis neque debitis.</p>
                    {/* <p>{text}</p> */}
                </div>    
                <div>
                    <GithubLastUpdate 
                    repo={github}
                    />

                </div>
            </div>
        </div>
    )
}


export default ProjectProp