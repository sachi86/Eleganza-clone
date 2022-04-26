import React from 'react'
import ButtonQuantity from '../button-quantity/button-quantity.component'
import './cart-item.styles.scss'
import OptionsModal from '../options-modal/options-modal.component'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorDisplay from '../error-display/error-display.component'

const CartItem = ({item}) => {
  const [qtySelected, setQtySelected] = React.useState(item.quantity)
  const [hiddenOptions, setHiddenOptions] = React.useState(true)

  const toggleHiddenOptions = () => {
    setHiddenOptions(!hiddenOptions)
  }

  return (
    <ErrorBoundary key={item._id} FallbackComponent={ErrorDisplay}>
      <div className="cart-item">
        <div className="cart-item__img__container">
          <img
            className="cart-item__img"
            src={item.UrlImage1}
            alt="cart item"
          />
        </div>
        <div className="cart-item__details">
          <span className="cart-item__details__name">{item.Name}</span>
          {item.sizeSelected !== '' ? (
            <div className="cart-item__details__box__size__options">
              <span>
                Taille:{' '}
                <span className="cart-item__details__size__value">
                  {item.sizeSelected}
                </span>
              </span>
              <div
                className="cart-item__details__options"
                onClick={toggleHiddenOptions}
              >
                Edit option
              </div>
              {hiddenOptions ? null : (
                <OptionsModal
                  itemInit={item}
                  toggleHiddenOptions={toggleHiddenOptions}
                />
              )}
            </div>
          ) : null}
          <div className="cart-item__details__box__qty__total">
            <ButtonQuantity
              qtySelected={qtySelected}
              setQtySelected={setQtySelected}
              item={item}
            />
            <span className="cart-item__details__price">
              <span className="cart-item__details__price__total">
                {(qtySelected * item.NetPrice).toFixed(2)} €
              </span>
            </span>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )
}

export default CartItem
