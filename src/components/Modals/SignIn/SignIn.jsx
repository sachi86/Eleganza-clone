import React, {useContext} from 'react'
// import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
// ** Components **
import HeaderModal from './HeaderModal'
// ** Contexts **
import {SignInModalsContext} from '../../../contexts/SignInModalsContext.jsx'

export default function SignIn() {
  const {
    form,
    handleSubmit,
    handlerInputChange,
    handleDisplaymodal,
    handleOpenModalIdentify,
  } = useContext(SignInModalsContext)

  // let navigate = useNavigate()

  return (
    <>
      <div className="signIn">
        <HeaderModal title={"S'identifier"} />

        <section className="signIn__form">
          {sessionStorage.getItem('orderWithOutLogin') && (
            <article>
              <Link to="/checkout">
                <button
                  className="signIn__form__btn__transparent--big btn-orderWithOutLogin"
                  onClick={() => {
                    // navigate('/checkout')
                    handleOpenModalIdentify()
                  }}
                  // onClick={() => handleDisplaymodal('CreateAccount')}
                  data-testid="Btn-CreateAccount"
                >
                  Commander sans vous connecter
                </button>{' '}
              </Link>
            </article>
          )}

          <article>
            <form onSubmit={e => handleSubmit(e)} id="signIn">
              <div>
                <label htmlFor="email" data-testid="email">
                  * E-mail
                </label>
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
              {form.email.getEmailStrapiError && (
                <div className="signIn__form_error">
                  <div className="signIn__form_error--triangle"></div>
                  Email ou Mot de passe non valide.
                </div>
              )}
              <div>
                <label htmlFor="psw" data-testid="psw">
                  * Mot de passe
                </label>
                <input
                  id="psw"
                  name="psw"
                  type="password"
                  value={form.psw.value || ''}
                  onChange={e => handlerInputChange(e)}
                />
              </div>

              {form.psw.empty && (
                <div className="signIn__form_error">
                  <div className="signIn__form_error--triangle"></div>
                  Ce champ est requis.
                </div>
              )}
              {form.psw.getPswStrapiError && (
                <div className="signIn__form_error">
                  <div className="signIn__form_error--triangle"></div>
                  Email ou Mot de passe non valide.
                </div>
              )}
              <article>
                <button
                  className="signIn__form__btn__blue-green--big"
                  type="submit"
                  data-testid="Btn-identify"
                >
                  S'identifier
                </button>{' '}
              </article>
            </form>
          </article>
          <article>
            <button
              className="signIn__form__btn__transparent--big-psw"
              onClick={() => handleDisplaymodal('ForgotPassword')}
              data-testid="Btn-ForgotPassword"
            >
              Mot de passe oublié ?
            </button>{' '}
          </article>
          <article className="signIn__form--btn-mdp-separation"></article>
          <article>
            <button
              className="signIn__form__btn__transparent--big"
              onClick={() => handleDisplaymodal('CreateAccount')}
              data-testid="Btn-CreateAccount"
            >
              Créer un compte
            </button>{' '}
          </article>
        </section>
        <div id="tria">
          <div id="triangle-code"></div>
        </div>
      </div>
    </>
  )
}
