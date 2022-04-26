import React, {useContext} from 'react'
import './MainSignIn.scss'
// ** Components **
import SignIn from './SignIn'
import CreateAccount from './CreateAccount'
import ForgotPassword from './ForgotPassword'
// ** Contexts
import {SignInModalsContext} from '../../../contexts/SignInModalsContext.jsx'
import SignOutModal from './SignOutModal'

/**
 *  launched since component <Header/>
 * @returns component <SignIn/> or <ForgotPassword/> or <CreateAccount/>
 */
export default function MainSignIn() {
  const {displayModal} = useContext(SignInModalsContext)

  return (
    <>
      <div id="container-signIn"></div>

      {(() => {
        switch (displayModal) {
          case 'SignIn':
            return <SignIn />
          case 'ForgotPassword':
            return <ForgotPassword />
          case 'CreateAccount':
            return <CreateAccount />
          case 'SignOut':
            return <SignOutModal />
          default:
            return null
        }
      })()}
    </>
  )
}
