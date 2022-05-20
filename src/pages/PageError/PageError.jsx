import React from 'react'

import './pageError.scss'
import ButtonComeBack from "../../components/button-come-back/button-come-back";

const PageError = () => {
  return (
    <div className="error__container">
      <main className="error__main">
        <h1>404</h1>
        <p>
          Page non trouvée
        </p>
        <ButtonComeBack/>
      </main>
    </div>
  )
}

export default PageError
