import React, {useState} from 'react'
import './MainCart.scss'
import CartModal from '../../cart-modal/cart-modal.component'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorDisplay from "../../error-display/error-display.component";

export default function MainCart({onHandleOpenModalCart}) {
  const [displayModal, setDisplayModal] = useState('CartModal')

  const handleDisplaymodal = modal => {
    setDisplayModal(modal)
  }

  return (
    <>
      {(() => {
        switch (displayModal) {
          case 'CartModal':
            return (
                <ErrorBoundary key="CartModal" FallbackComponent={ErrorDisplay}>
                    <CartModal
                    onHandleDisplaymodal={handleDisplaymodal}
                    onHandleOpenModalCart={onHandleOpenModalCart}
                  />
                </ErrorBoundary>
            )
          default:
            return null
        }
      })()}
    </>
  )
}
