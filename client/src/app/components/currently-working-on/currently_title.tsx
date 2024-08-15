import Link from "next/link";
import CountdownTimer from "./release_date";




const CurrentlyWorkingOnTitle = () => {
    return (
        <div className="w-fit relative">
            <h1 className="font-bold text-xl text-center mt-1">Dark Mounts</h1>
            <p className="text-center w-fit mt-10">I&apos;m currently developing an e-commerce app for Dark Mounts, a company specializing in modern European mounting systems. For the front end, I chose Next.js and React, with React Query for managing data fetching and caching. FastAPI will power the backend, selected for its rapid development capabilities and built-in Swagger support. I am using MySQL as the database, which is well-suited for managing users, products, orders, and the cart in an e-commerce environment. The backend will be containerized with Docker and deployed to AWS, while Vercel will streamline the deployment of the front end.</p>
            
            <div className="ml-2 mr-2 font-bold text-center bg-[#555C61] rounded text-white text-md border-2 border-black mt-7">
                <CountdownTimer />
            </div>
        </div>
    )
}



export default CurrentlyWorkingOnTitle;