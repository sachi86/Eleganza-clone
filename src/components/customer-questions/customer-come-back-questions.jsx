import React from 'react'
import './customer-questions.scss'
const CustomerComeBackQuestions = () => {
    const [accordionOpen, setAccordionOpen] = React.useState({
        firstAccordion: false,
        secondAccordion: false,
        thirdAccordion: false,
        fourthAccordion: false,
        fifthAccordion: false,
        sixthAccordion: false,

    })
    const toggleAccordion = (accordion, index) => {
        setAccordionOpen({
            ...accordionOpen,
            [accordion]: index,
        })
    }
    return (
        <section className="customer_question_accordion">
            <h3 className="customer_question_accordion_title">Questions sur l'échange et le retour d'une commande</h3>
            <div className="customer_question_accordion_first">
                <button
                    className="customer_question_accordion_button"
                    onClick={() =>
                        toggleAccordion('firstAccordion', !accordionOpen.firstAccordion)
                    }
                >
                    <h4>Comment puis-je retourner ma commande ?</h4>
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
                       <p>Remplissez le formulaire de retour, ajoutez-le à l'envoi et emballez correctement le colis. Assurez-vous que le contenu de l'emballage n'est pas visible à l'extérieur de l'emballage.</p>
                        <p>Vous pouvez retourner le colis à un bureau de poste local ou à un point d'accès UPS. Le colis sera alors muni d'une étiquette d'expédition. Il est important que vous conserviez le reçu avec le code Track&Trace de l'envoi, au cas où il y aurait des incertitudes à ce sujet plus tard.</p>
                        <p>Avec ce code, il est possible de suivre le processus d'expédition du colis via le site www.mijnpakket.nl..... De cette façon, vous pouvez voir quand le colis est arrivé à destination.</p>
                        <p>Lorsque vous retournez votre commande ou avez indiqué de la retourner, le montant vous sera remboursé sur votre compte dès que possible, mais au plus tard dans les 2 jours ouvrables. Nous ne pouvons rembourser le montant que si nous avons reçu l'envoi de retour ou si vous pouvez prouver que vous nous avez retourné le colis. </p>
                        <p>Si votre commande est retournée endommagée, nous ne pouvons malheureusement pas vous rembourser le montant total. Pour toute autre question, vous pouvez contacter notre service clientèle en envoyant un e-mail à webshop@eleganza.nl </p>
                        <p>Vous trouverez ci-dessous notre adresse de retour :</p>
                        <p>EQ Retail</p>
                        <p>Groenekanseweg 10</p>
                        <p>3737 AG GROENEKAN</p>
                        <p>NETHERLANDS</p>
                        <p>Les frais de retour sont à la charge du client.</p>
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
                    <h4>Puis-je également échanger ou renvoyer des articles en solde ?</h4>
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
                        <p>Oui, c’est possible. Si vous avez commandé un article en solde chez nous dans la boutique en ligne et si cet article ne vous plaît pas, vous pouvez le renvoyer. Nous remboursons alors le montant d’achat. Attention ! Nous pouvons uniquement accepter des articles qui n’ont pas été portés et qui sont renvoyés dans le délai de retour.</p>
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
                    <h4>Dans combien de jours puis-je échanger ou retrourner ma commande ?</h4>
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
                        <p>Après réception, vous avez 14 jours pour retourner le colis.</p>
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
                    <h4>Comment fonctionne un remboursement ?</h4>
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
                       <p>Nous traitons toujours le remboursement de la même manière que la commande a été passée. Avez-vous payé la commande par virement bancaire ? Ensuite, le paiement du retour sera remboursé sur le même numéro de compte. Payez-vous par carte de crédit ? Ensuite, le paiement du retour sera déduit du compte de la carte de crédit. Si vous avez choisi PayPal, le montant du retour sera crédité sur votre compte PayPal.</p>
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
                    <h4>Condition générales de retour</h4>
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
                       <p className="customer_question_accordion_paragraph_bold">Voici un aperçu de nos conditions de retour :</p>
                        <p>Vous disposez d'un délai de rétractation de 14 jours pour révoquer l'accord. Sans raison. Il s'agit de votre " droit de rétractation ". Pendant la période d'essai, vous pouvez voir l'article comme dans un magasin.</p>
                        <p className="customer_question_accordion_paragraph_bold">Comment utiliser le droit de rétractation :</p>
                        <p>en le faisant savoir au service à la clientèle.
                            via l'une de nos boutiques Eleganza
                            en retournant l'article à l'aide du formulaire de retour
                            Vous ne pouvez retourner l'article que si :</p>
                        <p className="customer_question_accordion_paragraph_bold">l'élément est complet.</p>
                        <p>Il est dans son état d'origine et dans son emballage d'usine.
                            *Si une dépréciation survient parce que vous avez utilisé l'article d'une manière différente de celle que vous l'auriez fait dans un magasin, nous pouvons vous transmettre cette dépréciation.</p>
                        <p className="customer_question_accordion_paragraph_bold">Les retours ne sont pas possibles pour les noms de domaine en :

                        </p>
                        <p>Les articles qui ont été portés de leur propre initiative.
                            Articles retournés après la période de réflexion de 14 jours
                            Articles qui ne contiennent plus d'étiquette de sécurité
                            Formulaire de retour
                            Vous trouverez le formulaire de retour avec votre commande. Vous avez perdu le formulaire ? Pas de problème ! Veuillez contacter notre service clientèle. Ils vous renverront le formulaire de retour.</p>
                        <p className="customer_question_accordion_paragraph_bold">Remboursement</p>
                        <p>Vous recevrez un courriel de notre part dès que nous aurons traité votre retour. Nous vous rembourserons le montant dans les trois jours ouvrables suivant le traitement de votre retour. Nous vous rembourserons avec le même moyen de paiement que celui que vous avez utilisé pour payer l'article. Si vous avez payé avec un bon cadeau, nous ne payons pas la valeur du bon. Vous pouvez dépenser le crédit (après avoir traité votre retour) avec nous à nouveau.</p>
                    </div>
                ) : null}
            </div>
        </section>
    )
}

export default CustomerComeBackQuestions