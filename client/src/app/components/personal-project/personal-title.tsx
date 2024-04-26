import GithubLastUpdate from "../github_last_update";



const PersonalTitleAndDescription = () => {
    return (
        <div className="w-fit relative">
            <h1 className="font-bold text-xl text-center">Personal Website</h1>
            <p className="text-center w-fit pr-[10%] pl-[10%] mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias mollitia sed non impedit eius autem quo rem corrupti nobis earum, ea, officia nostrum nemo quis necessitatibus asperiores qui ex eveniet labore aspernatur laboriosam quae. Porro vel unde expedita optio qui doloremque quo ipsam blanditiis, est nostrum. Velit laborum magni distinctio ad illum. Dolores, laborum. Iure quasi ratione, nulla quis sed rem, ducimus nobis deleniti dolorum, exercitationem voluptates harum? Eius, optio.</p>
            <div className="font-bold text-center bg-[#555C61] rounded absolute inset-x-0 bottom-4 text-white text-md border-2 border-black">
                <GithubLastUpdate
                repo="personal_web"
                />
            </div>
        </div>
    )
}



export default PersonalTitleAndDescription;