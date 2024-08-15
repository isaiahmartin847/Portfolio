import CurrentlyTechStack from "./currently_stack"




const CurrentlyWorkingOnSection = () => {
    return (
        <div className="">
          <h1 className="text-center font-bold text-3xl mt-[10vh]">Currently working on</h1>

          <div className="flex flex-wrap border-2 border-black mt-16 rounded md:ml-[10vw] md:mr-[10vw] md:flex-none md:flex-nowrap">
                <CurrentlyTechStack />
          </div>
        </div>
    )
}





export default CurrentlyWorkingOnSection