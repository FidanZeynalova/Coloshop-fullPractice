import React, { createContext, useEffect, useState } from 'react'

export const BasketProducts = createContext()

function BasketContextProvider({children}) {
    let basketLocal = JSON.parse(localStorage.getItem("basket"))
    let [basket,setBasket] = useState(basketLocal ? basketLocal : [])
    useEffect(()=>{
        localStorage.setItem("basket",JSON.stringify(basket))
    },[basket])

   let value = {
        basket,setBasket
    }

  return (
    <BasketProducts.Provider value={value}>
      {children}
    </BasketProducts.Provider>
  )
}

export default BasketContextProvider
