
interface MyProps {
    title: string;
    description: string;
}


 
const AboutProject: React.FC<MyProps> = ({ title, description}) => {

    return (
        <div  className="w-[100%] text-center">
            <h1 className="font-bold text-xl text-center">{title}</h1>
            <p className="w-3/4 pl-[20%] ml-3 mt-4">{description}</p>
        </div>
    )
}



export default AboutProject