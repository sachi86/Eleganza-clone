import React, {useContext} from 'react'
// ** Components **
import HeaderModal from './HeaderModal'
// ** Contexts **
import {SignInModalsContext} from '../../../contexts/SignInModalsContext.jsx'

export default function CreateAccount() {
  const {form, handleSubmit, handlerInputChange} =
    useContext(SignInModalsContext)

  return (
    <>
      <div className="signIn">
        <HeaderModal arrowLeft={true} title={'Créer un compte'} />

        <section className="signIn__form">
          <article>
            <form onSubmit={e => handleSubmit(e)} id="createAccount">
              <div>
                <label htmlFor="firstName">* Prénom</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={form.firstName.value}
                  onChange={e => handlerInputChange(e)}
                />
              </div>
              {form.firstName.empty && (
                <div className="signIn__form_error">
                  <div className="signIn__form_error--triangle"></div>
                  Ce champ est requis.
                </div>
              )}
              <div>
                <label htmlFor="name">* Nom de famille</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name.value}
                  onChange={e => handlerInputChange(e)}
                />
              </div>
              {form.name.empty && (
                <div className="signIn__form_error">
                  <div className="signIn__form_error--triangle"></div>
                  Ce champ est requis.
                </div>
              )}
              <div>
                <label htmlFor="email">* E-mail</label>
                <input
                  className="email"
                  type="text"
                  name="email"
                  id="email"
                  value={form.email.value}
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
              <div>
                <label htmlFor="psw">* Mot de passe</label>
                <input
                  type="password"
                  name="psw"
                  id="psw"
                  value={form.psw.value}
                  onChange={e => handlerInputChange(e)}
                />
              </div>
              {form.psw.empty && (
                <div className="signIn__form_error">
                  <div className="signIn__form_error--triangle"></div>
                  Ce champ est requis.
                </div>
              )}
              <div>
                <label htmlFor="repeatPsw">* Répéter mot de passe</label>
                <input
                  type="password"
                  name="repeatPsw"
                  id="repeatPsw"
                  value={form.repeatPsw.value}
                  onChange={e => handlerInputChange(e)}
                />
              </div>
              {form.repeatPsw.empty && (
                <div className="signIn__form_error">
                  <div className="signIn__form_error--triangle"></div>
                  Ce champ est requis.
                </div>
              )}
              <article>
                <button className="signIn__form__btn__black--big" type="submit">
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
