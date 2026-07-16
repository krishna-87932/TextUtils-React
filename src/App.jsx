import './App.css'
import Navbar from "./components/Navbar"
import TextForm from './components/TextForm'
// import About from './components/About'
import { useState } from 'react'

// 212529

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode=()=>{
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = "#e8ebee"
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = "#232528"
    }
  }
  return (
    <>

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <TextForm heading='Put Text Here.'mode={mode} />
      {/* <About/> */}

    </>
  )
}

export default App
