import React from 'react'
import './productpage.scss'
const AccordionProduct = ({product}) => {
  const [accordionOpen, setAccordionOpen] = React.useState({
    firstAccordion: false,
    secondAccordion: false,
  })
  const toggleAccordion = (accordion, index) => {
    setAccordionOpen({
      ...accordionOpen,
      [accordion]: index,
    })
  }
  return (
    <section className="accordion-container">
      <div className="accordion accordion-first">
        <button
          className="accordion-button"
          onClick={() =>
            toggleAccordion('firstAccordion', !accordionOpen.firstAccordion)
          }
        >
          <h4>SPÉCIFICATIONS</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={
              accordionOpen.firstAccordion ? {transform: 'rotate(180deg)'} : {}
            }
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
        {accordionOpen.firstAccordion ? (
          <div className="accordion-first--content">
            <ul className="accordion-first--content--list">
              <li className="accordion-first--content--li">
                <img
                  alt="Snelle levering binnen 1-3 werkdagen"
                  title=""
                  src="https://static.eleganza-shop.com/media/link/image/s/n/snelle_levering.svg"
                  crossOrigin="anonymous"
                ></img>
                Livraison rapide avec ups
              </li>
              <li className="accordion-first--content--li">
                <img
                  alt="Gratis verzending binnen Nederland &amp; Belgie"
                  title=""
                  src="https://static.eleganza-shop.com/media/link/image/g/r/gratis_verzending.svg"
                  crossOrigin="anonymous"
                ></img>
                Livraison gratuite dans toute l'Europe'
              </li>
              <li className="accordion-first--content--li">
                <img
                  alt="Achteraf betalen met AfterPay"
                  title=""
                  src="https://static.eleganza-shop.com/media/link/image/s/a/same_day_delivery.svg"
                  crossOrigin="anonymous"
                ></img>
                Payer avec différents moyens de paiement
              </li>
              <li className="accordion-first--content--li">
                <img
                  alt="Niet goed, geld terug! ook op SALE artikelen"
                  title=""
                  src="https://static.eleganza-shop.com/media/link/image/g/e/geld_terug.svg"
                  crossOrigin="anonymous"
                ></img>
                Pas bon, l'argent est remboursé
              </li>
            </ul>
            <p>&nbsp;</p>
          </div>
        ) : null}
      </div>
      <div className="accordion accordion-second">
        <button
          className="accordion-button"
          onClick={() =>
            toggleAccordion('secondAccordion', !accordionOpen.secondAccordion)
          }
        >
          <h4>Dimensions</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={
              accordionOpen.secondAccordion ? {transform: 'rotate(180deg)'} : {}
            }
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
        {accordionOpen.secondAccordion ? (
          <div className="accordion-second--content">
            <ul className="accordion-ul accordion-second--ul">
              <li className="accordion-second--content--li">
                Marque : {product.Brand}
              </li>
              <li className="accordion-second--content--li">
                Couleur : {product.Couleur}
              </li>
              <li className="accordion-second--content--li">
                Nom du produit: {product.Name}
              </li>
            </ul>{' '}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default AccordionProduct
