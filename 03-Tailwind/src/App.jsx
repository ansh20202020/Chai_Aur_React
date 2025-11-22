import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Example from './Example.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <h1 className='bg-green-400 text-black p-4 rounded-4xl'>Test</h1>
    {/* <Example/> */}
   </>
  )
}

export default App
