import React, {useContext} from 'react'
import './HeaderModal.scss'
// ** SVG **
import {ReactComponent as Cross} from '../../../assets/footer-svg/cross.svg'
import {ReactComponent as ArrowLeft} from '../../../assets/footer-svg/arrowLeft.svg'
import {SignInModalsContext} from '../../../contexts/SignInModalsContext.jsx'

export default function HeaderModal({arrowLeft = false, title}) {
  const {handleDisplaymodal, handleOpenModalIdentify} =
    useContext(SignInModalsContext)

  return (
    <header className="signIn__header">
      {arrowLeft && (
        <button
          className="signIn__header__btn signIn__header__btn--arrow"
          onClick={() => handleDisplaymodal('SignIn')}
        >
          <ArrowLeft />
        </button>
      )}

      <h3
        className={
          arrowLeft
            ? 'signIn__header--ArrowWithTitleAndCross'
            : 'signIn__header--titleWithCross'
        }
      >
        {title}
      </h3>

      <button
        className="signIn__header__btn signIn__header__btn--cross"
        onClick={handleOpenModalIdentify}
      >
        <Cross />
      </button>
    </header>
  )
}
