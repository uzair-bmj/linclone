import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {

    const nav = useNavigate()
    return (
        <>
            <div className='bg-white h-[60px]  flex justify-between ps-12 py-2 w-[100vw]'>
                <div className='flex justify-evenly my-auto'>
                    <i class="fa-brands fa-linkedin " style={{ fontSize: "30px", color: "rgb(10, 102, 194)", cursor: "pointer" }}></i>
                    <input type="search" className='h-4 ms-3 bg-gray-200 rounded-lg p-4 cursor-pointer' placeholder='Search' />
                </div>
                <ul className='flex justify-around w-[60vw] text-center mx-12'>
                    <Link to="/">
                        <div className='cursor-pointer hover:border-b-2 hover:border-b-gray-900'>
                            <i class="fa-solid fa-house-chimney "></i>
                            <li className='text-xs cursor-pointer text-gray-400 hover:text-gray-950'> Home</li>
                        </div>
                    </Link>
                    <div className='cursor-pointer hover:border-b-2 hover:border-b-gray-900'>
                        <i class="fa-solid fa-globe"></i>
                        <li className='text-xs cursor-pointer text-gray-400 hover:text-gray-950'>My Network</li>
                    </div>
                    <div className='cursor-pointer hover:border-b-2 hover:border-b-gray-900'>
                        <i class="fa-solid fa-briefcase"></i>
                        <li className='text-xs cursor-pointer text-gray-400 hover:text-gray-950'>Jobs</li>
                    </div>
                    <div className='cursor-pointer hover:border-b-2 hover:border-b-gray-900'>
                        <i class="fa-solid fa-comment-dots"></i>
                        <li className='text-xs cursor-pointer text-gray-400 hover:text-gray-950'>Messanging</li>
                    </div>
                    <div className='cursor-pointer hover:border-b-2 hover:border-b-gray-900'>
                        <i class="fa-solid fa-bell"></i>
                        <li className='text-xs cursor-pointer text-gray-400 hover:text-gray-950'>Notification</li>
                    </div>
                    <div className='cursor-pointer hover:border-b-2 hover:border-b-gray-900'>
                        <i class="fa-solid fa-user"></i>
                        <li className='text-xs cursor-pointer text-gray-400 hover:text-gray-950'>Me</li>
                    </div>
                    <div className='my-auto px-4'>
                        <button className='hover:bg-gray-200 px-4 py-2 rounded-full font-medium' onClick={() => { nav('signup') }}>Join Now</button>
                        <button className='ms-2 hover:bg-blue-200 px-6 py-2 rounded-full text-blue-600 font-medium' style={{ border: "1px solid blue" }} onClick={() => { nav('signin') }}>Sign In</button>
                    </div>

                </ul>

            </div>

        </>
    )
}
