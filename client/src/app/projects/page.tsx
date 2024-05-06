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
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia nisl eu odio faucibus, quis posuere risus tristique. Quisque nec lobortis odio. Morbi pretium, nulla vitae ultricies scelerisque, ipsum lorem porta metus, vel vestibulum est velit a orci. Sed eu dui euismod, rhoncus odio vel, posuere ligula. Cras et velit at nunc ullamcorper fermentum. Fusce nec tellus arcu. Sed vitae metus lectus. Nullam aliquam aliquet ex sit amet scelerisque. Duis sed elit eget metus ultricies scelerisque. Integer efficitur nisi eu libero rhoncus."
            />
            
            
        </div>
    )
}