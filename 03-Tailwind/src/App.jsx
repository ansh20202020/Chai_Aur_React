import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Example from './Example.jsx'
import Card from "./components/Card.jsx"

function App() {

  return (
   <>
    {/* <h1 className='bg-green-400 text-black p-4 rounded-4xl'>Test</h1> */}
    
    <div className="flex flex-wrap gap-6 justify-center">
        <Card Title="Top" btnText="Explore Further"/>
        <Card Title="Featured" />
        <Card />
        <Card />
    </div>

    {/* <Example/> */}
   </>
  )
}

export default App
