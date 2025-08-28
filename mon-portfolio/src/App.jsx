import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Navbar from './components/Navbar/Navbar'

import { Navbar } from './components/Navbar/Navbar'

function App() {


  return (
    <>

     <Navbar /> 

 
      {/* bulles décoratives */}
      <div className="stars"></div>



    </>
  )
}

export default App
