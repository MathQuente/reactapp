import { useEffect, useState } from 'react'
import './App.css'
import MyButton from './Button'
import AboutPage from './About'
import Profile from './Profile'
import MyProduct from './Product'

function App() {
  const [count, setCount] = useState(Number(localStorage.getItem('count')) || 0)


  function handleCount(){
    console.log(count)
    localStorage.setItem('count', count+1)
    setCount(count+1)
  }

  return (
    <>
      
      <h1>Welcome to my app</h1>
      <MyButton count={handleCount} value={count}></MyButton>
      <AboutPage></AboutPage>
      <img className="avatar" src='./vite.svg'/>
      <Profile></Profile>
      <MyProduct></MyProduct>
    </>
  )
}

export default App
