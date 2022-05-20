import React from "react";
import "./customer-contact.scss";


const CustomerContact =()=> {
    return(
        <div className="container__customer__contact">
            <h3 className="container__customer__contact__title">Nous Contacter</h3>
            <p className="container__customer__contact__introduction">Bien entendu, nous sommes également à votre disposition pour vous parler par téléphone.</p>
            <p className="container__customer__contact__paragraph"> Vous avez une question sur votre commande ou vous souhaitez passer une commande ?</p>
                0346 - 244 095
            <p className="container__customer__contact__paragraph">Vous avez une question sur les chaussures ?</p>
                035 - 621 40 50
            <p className="container__customer__contact__paragraph">Vous avez une question sur un produit vestimentaire ?
                030- 242 29 86</p>
        </div>
    )
}


export default CustomerContact;