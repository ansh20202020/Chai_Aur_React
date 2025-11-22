import { useState } from 'react'
import './App.css'


function App() {

  let [counter, newCounter] = useState(0)

  const addValue = () => {
    if (counter >= 10) alert("Value can't go above 10!!!")
    else newCounter(counter + 1)
  }

  const subValue = () => {
    if (counter > 0) newCounter(counter - 1)
    else alert("Value can't go below 0!!!")
  }


  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>+1</button>
      <button onClick={subValue}>-1</button>
    </>
  )
}

export default App
