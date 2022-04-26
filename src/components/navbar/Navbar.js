import React from 'react'
import './Navbar.scss'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'

const Navbar = ({hamburgerOpen, setHamburgerOpen}) => {
  return (
    <div className="navbarContainer">
      {hamburgerOpen && (
        <MobileNavigation
          hamburgerOpen={hamburgerOpen}
          setHamburgerOpen={setHamburgerOpen}
        />
      )}
      <Navigation />
    </div>
  )
}

export default Navbar
