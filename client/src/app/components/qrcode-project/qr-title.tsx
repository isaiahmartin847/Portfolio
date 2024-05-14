import GithubLastUpdate from "../github_last_update";



const QrCodeDescription = () => {
    return (
        <div className="w-fit relative">
            <h1 className="font-bold text-xl text-center">QR Code Genorator</h1>
            <p className="text-center w-fit pr-[10%] pl-[10%] mt-4">My QR code generator project is a testament to the basics. It's important to me to peel off all the modern frameworks and build websites with three tried and true technologies to fully understand what's under the hood of all these frameworks. These days, I feel like everyone is chasing the newest framework and the next big thing. While this is a good thing for the industry, there are a lot of people out there who don’t understand the basics and the underlying principles that all the frameworks are built upon.</p>
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