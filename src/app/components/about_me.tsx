import React from 'react'




export default function AboutMe () {
    return (
        <>
            <div>
                {/* photo div */}
                <div className='absolute mt-7 ml-[15vw] z-10'>
                    <img className="img"src='/headshot.png' alt='profile img' />
                </div>
                {/* about card */}
                <div className='aboutmetext border-2 absolute border-slate-600 rounded-lg'>                    
                    <h1 className='text-5xl p-4 ml-6'>Isaiah Martin | Frontend Engineer</h1>
                    <div className=' w-fit ml-28 pr-10 mt-10'>
                        <p className='text-xl'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius pariatur in numquam atque animi minima temporibus quas voluptas inventore reprehenderit esse asperiores consectetur, voluptatibus ut, quod quia beatae deleniti molestiae similique obcaecati nisi! Suscipit impedit beatae aut. Deleniti, incidunt rerum! Quidem rem voluptate, atque illum laudantium animi doloribus quibusdam placeat fuga alias. Voluptate dolore perferendis suscipit quod voluptatibus recusandae explicabo eum id ullam iste omnis ut distinctio eligendi neque magnam doloremque rerum, quo itaque nulla nisi inventore. Odit adipisci doloremque incidunt ipsa tempore, id soluta voluptas. Nam qui possimus facilis magnam saepe provident rerum quisquam excepturi, quos laboriosam temporibus debitis.</p>
                    </div>  
                    
                </div>
            </div>
        </>
    )
}