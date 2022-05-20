import React from 'react'
import './customer-questions.scss'
const CustomerPaymentQuestions = () => {
    const [accordionOpen, setAccordionOpen] = React.useState({
        firstAccordion: false,
        secondAccordion: false,
        thirdAccordion: false,
        fourthAccordion: false,
        fifthAccordion: false,
        sixthAccordion: false,
        seventhAccordion: false,
        eighthAccordion: false,

    })
    const toggleAccordion = (accordion, index) => {
        setAccordionOpen({
            ...accordionOpen,
            [accordion]: index,
        })
    }
    return (
        <section className="customer_question_accordion">
            <h3 className="customer_question_accordion_title">Questions sur le paiement</h3>
            <div className="customer_question_accordion_first">
                <button
                    className="customer_question_accordion_button"
                    onClick={() =>
                        toggleAccordion('firstAccordion', !accordionOpen.firstAccordion)
                    }
                >
                    <h4>Quelles méthodes de paiement sont disponibles ?</h4>
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
                    <div className="customer_question_accordion_paragraph">
                        <table>
                            <tr>
                                <td className="customer_question_accordion_table_firstline table-customer_questions_title">Méthode de paiement</td>
                                <td className="customer_question_accordion_table_title">Webshop</td>
                                <td className="customer_question_accordion_table_title">Magasins</td>
                            </tr>
                            <tr>
                                <td className="customer_question_accordion_table_firstline">&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td className="customer_question_accordion_table_firstline">I-Deal</td>
                                <td>&#10003;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="customer_question_accordion_table_firstline">Carte de crédit</td>
                                <td>&#10003;</td>
                                <td>&#10003;</td>
                            </tr>
                            <tr>
                                <td className="customer_question_accordion_table_firstline">Payer plus tard via AfterPay</td>
                                <td>&#10003;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="customer_question_accordion_table_firstline">Paypal</td>
                                <td>&#10003;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="customer_question_accordion_table_firstline">Comptant</td>
                                <td></td>
                                <td>&#10003;</td>
                            </tr>
                            <tr>
                                <td className="customer_question_accordion_table_firstline">Fashioncheque</td>
                                <td></td>
                                <td>&#10003;</td>
                            </tr>
                            <tr>
                                <td className="customer_question_accordion_table_firstline">Eleganza.nl Cadeaubon</td>
                                <td></td>
                                <td>&#10003;</td>
                            </tr>
                        </table>
                        <p>&nbsp;</p>
                    </div>
                ) : null}
            </div>
            <div className="customer_question_accordion_second">
                <button
                    className="customer_question_accordion_button"
                    onClick={() =>
                        toggleAccordion('secondAccordion', !accordionOpen.secondAccordion)
                    }
                >
                    <h4>Puis-je payer plus tard ?</h4>
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
                    <div className="customer_question_accordion_paragraph">
                        <p>Bien sûr ! C’est possible la plupart du temps. Nous collaborons avec AfterPay. Ils gèrent pour nous les paiements ultérieurs.</p>
                        <p>La méthode de paiement AfterPay est soutenue aux Pays-Bas, en Belgique et en Allemagne.</p>
                        <ul>
                            <span>Si cela n’est pas possible, c’est dû à un ou plusieurs facteurs :</span>
                            <li>Le montant de la commande est trop élevé</li>
                            <li>Le nombre de commandes que vous avez passées précédemment chez nous</li>
                            <li>La livraison à un point relais</li>
                            <li>La livraison dans un de nos magasins</li>
                            <li>Il n’y a pas d’approbation d’AfterPay</li>
                        </ul>
                        <p>Vous pouvez évidemment compléter votre commande par une autre méthode de paiement. Vous préférez ne pas payer directement ? Alors, le paiement par carte de crédit est déduit lorsque votre article est livré.</p>
                        <p>Pour plus d’informations sur le paiement ultérieur, veuillez consulter www.afterpay.nl.</p>
                    </div>
                ) : null}
            </div>
            <div className="customer_question_accordion_third">
                <button
                    className="customer_question_accordion_button"
                    onClick={() =>
                        toggleAccordion('thirdAccordion', !accordionOpen.thirdAccordion)
                    }
                >
                    <h4>Est-il possible de payer en espèces ?</h4>
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
                            accordionOpen.thirdAccordion ? {transform: 'rotate(180deg)'} : {}
                        }
                    >
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                </button>
                {accordionOpen.thirdAccordion ? (
                    <div className="customer_question_accordion_paragraph">
                        <p>Vous ne pouvez payer qu'en espèces dans nos magasins.</p>
                    </div>
                ) : null}
            </div>
            <div className="customer_question_accordion_fourth">
                <button
                    className="customer_question_accordion_button"
                    onClick={() =>
                        toggleAccordion('fourthAccordion', !accordionOpen.fourthAccordion)
                    }
                >
                    <h4>Est-ce qu'Eleganza rend aussi de l'argent ?</h4>
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
                            accordionOpen.fourthAccordion ? {transform: 'rotate(180deg)'} : {}
                        }
                    >
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                </button>
                {accordionOpen.fourthAccordion ? (
                    <div className="customer_question_accordion_paragraph">
                        <p>Lorsque vous retournez une commande en ligne, nous vous rembourserons l'argent en tout temps. Même avec des articles à prix réduit ! Le remboursement est toujours basé sur le mode de paiement. Le remboursement sera traité dans un délai de 2 jours ouvrables.</p>
                        <p>Lorsque le paiement est effectué avec iDeal, le montant de l'achat sera automatiquement remboursé sur le compte où la commande a été payée. Ensuite, le montant est automatiquement remboursé sur le compte PayPal ou par carte de crédit.
                            Avez-vous opté pour l'AfterPay Payment avec AfterPay ? Dans ce cas, nous annulerons le paiement à AfterPay. La facture créée expirera alors.</p>
                    </div>
                ) : null}
            </div>
            <div className="customer_question_accordion_fifth">
                <button
                    className="customer_question_accordion_button"
                    onClick={() =>
                        toggleAccordion('fifthAccordion', !accordionOpen.fifthAccordion)
                    }
                >
                    <h4>Acceptez-vous des commandes du monde entier ?</h4>
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
                            accordionOpen.fifthAccordion ? {transform: 'rotate(180deg)'} : {}
                        }
                    >
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                </button>
                {accordionOpen.fifthAccordion ? (
                    <div className="customer_question_accordion_paragraph">
                        <p>Oui, nous livrons dans toute l'Europe, l'Asie et l'Amérique. Pour l'Europe, nous offrons la livraison gratuite avec les points d'accès UPS.</p>
                        <p>Vous pouvez payer par différents moyens de paiement internationaux (cartes de crédit, PayPal) et nous expédions les colis avec UPS.</p>
                        <table>
                            <tr>
                                <td>Délais de livraison pour l'Europe :   </td>
                                <td>Dans les 2-3 jours ouvrables</td>
                            </tr>
                            <tr>
                                <td>Délais de livraison pour l'Asie et l'Amérique   </td>
                                <td>Dans les 2 à 5 jours ouvrables</td>
                            </tr>
                        </table>
                        <p>Le client est responsable du retour de la marchandise ; les frais supplémentaires sont à sa charge.</p>
                    </div>
                ) : null}
            </div>
            <div className="customer_question_accordion_sixth">
                <button
                    className="customer_question_accordion_button"
                    onClick={() =>
                        toggleAccordion('sixthAccordion', !accordionOpen.sixthAccordion)
                    }
                >
                    <h4>Acceptez-vous des commandes du monde entier ?</h4>
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
                            accordionOpen.sixthAccordion ? {transform: 'rotate(180deg)'} : {}
                        }
                    >
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                </button>
                {accordionOpen.sixthAccordion ? (
                    <div className="customer_question_accordion_paragraph">
                      <p>Bien entendu, vous pouvez également passer une commande depuis la Belgique. La livraison est gratuite et la livraison sera effectuée le lendemain, comme pour les clients néerlandais. Pour la Belgique, nous proposons les modes de paiement suivants :</p>
                        <ul>
                            <li>ING HomePay</li>
                            <li>Payez ensuite avec AfterPay</li>
                            <li>Belfius</li>
                            <li>Bancontact</li>
                            <li>Carte de crédit</li>
                            <li>PayPal</li>
                        </ul>
                        <p>Pour plus d'informations, veuillez consulter le site www.eleganza-shop.be.....</p>
                    </div>
                ) : null}
            </div>
            <div className="customer_question_accordion_seventh">
                <button
                    className="customer_question_accordion_button"
                    onClick={() =>
                        toggleAccordion('seventhAccordion', !accordionOpen.seventhAccordion)
                    }
                >
                    <h4>Eleganza dispose-t-elle d'un environnement de paiement sécurisé ?</h4>
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
                            accordionOpen.seventhAccordion? {transform: 'rotate(180deg)'} : {}
                        }
                    >
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                </button>
                {accordionOpen.seventhAccordion ? (
                    <div className="customer_question_accordion_paragraph">
                        <p>Oui, lorsque vous entrez dans notre boutique en ligne, vous entrez immédiatement dans un environnement Internet sécurisé. En raison de l'environnement sécurisé, il n'est pas possible de se faufiler. L'adresse et les détails de paiement sont cryptés via une connexion SSL. Vous pouvez reconnaître une connexion SSL sécurisée par le cadenas du navigateur.</p>
                        <p>Le paiement est finalement traité via la plateforme MultiSafePay. Pour plus d'informations à ce sujet, vous pouvez contacter MultiSafePay.</p>
                    </div>
                ) : null}
            </div>
            <div className="customer_question_accordion_eighth">
                <button
                    className="customer_question_accordion_button"
                    onClick={() =>
                        toggleAccordion('eighthAccordion', !accordionOpen.eighthAccordion)
                    }
                >
                    <h4>Est-ce qu'Eleganza travaille avec un chèque frauduleux ?</h4>
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
                            accordionOpen.eighthAccordion ? {transform: 'rotate(180deg)'} : {}
                        }
                    >
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                </button>
                {accordionOpen.eighthAccordion ? (
                    <div className="customer_question_accordion_paragraph">
                        <p>Tous les paiements effectués via la plateforme MultiSafePay sont contrôlés par un système de fraude étendu. De plus, Eleganza vérifie également au hasard les commandes dont le montant de commande est élevé ou les commandes qui n'ont été approuvées qu'après de nombreuses tentatives. De cette façon, nous pouvons continuer à garantir la sécurité des paiements et ainsi prévenir les abus et les fraudes.</p>
                    </div>
                ) : null}
            </div>
        </section>
    )
}

export default CustomerPaymentQuestions