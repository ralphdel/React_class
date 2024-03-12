import { useState } from "react"
import './Classwork.css'



const Classwork =()=>{
    const [state, setState]= useState('yellow')
    return(
        <>
        <h1> My favourite colour is <span className="color"> {state}</span></h1>
        <button onClick={()=>{setState('red')}}>Change colour</button>
       
        </>

    )

}



export default Classwork