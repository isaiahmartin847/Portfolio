import React from 'react'




export default function AboutMe () {
    return (
        <>
            <div>
                {/* photo div */}
                <div className='absolute mt-7 ml-36 z-10'>
                    <img className="img"src='/headshot.png' alt='profile img' />
                </div>
                {/* about card */}
                <div className='aboutmetext border-2 absolute border-slate-600 rounded-lg'>                    
                    <h1 className='text-5xl p-4 ml-6'>Isaiah Martin | Frontend Engineer</h1>
                    
                </div>
            </div>
        </>
    )
}