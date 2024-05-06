import NavBar from "../components/nav";
import ProjectProp from "./components/project-componets";

export default function () {
    return (
        <div>
            <NavBar
            btn1Text="Home"
            btn1Url="/"
            btn2Text="Resume"
            btn2Url="/resume"
            />

            <ProjectProp 
            github="farm-web"
            title="Best Project"
            photoPath="/photos/farmweb.png"
            skills={['JavaScript', 'HTML', 'CSS',]}
            />
            
            
        </div>
    )
}