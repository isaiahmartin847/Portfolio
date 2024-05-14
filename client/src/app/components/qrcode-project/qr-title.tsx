import GithubLastUpdate from "../github_last_update";



const QrCodeDescription = () => {
    return (
        <div className="w-fit relative">
            <h1 className="font-bold text-xl text-center">QR Code Genorator</h1>
            <p className="text-center w-fit pr-[10%] pl-[10%] mt-4">My QR code generator project is a testament to basic skills. Its important to me to peeling off all the  modern frameworks and building websites with the bear minimum of technology to fully understand underneath the hood of all these frameworks. These days i feel like everyone is chasing the new framework and the next big one while this is a good thing for the industry there are a lot of people out there who don’t understand the basics the things that all the frameworks are using under the hood. </p>
            <div className="font-bold text-center bg-[#555C61] rounded absolute inset-x-0 bottom-4 text-white text-md border-2 border-black">
                <GithubLastUpdate 
                repo="QRCodeGenerator"
                delay={2000}
                />
            </div>
        </div>
    )
}



export default QrCodeDescription;