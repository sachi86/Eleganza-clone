import React from "react";
import "./moneyBackGarantee.scss"
import CustomerServiceMenu from "../../components/customer-service-menu/customer-service-menu";
import CustomerContact from "../../components/customer-contact/customer-contact";

const MoneyBackGarantee = () => {

    return(
        <div className="container__free__delivery">
            <CustomerServiceMenu/>
            <CustomerContact/>
        </div>
    )
}

export default MoneyBackGarantee