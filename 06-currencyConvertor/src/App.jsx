import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <h1 className='flex text-3xl text-white bg-orange-500 px-2 py-2 mb'>Currency Convertor App</h1>
    </>
  )
}

export default App
