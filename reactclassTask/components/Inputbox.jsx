import { useState } from "react"




const Inputbox=()=>{

     const [input, setInput]=useState('')
    return(
        <>
        <input type="text" placeholder="Enter your text here" />
        <p>Text lenght: {}</p>
        </>
    )
}

export default Inputbox