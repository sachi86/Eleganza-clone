import React from "react";
import {Link} from "react-router-dom";
import "./customer-service-menu.scss";
import {linksCustomerService} from "./customer-service-items";

const CustomerServiceMenu =()=> {
    return(
        <div className="container__customer__service">
            <h3 className="container__customer__service__title">Customer service menu</h3>
            <ul>
                <Link to="/404">
                {linksCustomerService.map(link =>(
                    <li  key={link.id}><span className="container__customer__service__item">{link.name}</span></li>))}
                </Link>
            </ul>
        </div>
    )
}


export default CustomerServiceMenu;

