import React from 'react'
import "./App.css"
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Components/Navbar'
import Signup from './Components/Signup'
import Signin from './Components/Signin'
import Landingpage from './Components/Landingpage';
import Footer from './Components/Footer';

export default function App() {
  return (
    <div className='bg-gray-100 min-h-screen'>

      <Navbar />
      <Routes>
      <Route path='/' element = {<Landingpage/>}/>
      <Route path='signup' element= {<Signup />}/>
      <Route path='signin' element= {<Signin/>}/>
      </Routes>
      <Footer/>

      

    </div>
  )
}
