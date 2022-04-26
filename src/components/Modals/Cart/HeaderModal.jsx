import React from 'react'
import './HeaderModal.scss'
import {ReactComponent as Cross} from '../../../assets/footer-svg/cross.svg'
import {ReactComponent as ArrowLeft} from '../../../assets/footer-svg/arrowLeft.svg'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorDisplay from "../../error-display/error-display.component";

export default function HeaderModal({
  arrowLeft = false,
  title,
  onHandleOpenModalCart,
  onHandleDisplaymodal,
}) {
  return (
      <ErrorBoundary key="header-cart" FallbackComponent={ErrorDisplay}>
          <header className="signIn__header dark">
          {arrowLeft && (
            <button
              className="signIn__header__btn signIn__header__btn--arrow dark"
              onClick={() => onHandleDisplaymodal('CartModal')}
            >
              <ArrowLeft />
            </button>
          )}
          <h3
            className={`${
              arrowLeft
                ? 'signIn__header--ArrowWithTitleAndCross'
                : 'signIn__header--titleWithCross'} dark`}
          >
            {title}
          </h3>
          <button
            className="signIn__header__btn signIn__header__btn--cross dark"
            onClick={onHandleOpenModalCart}
          >
            <Cross />
          </button>
        </header>
      </ErrorBoundary>
  )
}
