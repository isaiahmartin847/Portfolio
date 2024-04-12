

export default function NavBar() {
    return (
        <div className="bg-blue-500 flex justify-between text-white min-h-14 w-[100vw]">
            <div className="ml-6 content-center w-1/3 text-xl font-bold">
                <h1>Isaiahmartin.dev</h1>
            </div>
            <div className="flex justify-end mr-6 w-1/3 ">  
                <button className="bg-blue-600 p-2 m-2 rounded hover:bg-blue-300 navButtons">About Me</button>
                <button className="bg-blue-600 p-2 m-2 rounded hover:bg-blue-300 navButtons">Projects</button>
                <button className="bg-blue-600 p-2 m-2 rounded hover:bg-blue-300 navButtons">Reach out</button>
            </div>
        </div>
    );
}