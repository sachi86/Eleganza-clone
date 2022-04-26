import React from 'react'
import './pageError.scss'
const PageError = () => {
  return (
    <div className="error__container">
      <main className="error__main">
        <h1>Oups !</h1>
        <p>
          Une erreur est survenue, veuillez réessayer plus tard ou vous diriger
          vers un autre lien.
        </p>
      </main>
    </div>
  )
}

export default PageError
