"use client"
// import React, { FunctionComponent } from 'react'
import Link from 'next/link';
import ProjectNav from './project-nav';
import { useState } from 'react';

type Props = {
    btn1Text: string
    btn1Url: string
}



const NavBar: React.FC<Props> = ({btn1Text, btn1Url}) => {
    const [visible, setVisible] = useState<boolean>(false)




    return (
        <div className="bg-blue-500 flex justify-between text-white  w-full">
            <div className=" ml-6 w-fit text-xl font-bold">
                <h1 className='mt-3'>Isaiahmartin.dev</h1>
            </div>
            <div className="flex justify-end mr-6 w-fit">  
                <Link href={btn1Url} className='bg-blue-600 p-2 m-2 rounded hover:bg-blue-400 navButtons'>
                    <h1>{btn1Text}</h1>
                </Link>
                <button className='bg-blue-600 p-2 m-2 rounded hover:bg-blue-400 navButtons' onClick={() => {
                    setVisible(!visible)
                }}>
                    <h1>Projects</h1>
                </button>
                <Link href='https://github.com/isaiahmartin847?tab=overview&from=2024-04-01&to=2024-04-24' target='_blank' className='bg-blue-600 p-2 m-2 rounded hover:bg-blue-400 navButtons'>
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