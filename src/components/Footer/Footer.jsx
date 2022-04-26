import React from 'react'
import './Footer.scss'
// ** SVG **
import {ReactComponent as Dhl} from '../../assets/footer-svg/dhl.svg'
import {ReactComponent as Gls} from '../../assets/footer-svg/gls.svg'
import {ReactComponent as Ups} from '../../assets/footer-svg/ups.svg'
import {ReactComponent as Visa} from '../../assets/footer-svg/visa.svg'
import {ReactComponent as Check} from '../../assets/footer-svg/check.svg'
import {ReactComponent as PayPal} from '../../assets/footer-svg/payPal.svg'
import {ReactComponent as FaceBook} from '../../assets/footer-svg/facebook.svg'
import {ReactComponent as Linkedin} from '../../assets/footer-svg/linkedin.svg'
import {ReactComponent as Instagram} from '../../assets/footer-svg/instagram.svg'
import {ReactComponent as BubbleChat} from '../../assets/footer-svg/bubbleChat.svg'
import {ReactComponent as MasterCard} from '../../assets/footer-svg/masterCard.svg'
import {ReactComponent as StarFilled} from '../../assets/footer-svg/star-filled.svg'
import {ReactComponent as AmericanExpress} from '../../assets/footer-svg/americanExpress.svg'
import {ReactComponent as StarQuarterfilled} from '../../assets/footer-svg/star-quarter-filled.svg'

export default function Footer() {
  return (
    <footer>
      <section className="footer__livraison">
        <article>
          <Check />
          <span data-testid="Livraison">
            Livraison gratuite dans toute l'Europe
          </span>
        </article>
        <article id="footer__livraison--ups">
          <Check />
          <span>Livraison rapide avec UPS</span>
        </article>
        <article id="footer__livraison--guarantee">
          <Check />
          <span>
            Garantie de remboursement! aussi sur les articles en ventes
          </span>
        </article>
      </section>

      <section className="footer__partenaire-logos">
        <ul>
          <li>
            <Visa data-testid="Visa" />
          </li>
          <li>
            <MasterCard />
          </li>
          <li>
            <PayPal />
          </li>
          <li>
            <AmericanExpress />
          </li>
          <li>
            <Ups />
          </li>
          <li>
            <Dhl />
          </li>
          <li>
            <Gls />
          </li>
        </ul>
      </section>

      <section className="footer__separation"></section>

      <section className="footer__contact">
        <div className="footer__contact__container">
          <article className="footer__contact__container__contact">
            <h4>Contact</h4>
            <div>
              <span
                className="footer__contact__container--bold-font"
                data-testid="Telephone"
              >
                Téléphone :{' '}
              </span>
              <data value="01 01 01 01 01">01 01 01 01 01</data>
            </div>
            <div>
              <span className="footer__contact__container--bold-font">
                Email :{' '}
              </span>
              <data value="toto@elysee.fr">toto@elysee.fr</data>
            </div>
            <div>
              <span className="footer__contact__container--bold-font">
                Horaire d'ouverture :{' '}
              </span>
              <time>09:00-17:30</time>
            </div>
            <div className="footer__contact__container__notes-and-stars">
              <data
                value="4.4"
                className="footer__contact__container__notes-and-stars--notes"
              >
                4.4
              </data>
              <span className="footer__contact__container__notes-and-stars--stars">
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarQuarterfilled />
              </span>
            </div>
            <data value="790">790 Commentaires</data>
          </article>
          <article className="footer__contact__container__service-client">
            <h4>Service client</h4>
            <ul>
              <li>
                <a href="/home">Contact</a>
              </li>
              <li>
                <a href="/home">Questions fréquentes</a>
              </li>
              <li>
                <a href="/home">Commander</a>
              </li>
              <li>
                <a href="/home">Payer</a>
              </li>
              <li>
                <a href="/home">Livraison</a>
              </li>
              <li>
                <a href="/home">Echange et retours</a>
              </li>
              <li>
                <a href="/home">Réclamations et garantie</a>
              </li>
              <li>
                <a href="/home">Maintenance</a>
              </li>
            </ul>
          </article>
          <article className="footer__contact__container__eleganza">
            <h4>Eleganza</h4>
            <ul>
              <li>
                <a href="/home">A propos d'Eleganza</a>
              </li>
              <li>
                <a href="/home">Nos magasins</a>
              </li>
              <li>
                <a href="/home">Travailler chez Eleganza</a>
              </li>
              <li>
                <a href="/home">Informations sur les cookies</a>
              </li>
              <li>
                <a href="/home">Protection de la vie privée</a>
              </li>
              <li>
                <a href="/home">Conditions générales de vente</a>
              </li>
            </ul>
          </article>
          <article className="footer__contact__container__magasins">
            <h4>Nos magasins</h4>
            <ul>
              <li>
                <a href="/home">Nos magasins</a>
              </li>
              <li>
                <a href="/home">Eleganza Hilversum</a>
              </li>
              <li>
                <a href="/home">Eleganza Utrecht</a>
              </li>
              <li>
                <a href="/home">OBLIQUE Utrecht</a>
              </li>
              <li>
                <a href="/home">Click & Collect</a>
              </li>
            </ul>
          </article>
          <article className="footer__contact__container__social-network">
            <h4>Restez informé</h4>
            <button data-testid="ButtonAbonnezVous">
              Abonnez-vous à la newsletter
            </button>
            <ul>
              <li>
                <Instagram />
              </li>
              <li>
                <FaceBook />
              </li>
              <li>
                <Linkedin />
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="footer__copyright">
        <div className="footer__copyright--content" data-testid="Copyright">
          Copyright ©
        </div>
      </section>

      <section className="footer__bubble-chat">
        <div>
          <BubbleChat data-testid="BubbleChat" />
        </div>
      </section>
    </footer>
  )
}
