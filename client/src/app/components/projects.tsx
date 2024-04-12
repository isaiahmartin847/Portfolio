import AboutProject from "./project-description"

export default function MyProjects () {
    const input: string = "loerm alskdjfalksdjf ;klajdshf hwae kjfhawoidf akwj fhqe 9fsadhf kajwehrf uhqf"

    return (
        <div className="flex border-4 ml-[10vw] mr-[10vw] mt-16">
            <div className="w-1/4">
                <img className="p-3 w-[300px] rounded-[30px]" src="https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </div>
            <AboutProject title="hello" description={input}/> 
            <div className="w-1/4">
                <h1 className="text-center text-lg font-bold">tech stack</h1>
                <ul className="list-disc mt-4">
                    <li className="ml-7">React.js</li>
                    <li className="ml-7">Java script</li>
                    <li className="ml-7">Next.js</li>
                    <li className="ml-7">Express</li>
                    <li className="ml-7">Tailwind</li>
                    <li className="ml-7">Docker</li>
                    
                </ul>
            </div>
            
        </div>
    )
}