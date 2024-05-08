"use client"
// import React, { FunctionComponent } from 'react'
import Link from 'next/link';
import ProjectNav from './project-nav';
import { useState } from 'react';

type Props = {
    btn1Text: string
    btn1Url: string
    btn2Text: string
    btn2Url: string
}



const NavBar: React.FC<Props> = ({btn1Text, btn1Url, btn2Text, btn2Url}) => {
    const [visible, setVisible] = useState<boolean>(false)




    return (
        <div className="bg-blue-500 flex justify-between text-white min-h-14 w-full">
            <div className="ml-6 content-center w-1/3 text-xl font-bold">
                <h1>Isaiahmartin.dev</h1>
            </div>
            <div className="flex justify-end mr-6 w-1/3 ">  
                <Link href={btn1Url} className='bg-blue-600 p-2 m-2 rounded hover:bg-blue-300 navButtons'>
                    <h1>{btn1Text}</h1>
                </Link>
                <button className='bg-blue-600 p-2 m-2 rounded hover:bg-blue-300 navButtons' onClick={() => {
                    setVisible(!visible)
                }}>
                    <h1>Projects</h1>
                </button>
                <Link href='https://github.com/isaiahmartin847?tab=overview&from=2024-04-01&to=2024-04-24' target='_blank' className='bg-blue-600 p-2 m-2 rounded hover:bg-blue-300 navButtons'>
                    <h1>Github</h1>
                </Link>
            </div>
            
            <ProjectNav 
            setVisible={setVisible}
            visible={visible}
            />
        </div>
    );
}








export default NavBar