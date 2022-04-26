import React from 'react'
import './SummaryOrder.scss'
import {CartContext} from '../../../contexts/CartContext'
import {calculatePrice} from '../../../utils/utils'
import {ReactComponent as EditSummary} from '../../../assets/editcheckout.svg'
import {Link} from 'react-router-dom'
const CardProductSummary = ({item}) => {
  return (
    <div className="summaryOrder--container">
      <div className="summaryOrder--containerFirst">
        <div className="summaryOrder--image">
          <img
            src={item.UrlImage1}
            className="summaryOrder--image1"
            alt={item.Name}
          />
        </div>
        <div className="summaryOrder--info">
          <Link to={`/product/${item._id}`} className="summaryOrder--link">
            {item.quantity}x {item.Name}{' '}
          </Link>

          <p className="summaryOrder--size">
            {' '}
            <span> Size:</span> {item.sizeSelected}
          </p>
        </div>
      </div>
      <div className="summaryOrder--info__price">
        <p>€{item.NetPrice}</p>
      </div>
    </div>
  )
}

const SummaryOrder = () => {
  const [cartInfo] = React.useContext(CartContext)
  return (
    <div className="cartInfo--container">
      <div className="cartInfo--titleContainer">
        <h4 className="cartInfo--title">Summary of your order</h4>
        <button className="editSummary--button">
          <EditSummary className="editSummary--svg" />
        </button>
      </div>
      <div className="items--container">
        {cartInfo.cartItems.map((item, index) => {
          return <CardProductSummary item={item} key={index} />
        })}
      </div>
      <div className="summaryOrder--shipping">
        <p className="summaryOrder--shipping--title">Shipping</p>
        <p className="summaryOrder--shipping--price">Free</p>
      </div>
      <div className="summaryOrder--total">
        <div className="summaryOrder--total__text">
          {' '}
          <p>Total ({cartInfo.nbProduct} product)</p>
          <p className="summaryOrder--tva"> (TVA incluse) </p>
        </div>

        <p className="summaryOrder--total__price">
          {' '}
          {calculatePrice(cartInfo.cartItems)} €
        </p>
      </div>
    </div>
  )
}

export default SummaryOrder
