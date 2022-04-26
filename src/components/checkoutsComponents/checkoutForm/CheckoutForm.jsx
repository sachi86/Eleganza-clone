import React from 'react'
import './checkoutform.scss'
const CheckoutForm = () => {
  return (
    <div className="CheckoutForm--container ">
      <h3> 1. Adresse de livraison</h3>
      <form className="CheckoutForm--form">
        <div className="containerForm container--firstname">
          <label>firstname</label>
          <input
            id="firstname"
            type="text"
            className="CheckoutFormInput input--firstname"
            required
          />
        </div>
        <div className="containerForm container--lastname">
          <label htmlFor="lastname">lastname</label>
          <input
            id="lastname"
            type="text"
            className="CheckoutFormInput input--lastname"
            required
          />
        </div>
        <div className="containerForm container--postalCode">
          <label htmlFor="postalCode">Postal code</label>
          <input
            id="postalCode"
            type="text"
            className="CheckoutFormInput input--adress"
            required
          />
        </div>
        <div className="containerForm container--number">
          <label htmlFor="number">Number</label>
          <input
            id="number"
            type="text"
            className="CheckoutFormInput input--country"
            required
          />
        </div>
        <div className="containerForm container--street">
          <label htmlFor="street">street</label>
          <input
            id="street"
            type="text"
            className="CheckoutFormInput input--street"
            required
          />
        </div>
        <div className="containerForm container--email">
          <label htmlFor="email">email</label>
          <input
            id="email"
            type="email"
            className="CheckoutFormInput input--email"
            required
          />
        </div>
        <div className="containerForm container--phone">
          <label htmlFor="phone">phone</label>
          <input
            id="phone"
            type="number"
            className="CheckoutFormInput input--phone"
            required
          />
        </div>

        <div className="containerForm container--city">
          <label htmlFor="city">city</label>
          <input
            id="city"
            type="text"
            className="CheckoutFormInput input--city"
            required
          />
        </div>
        <div className="containerForm container--state">
          <label htmlFor="state">state</label>
          <input
            id="state"
            type="text"
            className="CheckoutFormInput input--country"
            required
          />
        </div>

        <div className="containerForm container--country">
          <label htmlFor="country">country</label>
          <input
            id="country"
            type="text"
            className="CheckoutFormInput input--country"
            required
          />
        </div>

        <button className="CheckoutForm--button">
          <span>Sauvegarder</span>
        </button>
      </form>
    </div>
  )
}

export default CheckoutForm
