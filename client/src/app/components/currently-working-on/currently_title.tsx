import Link from "next/link"

const CurrentlyWorkingOnTitle = () => {
    return (
        <div className="w-fit relative flex flex-col justify-center text-center items-center">
            <Link href="https://www.darkmounts.shop/" target="_blank" className="font-bold text-xl text-center mt-1">Dark Mounts</Link>
            <p className="w-4/5 ">I&apos;m currently developing an e-commerce app for Dark Mounts, a company specializing in modern European mounting systems. For the front end, I chose Next.js and React, with React Query for managing data fetching and caching. FastAPI will power the backend, selected for its rapid development capabilities and built-in Swagger support. I am using MySQL as the database, which is well-suited for managing users, products, orders, and the cart in an e-commerce environment. The backend will be containerized with Docker and deployed to AWS, while Vercel will streamline the deployment of the front end.</p>
            
            <div className="flex justify-center">
                <div className="border-b-2 border-black h-1 w-4/5 flex justify-center"></div>
            </div>
        </div>
    )
}



export default CurrentlyWorkingOnTitle;