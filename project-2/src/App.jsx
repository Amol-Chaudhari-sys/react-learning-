import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from './appName'
import AppTime from './appTime'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AppName></AppName>
      <AppTime></AppTime>

      
    </div>
    
  )
}

export default App
