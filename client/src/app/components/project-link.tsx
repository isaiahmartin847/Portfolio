import Link from "next/link"

type Props = {
    url: string
    title: string 
}




const ProjectLink: React.FC<Props> = ({url, title}) => {
    return (
        <div className="flex justify-center">
            <Link 
            href={url}
            >
                <div className='border-black border-2 p-4 mt-4 rounded-lg w-[250px] md:w-[500px] hover:bg-blue-400'>
                        <h1 className='text-black text-center font-semibold'>{title}</h1>
                </div>
            </Link>
        </div>
    )
}



export default ProjectLink