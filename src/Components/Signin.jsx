import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const nav = useNavigate()
    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [hidePassword, sethidePassword] = useState(true);

    function show() {
        setShowPassword(true);
        sethidePassword(false)
    }

    return (
        <>
            <div className=' w-[60vw] sm:w-[45vw] md:w-[30vw] bg-white rounded-lg mx-auto  py-10 px-12 my-6 flex flex-col justify-center '>
                <div className=''>  
                    <h1 className='text-4xl'>Sign in</h1>
                    <p className='text-sm mt-1'>Stay updated on your professional world</p>
                    <h1 className='mt-4'>Email</h1>
                    <input type="text" className='rounded-sm mt-1 px-2 py-1 cursor-pointer hover:bg-gray-200 w-full border-black border' placeholder='Email' />
                    <h1 className='mt-8'>Password</h1>
                    <div style={{ position: 'relative' }}>
                        <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className='rounded-sm mt-1 px-2 py-1 cursor-pointer hover:bg-gray-200 w-full border-black border' />
                        {showPassword ? (
                            <i className="fa-solid fa-eye-slash absolute right-[4%] top-[50%] transform -translate-y-1/2 cursor-pointer" onClick={show}></i>
                        ) : (
                            <i className="fa-solid fa-eye absolute right-[4%] top-[50%] transform -translate-y-1/2 cursor-pointer" onClick={show}></i>
                        )}
                    </div>
                    <button className='mt-2 text-blue-700 py-2 px-2 hover:bg-blue-100 hover:underline font-bold rounded-full'>Forgot Password?</button>

                    <button className='mt-4 bg-blue-700 hover:bg-blue-900 sm:font-medium font-normal  text-white sm:py-2 sm:px-4 py-1 rounded-full w-full'>Sign in</button>
                    <p className='mt-4 text-md text-center '>New to LinkedIn?<a href='#' className='text-blue-700 font-medium hover:underline hover:bg-blue-100 px-2 py-2 rounded-full'>Join Now</a></p>
                </div>
            </div>
        </>
    )
}
