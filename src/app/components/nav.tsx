

export default function NavBar() {
    return (
        <div className="bg-blue-500 flex justify-between text-white min-h-14">
            <div className="ml-6 content-center">
                <h1>Isaiahmartin.dev</h1>
            </div>
            <h1 className="content-center">Welcome</h1>
            <div className="content-center mr-6">  
                <button>button1</button>
                <button>button2</button>
                <button>button3</button>
                <button>button4</button>
            </div>
        </div>
    );
}