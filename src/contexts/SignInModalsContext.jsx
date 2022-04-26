import React, {createContext, useState} from 'react'
// ** Vendor **
import Strapi from 'strapi-sdk-javascript/build/main'

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl)

export const SignInModalsContext = createContext()

export default function SignInModalsContextProvider(props) {
  const [form, setForm] = useState({
    firstName: {value: '', empty: false},
    name: {value: '', empty: false},
    email: {value: '', empty: false, valid: true, getEmailStrapiError: false},
    psw: {value: '', empty: false, getPswStrapiError: false},
    repeatPsw: {value: '', empty: false},
  })

  /**
   * used by Header.jsx
   * if true open modal
   */
  const [openModalIdentify, setOpenModalIdentify] = useState(false)

  const handleOpenModalIdentify = () => {
    setOpenModalIdentify(!openModalIdentify)
    /**
     *  handleDisplaymodal('SignIn') because reopening on
     * SignIn modal after close another modal
     */
    if (sessionStorage.getItem('connected')) {
      console.log('connecteddddd')
      handleDisplaymodal('SignOut')
    } else {
      handleDisplaymodal('SignIn')
    }
    document.body.classList.toggle(
      'body__modal-signIn--open',
      !openModalIdentify,
    )
  }
  /**
   * used by MainSignIn.jsx for display
   * component <SignIn/> or <ForgotPassword/> or <CreateAccount/>
   */
  const [displayModal, setDisplayModal] = useState('SignIn')

  const handleDisplaymodal = modal => {
    setDisplayModal(modal)
    setForm(resetForm)
  }

  const resetForm = {
    firstName: {value: '', empty: false},
    name: {value: '', empty: false},
    email: {value: '', empty: false, valid: true, getEmailStrapiError: false},
    psw: {value: '', empty: false, getPswStrapiError: false},
    repeatPsw: {value: '', empty: false},
  }

  /**
   * Strapi register function for save a user in DB
   */
  async function createUserInStrapi() {
    try {
      const response = await strapi.register(
        form.name.value,
        form.email.value,
        form.psw.value,
      )
      console.log('response registrer ===', response)
      handleDisplaymodal('SignIn')
    } catch (err) {
      console.log('error registrer in strapi', err)
    }
  }
  /**
   * Strapi login function for check if user
   * exist in DB
   * @returns
   */
  async function loginUserInStrapi(formTemp) {
    try {
      const response = await strapi.login(form.email.value, form.psw.value)
      sessionStorage.setItem('connected', response.user.username)
      localStorage.setItem('jwt', response.jwt)
      handleOpenModalIdentify()
    } catch (err) {
      setForm({
        ...formTemp,
        ...{
          email: {
            value: '',
            empty: false,
            valid: true,
            getEmailStrapiError: true,
          },
          psw: {value: '', empty: false, getPswStrapiError: true},
        },
      })
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    let formTemp = {...form}

    if (form.firstName.value === '') {
      formTemp = {
        ...formTemp,
        ...{firstName: {value: '', empty: true}},
      }
    }
    if (form.name.value === '') {
      formTemp = {
        ...formTemp,
        ...{name: {value: '', empty: true}},
      }
    }
    if (form.email.value === '') {
      formTemp = {
        ...formTemp,
        ...{email: {value: '', empty: true, valid: true}},
      }
    }
    if (form.psw.value === '') {
      formTemp = {
        ...formTemp,
        ...{psw: {value: '', empty: true}},
      }
    }
    if (form.repeatPsw.value === '') {
      formTemp = {
        ...formTemp,
        ...{repeatPsw: {value: '', empty: true}},
      }
    }
    /**
     * email validator
     */
    if (
      !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(form.email.value) &&
      form.email.value !== ''
    ) {
      formTemp = {
        ...formTemp,
        ...{email: {value: '', empty: false, valid: false}},
      }
    }
    /**
     * <form id="...">
     */
    switch (e.target.id) {
      case 'signIn':
        if (
          form.email.value !== '' &&
          form.psw.value !== '' &&
          /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(form.email.value)
        ) {
          loginUserInStrapi(formTemp)
        }
        break
      case 'forgotPassword':
        break
      case 'createAccount':
        if (
          form.firstName.value !== '' &&
          form.name.value !== '' &&
          form.email.value !== '' &&
          form.psw.value !== '' &&
          form.repeatPsw.value !== '' &&
          /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(form.email.value)
        ) {
          createUserInStrapi()
        }
        break
      case 'signOut':
        sessionStorage.removeItem('connected')
        handleOpenModalIdentify()
        break
      case 'order':
        // sessionStorage.removeItem('connected')
        // handleOpenModalIdentify()
        console.log("in orderrrrr :)")
        handleDisplaymodal('SignIn')
        break

      default:
        break
    }

    setForm(formTemp)
  }
  /**
   * (e.target.name) can be "firstName" || "name" || "email" || "psw" || "repeatPsw"
   */
  const handlerInputChange = e => {
    switch (e.target.name) {
      case 'firstName':
        setForm({
          ...form,
          ...{firstName: {value: e.target.value, empty: false}},
        })
        break
      case 'name':
        setForm({
          ...form,
          ...{name: {value: e.target.value, empty: false}},
        })
        break
      case 'email':
        setForm({
          ...form,
          ...{email: {value: e.target.value, empty: false, valid: true}},
        })
        break
      case 'psw':
        setForm({
          ...form,
          ...{psw: {value: e.target.value, empty: false}},
        })
        break
      case 'repeatPsw':
        setForm({
          ...form,
          ...{repeatPsw: {value: e.target.value, empty: false}},
        })
        break
      default:
        return null
    }
  }

  return (
    <SignInModalsContext.Provider
      value={{
        form,
        handleSubmit,
        handlerInputChange,
        openModalIdentify,
        handleOpenModalIdentify,
        displayModal,
        handleDisplaymodal,
        resetForm,
      }}
    >
      {props.children}
    </SignInModalsContext.Provider>
  )
}
