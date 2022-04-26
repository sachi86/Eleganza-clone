import React from 'react'
import './cart-modal.styles.scss'
import {useNavigate} from 'react-router-dom'
import {ErrorBoundary} from 'react-error-boundary'
import {calculatePrice, calculateQuantityTotal} from '../../utils/utils'
// ** Components **
import CartItem from '../cart-item/cart-item.component'
import HeaderModal from '../Modals/Cart/HeaderModal'
import ErrorDisplay from '../error-display/error-display.component'
// ** Contexts **
import {CartContext} from '../../contexts/CartContext'
import {SignInModalsContext} from '../../contexts/SignInModalsContext'

const CartModal = ({onHandleOpenModalCart}) => {
  const [cartInfo] = React.useContext(CartContext)
  const {handleOpenModalIdentify} =
    React.useContext(SignInModalsContext)

  let navigate = useNavigate()

  const onHandleGoToCheckout = () => {
    onHandleOpenModalCart()
    sessionStorage.setItem('orderWithOutLogin', true)
    sessionStorage.getItem('connected')
      ? navigate('/checkout')
      : handleOpenModalIdentify()
  }
  return (
    <ErrorBoundary FallbackComponent={ErrorDisplay}>
      <div className="signIn cart-modal">
        <HeaderModal
          title={'Panier'}
          onHandleOpenModalCart={onHandleOpenModalCart}
        />
        {cartInfo.nbProduct ? (
          <>
            <div className="cart-modal__content">
              {cartInfo.cartItems.map(item => (
                <CartItem key={item._id} item={item} />
              ))}
            </div>
            <div className="cart-modal__footer">
              <div className="cart-modal__footer__total">
                <div className="cart-modal__footer__total__name">
                  <span>
                    {`Total(
                    ${calculateQuantityTotal(cartInfo.cartItems)}
                      ${
                        calculateQuantityTotal(cartInfo.cartItems) > 1
                          ? 'produits'
                          : 'produit'
                      }
                    )`}
                  </span>
                  <span>(TVA incluse)</span>
                </div>
                <div className="cart-modal__footer__total__value">
                  {calculatePrice(cartInfo.cartItems)} €
                </div>
              </div>
            </div>
            <div className="cart-modal__box__btn order">
              <button
                className="cart-modal__btn order"
                onClick={onHandleGoToCheckout}
              >
                Commander
              </button>
              <button
                className="cart-modal__btn continue link"
                onClick={onHandleOpenModalCart}
              >
                Continuer vos achats
              </button>
            </div>
          </>
        ) : (
          <div className="cart-modal__content empty">
            <span>Il n'y a aucun objet dans votre panier</span>
            <button
              className="cart-modal__btn continue"
              onClick={onHandleOpenModalCart}
            >
              Continuer vos achats
            </button>
          </div>
        )}
      </div>
    </ErrorBoundary>
  )
}

export default CartModal
