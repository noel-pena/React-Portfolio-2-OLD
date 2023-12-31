import { useState } from 'react'
import './App.css'
import Body from './components/body'
import Footer from './components/footer'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Body />
    <Footer />
    </>
  )
}

export default App
