interface Props{
    img: string;
}


const ProjectImg: React.FC<Props> = ({ img }) => {
    return (
        <div className="w-1/4">
            <img className="p-3 w-[300px] rounded-[30px]" src={img}/>
        </div>
    )
}




export default ProjectImg