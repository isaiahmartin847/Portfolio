
import AnimatedLogos from "./animated_logos";



export default function WorkExperience () {


    return (
        <div className="flex-col border-t-2 border-b-2 border-black mt-16 text-center pt-[2%]">
            <div className="font-bold text-2xl p-1">
                <h1>Full Stack Engineer</h1>
            </div>
            <div className="pl-[10%] pr-[10%]">
                <p>In my current role, I lead the development of modern web applications, utilizing React.js, Next.js, TypeScript, and TailwindCSS for frontend and Node.js with Express for backend. I design responsive UIs and build robust backend services and RESTful APIs with MySQL integration for efficient data handling. I prioritize clear communication and maintain strong client relationships, ensuring their requirements are met and feedback is incorporated effectively. Through regular updates and feedback sessions, I keep clients informed about project progress and address concerns promptly, fostering trust and confidence in our partnership. This collaborative approach enables us to deliver projects exceeding client expectations, enhancing satisfaction and strengthening business relationships.</p>
            </div>
            <div className=" mt-8">
                <h1 className="text-blue-400 font-bold ">Technology Used </h1>
                <div className="border-t-2 border-b-2 border-blue-300 h-14 mb-10">
                    {/* <ConstantMovementBar /> */}
                    <AnimatedLogos />
                </div>
            </div>
        </div>
    );
}