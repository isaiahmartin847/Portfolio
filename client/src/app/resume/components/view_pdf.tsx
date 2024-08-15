
// import resume1 from "./public/photos/resume1.png"
import Image from "next/image"

const ShowPdf = () => {


    return (
      <div className="flex justify-center pt-2">
        {/* <img className="border-black border-[1px] mt-4" src="/photos/resume-img.png"/> */}
        <Image
        src="/photos/resume.png"
        height={700}
        width={700}
        alt="resume"
        priority
        className="border-black border-2"
        />
      </div>
    )
}   





export default ShowPdf