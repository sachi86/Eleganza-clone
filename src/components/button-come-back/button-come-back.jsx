import React from "react";
import "./button-come-back.scss";
import {Link} from "react-router-dom";





const ButtonComeBack= () => {
    return (
        <Link to="/">
            <button className="btn__come__back">Retour au début</button>
        </Link>

    )
}

export default ButtonComeBack;