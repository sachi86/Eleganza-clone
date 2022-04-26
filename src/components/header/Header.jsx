import React, {useState, useContext} from 'react'
import './header.scss'
import {ErrorBoundary} from 'react-error-boundary'
import {Link} from 'react-router-dom'
// ** Vendor **
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// ** Icones and SVG **
import {faEuroSign, faUser, faCheck} from '@fortawesome/free-solid-svg-icons'
import Logo from '../../assets/eleganza.svg'
import {SearchBox, Configure} from 'react-instantsearch-dom'
import {ReactComponent as IconCart} from '../../assets/icon-cart.svg'
// ** Components **
import Navbar from '../navbar/Navbar'
import MainCart from '../Modals/Cart/MainCart'
import MainSignIn from '../Modals/SignIn/MainSignIn'
import ErrorDisplay from '../error-display/error-display.component'
// ** Contexts **
import {CartContext} from '../../contexts/CartContext'
import {ThemeContext} from '../../App'
import {SignInModalsContext} from '../../contexts/SignInModalsContext.jsx'

function Header({handleClick, handleChange, handleLogo}) {
  const [cartInfo] = useContext(CartContext)
  const [themeValue, setThemeValue] = useContext(ThemeContext)
  // const [openModalIdentify, setOpenModalIdentify] = useState(false)
  const [openModalCart, setOpenModalCart] = useState(false)

  const {openModalIdentify, handleOpenModalIdentify} =
    useContext(SignInModalsContext)

  const handleOpenModalCart = () => {
    setOpenModalCart(!openModalCart)
    let updatedThemeValue = {
      overlay: !themeValue.overlay,
    }
    setThemeValue(updatedThemeValue)
  }

  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  return (
    <header>
      {openModalIdentify && (
        <MainSignIn onHandleOpenModalIdentify={handleOpenModalIdentify} />
      )}
      {openModalCart && (
        <MainCart onHandleOpenModalCart={handleOpenModalCart} />
      )}
      <div className="container">
        <div className="header__head  header__head--1">
          <FontAwesomeIcon className="check" icon={faCheck} />
          <p>Livraisons rapides dans les 1-3 jours ouvrables </p>
        </div>
        <div className="header__head header__head--2">
          <FontAwesomeIcon className="check" icon={faCheck} />
          <p> Livraison gratuite en Europe! </p>
        </div>
        <div className="header__head  header__head--3">
          <FontAwesomeIcon className="check" icon={faCheck} />
          <p>Garantie de remboursement! aussi sur les articles en vente </p>
        </div>
      </div>
      <div className="  header--container">
        <div className="search--box">
          <Configure hitsPerPage={12} />
          <SearchBox
            translations={{placeholder: 'Que recherchez vous ?'}}
            onChange={handleChange}
            onSubmit={handleClick}
          />
        </div>
        <div className="logo">
          <Link to="/">
            <img height="25px" src={Logo} alt="logo" onClick={handleLogo} />
          </Link>
        </div>

        <div className="icon">
          <button className="rond rond--flag">
          </button>
          <button className="rond rond--monnaie">
            <FontAwesomeIcon className="fa" icon={faEuroSign} />
          </button>
          <button className="rond rond--user" onClick={handleOpenModalIdentify}>
            <FontAwesomeIcon className="fa" icon={faUser} />
          </button>
          <span style={{marginRight: sessionStorage.getItem('connected')?'20px': '0'}}>{sessionStorage.getItem('connected')}</span>
          {/* <span style={{marginRight: '20px'}}>{sessionStorage.getItem('connected')}</span> */}
          <button className="rond rond--panier" onClick={handleOpenModalCart}>
            <ErrorBoundary key="rond--panier" FallbackComponent={ErrorDisplay}>
              <IconCart className="cart-icon" />
              {cartInfo.nbProduct ? (
                <span className="item-count panier--number">
                  {cartInfo.nbProduct}
                </span>
              ) : null}
            </ErrorBoundary>
          </button>
          <button
            className="rond rond--bar"
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
          >
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
                fill="#4A4A4A"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <Navbar
        hamburgerOpen={hamburgerOpen}
        setHamburgerOpen={setHamburgerOpen}
      />
    </header>
  )
}

export default Header
