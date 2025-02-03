import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page from './components/Page'
//import Login from './components/auth/login'
import SignUp from './components/auth/SignUp'
import Landing from './components/landing/Landing'
//import { MonteCarloDCF } from './components/monteCarloDCF.jsx/monteCarloDCF'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Landing/>
    </>
  )
}

export default App
