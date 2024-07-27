import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LanguageTranslator from './components/LanguageTranslator/LanguageTranslator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
      <LanguageTranslator />
      </div>
    </>
  )
}

export default App
