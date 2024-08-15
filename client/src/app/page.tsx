import AboutMe from "./components/about_me";
import NavBar from "./components/nav";
import MyProjects from "./components/projects";
import WorkExperience from "./components/work_exp";
import CurrentlyWorkingOnSection from "./components/currently-working-on/currently_working_on_section";


export default function Home() {

  return (
    <>
      {/* <ConstantMovementBar /> */}
      <NavBar
      btn1Text="Resume"
      btn1Url="/resume"
      />
      <AboutMe></AboutMe>
      <CurrentlyWorkingOnSection />
      <h1 className="text-center font-bold text-3xl mt-[10vh]">Projects</h1>
      <MyProjects />
      <h1 className="text-center font-bold text-3xl mt-[10vh]">Work Experience</h1>
      <WorkExperience />
    </>
  );
}
