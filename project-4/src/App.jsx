import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import styles from './App.module.css'
import Display from './components/Display'
import Buttons from './components/buttons'


function App() {
  const [count, setCount] = useState(0)
  let buttonList =['C','1','2','+','3','4','-','5','6','*','7','8','/','9','0','=', '.', '%'];

  return (
    <div className={styles['caclulater_container']}>
      <Display></Display>
      <Buttons buttonList={buttonList}></Buttons> 
    </div>
    
  )
}

export default App
