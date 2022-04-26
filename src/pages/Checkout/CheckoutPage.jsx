import React from 'react'
import './checkoutpage.scss'
import AddressForm from '../../components/address-form/address-form.component'
import SummaryOrder from '../../components/checkoutsComponents/summaryOrder/SummaryOrder'
import ShippingMethod from '../../components/checkoutsComponents/ShippingMethod/ShippingMethod'
function CheckoutPage() {
  return (
    <div className="checkoutpage">
      <div className="checkoutpage--container checkoutpage--container__right">
        <AddressForm />
        <ShippingMethod />
      </div>
      <div className="checkoutpage--container checkoutpage--container__left">
        <SummaryOrder />
      </div>
    </div>
  )
}
export default CheckoutPage
