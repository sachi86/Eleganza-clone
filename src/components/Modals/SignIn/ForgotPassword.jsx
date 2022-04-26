import React, {useContext} from 'react'
// ** Components **
import HeaderModal from './HeaderModal'
// ** Contexts **
import {SignInModalsContext} from '../../../contexts/SignInModalsContext.jsx'

export default function ForgotPassword() {
  const {form, handleSubmit, handlerInputChange, handleOpenModalIdentify} =
    useContext(SignInModalsContext)

  return (
    <>
      <div className="signIn">
        <HeaderModal arrowLeft={true} title={'Mot de passe oublié'} />

        <section className="signIn__form">
          <article>
            <form onSubmit={e => handleSubmit(e)} id="forgotPassword">
              <p>Veuillez saisir l'adresse e-mail associée à ce compte</p>
              <div>
                <label htmlFor="email">* E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={form.email.value || ''}
                  onChange={e => handlerInputChange(e)}
                />
              </div>

              {form.email.empty && (
                <div className="signIn__form_error">
                  <div className="signIn__form_error--triangle"></div>
                  Ce champ est requis.
                </div>
              )}

              {!form.email.valid && (
                <div className="signIn__form_error">
                  <div className="signIn__form_error--triangle"></div>
                  Email non valide.
                </div>
              )}

              <article>
                <button
                  className="signIn__form__btn__transparent--small"
                  onClick={handleOpenModalIdentify}
                >
                  Annuler
                </button>{' '}
                <button
                  className="signIn__form__btn__blue-green--small"
                  type="submit"
                >
                  Soumettre
                </button>{' '}
              </article>
            </form>
          </article>
        </section>
        <div id="tria">
          <div id="triangle-code"></div>
        </div>
      </div>
    </>
  )
}
