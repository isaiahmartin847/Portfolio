import GithubLastUpdate from "../github_last_update";
import Link from "next/link";




const PersonalTitleAndDescription = () => {
    return (
        <div className="w-fit relative">
            <Link href="/project/personal"><h1 className="font-bold text-xl text-center">Personal Website</h1></Link>
            <p className="text-center w-fit pr-[10%] pl-[10%] mt-4">My portfolio project is one of my favorites. It&apos;s a website where I can show more personality and passion for coding. This website was created with cutting-edge front-end technology. I had a lot of fun with this project; for instance, I used GitHub&apos;s RESTful API to get the latest pushes on all my GitHub projects and utilized React Icons to display my skills in an intuitive way.</p>
            <div className="ml-2 mr-2 font-bold text-center bg-[#555C61] rounded text-white text-md border-2 border-black mt-7">
                <GithubLastUpdate
                repo="personal_web"
                delay={1000}
                />
            </div>
        </div>
    )
}



export default PersonalTitleAndDescription;