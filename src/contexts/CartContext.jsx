import React, {createContext, useState} from 'react'
import {getCart} from '../utils/utils'

export const CartContext = createContext('')

const CartContextProvider = props => {
  const initCart = () => {
    let cartInfo = getCart()
    return cartInfo
  }

  const [cartInfo, setCartInfo] = useState(() => initCart())
  const info = [cartInfo, setCartInfo]
  console.log(cartInfo)
  return (
    <CartContext.Provider value={info}>{props.children}</CartContext.Provider>
  )
}
export default CartContextProvider
