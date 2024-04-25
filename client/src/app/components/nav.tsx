
import React, { FunctionComponent } from 'react'
import Link from 'next/link';

type Props = {
    btn1Text: string
    btn1Url: string
    btn2Text: string
    btn2Url: string
    btn3Text: string
    btn3Url: string 
}



const NavBar: React.FC<Props> = ({btn1Text, btn1Url, btn2Text, btn2Url, btn3Text, btn3Url}) => {

    return (
        <div className="bg-blue-500 flex justify-between text-white min-h-14 w-[100vw]">
            <div className="ml-6 content-center w-1/3 text-xl font-bold">
                <h1>Isaiahmartin.dev</h1>
            </div>
            <div className="flex justify-end mr-6 w-1/3 ">  
                <Link href={btn1Url} className='bg-blue-600 p-2 m-2 rounded hover:bg-blue-300 navButtons'>
                    <h1>{btn1Text}</h1>
                </Link>
                <Link href={btn2Url} className='bg-blue-600 p-2 m-2 rounded hover:bg-blue-300 navButtons'>
                    <h1>{btn2Text}</h1>
                </Link>
                <Link href={btn3Url} className='bg-blue-600 p-2 m-2 rounded hover:bg-blue-300 navButtons'>
                    <h1>{btn3Text}</h1>
                </Link>
            </div>
        </div>
    );
}


export default NavBar