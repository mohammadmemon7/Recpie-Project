import React, { createContext, useState } from 'react'

export const recipescontext=createContext(null)

const Recipecontext = ({children}) => {
    const [data, setdata] = useState([])
    console.log(data);
    
  return (
    <recipescontext.Provider value={{data,setdata}}>
        {children}
    </recipescontext.Provider>
  )
}

export default Recipecontext