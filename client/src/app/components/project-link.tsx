import Link from "next/link"

type Props = {
    url: string
    title: string 
}




const ProjectLink: React.FC<Props> = ({url, title}) => {
    return (
        <Link 
        href={url}
        >
            <div className='border-black border-2 w-[500px] p-4 rounded-lg hover:bg-blue-300 mt-4'>
                    <h1 className='text-black text-center'>{title}</h1>
            </div>
        </Link>
    )
}



export default ProjectLink