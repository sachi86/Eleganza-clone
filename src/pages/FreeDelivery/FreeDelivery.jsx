import React from "react";
import "./freeDelivery.scss"
import CustomerServiceMenu from "../../components/customer-service-menu/customer-service-menu";
import CustomerContact from "../../components/customer-contact/customer-contact";
import CustomerPaymentQuestions from "../../components/customer-questions/customer-payment-questions";

const FreeDelivery = () => {

    return(
        <div className="container__free__delivery">
            <CustomerServiceMenu/>
            <CustomerPaymentQuestions/>
            <CustomerContact/>
        </div>
    )
}

export default FreeDelivery