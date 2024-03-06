import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PapaAdemola from './components/PapaAdemola'
import { ChildOne, ChildThree, Childtwo } from './components/Children.'

function App() {
  const myfirstchild= "Mopelola Daniel "
  const mysecondchild ="Mayowa"
  const mythirdchild ="Helen"

  return (
    <>
      <PapaAdemola/>
      <div>
        <ChildOne name={myfirstchild}/>
        <Childtwo name={mysecondchild}/>
        <ChildThree name={mythirdchild}/>
      </div>
    </>
  )
}

export default App
