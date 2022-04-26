import React from 'react'
import {MobileNavigationLinks} from './NavLinks'
// const HamburgerContext = React.createContext()
import {MobileDropdownstep2} from './NavLinks'
import {MobileDropdownstep3} from './NavLinks'
const hamburgerReducer = (state, action) => {
  switch (action.type) {
    case 'avancer':
      if (state.step1 === true) {
        return {
          step1: false,
          step2: action.index,
          step3: false,
        }
      }
      if (state.step2 !== false) {
        return {
          ...state,
          step3: action.index,
        }
      }
      break
    case 'reculer':
      if (state.step1 === true) {
        return {
          ...state,
        }
      }
      if (typeof state.step3 == 'number') {
        return {
          ...state,
          step3: false,
        }
      }
      if (typeof state.step2 == 'number') {
        return {
          step1: true,
          step2: false,
          step3: false,
        }
      }
      break
    case 'close':
      return {
        step1: false,
        step2: false,
        step3: false,
      }
    default:
      return state
  }
}

// STEP3 NE PEUT ETRE QUE 1 OU 2 OU PLUS  mais pas 0
const MobileNavigation = ({hamburgerOpen, setHamburgerOpen}) => {
  const [hamburger, dispatch] = React.useReducer(hamburgerReducer, {
    step1: true,
    step2: false,
    step3: false,
  })
  const closeHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
    dispatch({type: 'close'})
  }
  return (
    <aside className="mobile-navigation">
      <div className="mobile-navigation__head">
        <span>
          <button
            class="node_modules--experius-galaxy-ui-lib-components-base-button-buttonIcon__root--QA_Mj"
            onClick={() => dispatch({type: 'reculer'})}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#212121"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.75731 12.6569L14.7071 7.70711L13.2928 6.29289L6.92889 12.6569L13.2928 19.0208L14.7071 17.6066L9.75731 12.6569Z"></path>
            </svg>
          </button>
        </span>
        <span>Hoofdmenu</span>
        <button onClick={closeHamburger}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#212121"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.014 13.4129L19.2924 20.6788L20.7079 19.2658L13.4294 12L20.7078 4.7342L19.2924 3.32121L12.014 10.587L4.70789 3.2935L3.29245 4.70649L10.5986 12L3.29236 19.2935L4.7078 20.7065L12.014 13.4129Z"></path>
          </svg>
        </button>
      </div>
      <nav className="burger--narvar">
        {hamburger.step1 && (
          <MobileNavigationLinks hamburger={hamburger} dispatch={dispatch} />
        )}
        {hamburger.step2 !== false && !hamburger.step3 && (
          <MobileDropdownstep2
            hamburger={hamburger}
            dispatch={dispatch}
            closeHamburger={closeHamburger}
          />
        )}
        {hamburger.step3 !== false && (
          <MobileDropdownstep3
            hamburger={hamburger}
            dispatch={dispatch}
            closeHamburger={closeHamburger}
          />
        )}
      </nav>
    </aside>
  )
}

export default MobileNavigation
