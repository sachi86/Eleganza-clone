import React from "react";
import './customer-service-menu.scss'


const CustomerServiceMenu =()=> {
    const linksCustomerService = ["Contact", "Question fréquentes", "Commande", "Payer", "Livraison", "Echange et retours", "Réclamations et garantie", "Maintenance", "Magasins"]
    return(
        <ul>
            {linksCustomerService.map(link =>(
                <li><a key={link.index}>{link.value}</a></li>))}
        </ul>
    )
}


export default CustomerServiceMenu;

