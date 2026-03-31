import { useState } from 'react'
import LandingPage from "./sections/LandingPage.jsx";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <LandingPage/>
    </>
  )
}

export default App
