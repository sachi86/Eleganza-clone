import React, {useContext} from 'react'
// ** Components **
import HeaderModal from './HeaderModal'
// ** Contexts **
import {SignInModalsContext} from '../../../contexts/SignInModalsContext.jsx'

export default function SignOutModal() {
  const {handleSubmit} = useContext(SignInModalsContext)
  return (
    <>
      <div className="signIn">
        <HeaderModal title={'Se déconnecter'} />

        <section className="signIn__form">
          <article>
            <form onSubmit={e => handleSubmit(e)} id="signOut">
              <article>
                <button
                  className="signIn__form__btn__blue-green--big"
                  type="submit"
                >
                  Se déconnecter
                </button>{' '}
              </article>
            </form>
          </article>
        </section>
      </div>
    </>
  )
}
