import AboutProject from "./project-description"
import ProjectSkills from "./project-skills"

export default function MyProjects () {
    const input: string = "loerm alskdjfalksdjf ;klajdshf hwae kjfhawoidf akwj fhqe 9fsadhf kajwehrf uhqf"
    const skills: Array<string> = ["React.js", "Next.js", "Tailwind"]

    return (
        <div className="flex border-4 ml-[10vw] mr-[10vw] mt-16">
            <div className="w-1/4">
                <img className="p-3 w-[300px] rounded-[30px]" src="https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </div>
            <AboutProject title="hello" description={input}/> 
            <ProjectSkills skills={skills} />
            
        </div>
    )
}