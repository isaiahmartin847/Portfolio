import CurrentlyImg from "./currently_img"
import CurrentlyTechStack from "./currently_stack"
import CurrentlyWorkingOnTitle from "./currently_title"




const CurrentlyWorkingOnSection = () => {
    return (
        <div className="">
          <h1 className="text-center font-bold text-3xl mt-[10vh]">Current Project</h1>

          <div className="flex border-2 flex-col border-black mt-16 rounded mx-1 md:mx-[10vw] ">
                <CurrentlyWorkingOnTitle />
                <CurrentlyImg />
                <CurrentlyTechStack />
          </div>
        </div>
    )
}





export default CurrentlyWorkingOnSection