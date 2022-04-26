import React from 'react'
import './button-quantity.styles.scss'
import {ReactComponent as IconMinus} from '../../assets/icon-minus.svg'
import {ReactComponent as IconPlus} from '../../assets/icon-plus.svg'
import {ReactComponent as IconDelete} from '../../assets/icon-delete.svg'
import {setCart} from '../../utils/utils'
import {CartContext} from '../../contexts/CartContext'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorDisplay from '../error-display/error-display.component'

const ButtonQuantity = ({qtySelected, setQtySelected, item}) => {
  const [cartInfo, setCartInfo] = React.useContext(CartContext)

  const increaseQuantity = itemId => {
    setQtySelected(Number(qtySelected) + 1)
    let updatedItems = []
    for (let cartItem of cartInfo.cartItems) {
      if (cartItem._id === itemId) {
        cartItem.quantity = Number(cartItem.quantity) + 1
      }
      updatedItems.push(cartItem)
    }
    let updatedCartInfo = {
      cartItems: updatedItems,
      nbProduct: Number(cartInfo.nbProduct) + 1,
    }
    setCartInfo(updatedCartInfo)
    setCart(updatedCartInfo)
  }

  const decreaseQuantity = itemId => {
    qtySelected > 0 && setQtySelected(Number(qtySelected) - 1)
    let updatedItems = []
    for (let cartItem of cartInfo.cartItems) {
      if (cartItem._id === itemId) {
        cartItem.quantity = Number(cartItem.quantity) - 1
      }
      updatedItems.push(cartItem)
    }
    let updatedCartInfo = {
      cartItems: updatedItems,
      nbProduct: Number(cartInfo.nbProduct) - 1,
    }
    setCartInfo(updatedCartInfo)
    setCart(updatedCartInfo)
  }

  const deleteItemFromCart = itemId => {
    const filteredItems = cartInfo.cartItems.filter(
      cartItem => cartItem._id !== itemId,
    )
    let filteredCartInfo = {
      cartItems: filteredItems,
      nbProduct: filteredItems.length,
    }
    setCartInfo(filteredCartInfo)
    setCart(filteredItems)
  }

  return (
    <ErrorBoundary key={item._id} FallbackComponent={ErrorDisplay}>
      <div className="btn">
        {qtySelected === 1 ? (
          <button
            className="btn__qty__delete btn__qty"
            onClick={() => deleteItemFromCart(item._id)}
          >
            <IconDelete />
          </button>
        ) : (
          <button
            className="btn__qty__minus btn__qty"
            onClick={() => decreaseQuantity(item._id)}
          >
            <IconMinus />
          </button>
        )}
        <span className="btn__qty__number btn__qty">{qtySelected}</span>
        <button
          className="btn__qty__plus btn__qty"
          onClick={() => increaseQuantity(item._id)}
        >
          <IconPlus />
        </button>
      </div>
    </ErrorBoundary>
  )
}

export default ButtonQuantity
