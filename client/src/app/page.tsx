import AboutMe from "./components/about_me";
import GithubLastUpdate from "./components/github_last_update";
import NavBar from "./components/nav";
import MyProjects from "./components/projects";
import Work_exp from "./components/work_exp";

export default function Home() {

  return (
    <>
      <NavBar></NavBar>
      <AboutMe></AboutMe>
      <h1 className="text-center font-bold text-3xl mt-[10vh]">Projects</h1>
      <MyProjects />
      <h1 className="text-center font-bold text-3xl mt-[10vh]">Work Experience</h1>
      <Work_exp />
    </>
  );
}
