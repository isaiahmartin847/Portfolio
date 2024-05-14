import GithubLastUpdate from "../github_last_update";



const QrCodeDescription = () => {
    return (
        <div className="w-fit relative">
            <h1 className="font-bold text-xl text-center">QR Code Genorator</h1>
            <p className="text-center w-fit pr-[10%] pl-[10%] mt-4"> dolorem aliquid natus! Beatae, illo obcaecati? Doloribus sunt vero maxime, odio veritatis doloremque a voluptatem est consectetur voluptates, earum aperiam assumenda ut recusandae? Dolores nisi sit laudantium voluptates, veritatis harum cum atque optio quis? Optio tenetur omnis, ex nesciunt facilis nostrum nemo fuga itaque quod vero perferendis ut vel ipsa consequuntur inventore maiores aliquid error officiis deserunt impedit.</p>
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