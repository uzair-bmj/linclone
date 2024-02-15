import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className='bg-white w-[100vw] flex justify-center'>
                <img src="/public/linkedin.png" alt="" width={"80px"}/>
                <p className='text-sm my-auto'>© 2024</p>
                <ul className='flex justify-between text-sm px-4 my-auto w-[70vw]'>
                    <li><a href="" className='hover:text-blue-800  hover:underline'>About</a></li>
                    <li><a href="" className='hover:text-blue-800  hover:underline'>Accessibility</a></li>
                    <li><a href="" className='hover:text-blue-800  hover:underline'>User Agreement</a></li>
                    <li><a href="" className='hover:text-blue-800  hover:underline'>Privacy Policy</a></li>
                    <li><a href="" className='hover:text-blue-800  hover:underline'>Cookie Policy</a></li>
                    <li><a href="" className='hover:text-blue-800  hover:underline'>Copyright Policy</a></li>
                    <li><a href="" className='hover:text-blue-800  hover:underline'>Brand Policy</a></li>
                    <li><a href="" className='hover:text-blue-800  hover:underline'>Guest Controls</a></li>
                    <li><a href="" className='hover:text-blue-800  hover:underline'>Community Guidelines</a></li>
                    <li><a href="" className='hover:text-blue-800  hover:underline'>Languages</a></li>
                </ul>

            </footer>
        </>
    )
}
