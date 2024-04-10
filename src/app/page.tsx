import AboutMe from "./components/about_me";
import NavBar from "./components/nav";
import MyProjects from "./components/projects";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <AboutMe></AboutMe>
      <h1 className="text-center font-bold text-3xl mt-[10vh]">Projects</h1>
      <MyProjects />
    </>
  );
}
