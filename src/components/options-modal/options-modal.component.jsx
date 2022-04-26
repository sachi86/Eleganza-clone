import React from 'react'
import {CartContext} from '../../contexts/CartContext'
import './options-modal.styles.scss'
import {setCart} from '../../utils/utils'
import {ReactComponent as IconCloseModal} from '../../assets/icon-close-modal.svg'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorDisplay from '../error-display/error-display.component'

const OptionsModal = ({itemInit, toggleHiddenOptions}) => {
  const [cartInfo, setCartInfo] = React.useContext(CartContext)
  const [item, setItem] = React.useState(itemInit)

  const handleSubmitForm = event => {
    event.preventDefault()
    setCart(cartInfo)
    toggleHiddenOptions()
  }

  const updateSizeSelected = event => {
    event.preventDefault()
    let sizeSelect = event.target.textContent
    item.chaussure.sizeSelected = sizeSelect
    setItem(item)
    let updatedItems = []
    for (let cartItem of cartInfo.cartItems) {
      if (cartItem.chaussure._id === item.chaussure._id) {
        cartItem.chaussure.sizeSelected = item.chaussure.sizeSelected
      }
      updatedItems.push(cartItem)
    }
    let updatedCartInfo = {
      cartItems: updatedItems,
      nbProduct: cartInfo.nbProduct,
    }
    setCartInfo(updatedCartInfo)
  }

  return (
    <ErrorBoundary key={item.chaussure._id} FallbackComponent={ErrorDisplay}>
      <div className="options-modal">
        <div className="options-modal__header">
          <span>Modifier les options</span>
          <IconCloseModal
            className="options-modal__header__icon"
            onClick={toggleHiddenOptions}
          />
        </div>
        <div className="options-modal__content">
          <div className="options-modal__content__cart-item">
            <img
              className="options-modal__content__cart-item__img"
              src={item.chaussure.UrlImage1}
              alt="cart item"
            />
            <div className="options-modal__content__cart-item__details">
              <span className="options-modal__content__cart-item__details__name">
                {item.chaussure.Name}
              </span>
              <span className="options-modal__content__cart-item__details__price">
                {item.chaussure.NetPrice} €
              </span>
            </div>
          </div>
          <div>
            <form
              className="options-modal__content__form"
              onSubmit={event => handleSubmitForm(event)}
            >
              <span>Taille</span>
              <div>
                {item.chaussure.size.map(itemSize => (
                  <button
                    className={`options-modal__content__form__size__item ${
                      item.chaussure.sizeSelected === itemSize ? 'selected' : ''
                    }`}
                    key={itemSize}
                    onClick={updateSizeSelected}
                  >
                    {itemSize}
                  </button>
                ))}
              </div>
              <div className="options-modal__footer">
                <button
                  className="options-modal__footer__btn"
                  onClick={toggleHiddenOptions}
                >
                  Annuler
                </button>
                <button
                  className="options-modal__footer__btn btn__submit"
                  type="submit"
                >
                  Sauvegarder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )
}

export default OptionsModal
