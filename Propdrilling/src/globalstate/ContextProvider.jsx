import { createContext, useContext, useState } from "react"


const Mycontext=createContext()

const ContextProvider=({children})=>{

    const [greet, setGreet]= useState('')

    return (
        <>
        <Mycontext.Provider value={{greet, setGreet}}>
            {children}
        </Mycontext.Provider>

        </>
    )

}