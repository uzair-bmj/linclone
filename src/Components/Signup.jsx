import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const nav = useNavigate();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [hidePassword, sethidePassword] = useState(true);

    function show() {
        setShowPassword(!showPassword);
        sethidePassword(!hidePassword)
    }

    return (
        <>
            <div className='flex-col justify-center items-center py-12'>
                <p className='lg:text-3xl md:text-xl text-center'>Make the most of your professional life</p>
                <div className='w-[60vw] sm:w-[45vw] md:w-[35vw] bg-white rounded-lg mx-auto py-10 px-12 my-6 flex flex-col justify-center'>
                    <h1>Email</h1>
                    <input type="text" className='rounded-sm mt-1 px-2 py-1 cursor-pointer hover:bg-gray-200 w-full border-black border' />
                    <h1 className='mt-8'>Password</h1>
                    <div style={{ position: 'relative' }}>
                        <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className='rounded-sm mt-1 px-2 py-1 cursor-pointer hover:bg-gray-200 w-full border-black border' />
                        {showPassword ? (
                            <i className="fa-solid fa-eye-slash absolute right-[4%] top-[50%] transform -translate-y-1/2 cursor-pointer" onClick={show}></i>
                        ) : (
                            <i className="fa-solid fa-eye absolute right-[4%] top-[50%] transform -translate-y-1/2 cursor-pointer" onClick={show}></i>
                        )}
                    </div>
                    <p className='text-xs mt-4'>By clicking Agree & Join or Continue, you agree to the LinkedIn <a href='#' className='text-blue-700 font-medium'>User Agreement, Privacy Policy,</a> and <a href='#' className='text-blue-700 font-medium'>Cookie Policy.</a></p>
                    <button className='mt-4 bg-blue-700 hover:bg-blue-900 sm:font-medium font-normal text-white sm:py-2 sm:px-4 py-1 rounded-full'>Agree and Join</button>
                    <p className='mt-4 text-md text-center'>Already on LinkedIn? <a href='#' className='text-blue-700 font-medium hover:underline'> Sign in </a></p>
                </div>
                <p className='text-sm text-center'>Looking to create a page for a business? <a href='#' className='text-blue-700 font-medium hover:underline'>Get help</a></p>
            </div>
        </>
    );
}
