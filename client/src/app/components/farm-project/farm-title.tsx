import Link from "next/link";
import GithubLastUpdate from "../github_last_update";



const FarmTitleAndDescription = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <Link href="/project/farm-website"><h1 className="font-bold text-xl text-center">Farm Website</h1></Link>
            <p className="text-center w-fit pr-[10%] pl-[10%] mt-4">The Covenant Gardens Farm website was created to offer shoppers an alternative way to select products without relying on physical pamphlets, saving the farm hundreds of dollars on printing and folding costs. I began by developing the front end of the application using the latest frontend technologies, including React, Next.js, JavaScript, Tailwind, and CSS. Once the front end was completed, I proceeded to implement the backend using Node.js and Express for the REST API. After finalizing the routing, I integrated it with a relational database called MySQL to manage products, users, and users cart. Additionally, I utilized version control using GitHub to maintain high code standards and for project management purposes.</p>
            <div className="mx-2 w-fit px-12 font-bold text-center bg-[#555C61] rounded text-white text-md border-2 border-black mt-7">
                <GithubLastUpdate 
                repo="farm-web"
                />
            </div>
        </div>
    )
}



export default FarmTitleAndDescription;