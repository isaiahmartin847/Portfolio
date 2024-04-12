
interface Props{
    skills: Array<string>;

}



const ProjectSkills: React.FC<Props> = ({skills}) => {
    return (
        <div className="w-1/4">
            <h1 className="text-center text-lg font-bold">tech stack</h1>
            <ul className="list-disc mt-4">
                {skills.map((item: string) => {
                    return (
                        <li className="ml-7">{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}



export default ProjectSkills