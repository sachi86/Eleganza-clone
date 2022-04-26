import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as OkTag} from '../../assets/productpage/okTag.svg'
import {CartContext} from '../../contexts/CartContext'
import {calculateQuantityTotal, setCart} from '../../utils/utils'

const ProductForm = ({product, objectId}) => {
  const [selectedTaille, setSelectedTaille] = React.useState(false)
  const [cartInfo, setCartInfo] = React.useContext(CartContext)
  // pour test : 620fedaffe82e281709a03a5 / 620fef5dfe82e281709a0439
  const updatePanier = updatedItems => {
    let updatedCartInfo = {
      cartItems: updatedItems,
      nbProduct: calculateQuantityTotal(updatedItems),
    }
    setCartInfo(updatedCartInfo)
    setCart(updatedCartInfo)
  }
  const addToCart = e => {
    e.preventDefault()
    let updatedItems
    if (cartInfo.length === 0) {
      updatedItems = [
        {
          ...product,
          quantity: 1,
          sizeSelected: selectedTaille,
        },
      ]
    } else {
      const alreadyInCart = cartInfo.cartItems
        ? cartInfo.cartItems.findIndex(item => {
            return item._id === objectId && item.sizeSelected === selectedTaille
          })
        : -1

      if (alreadyInCart === -1) {
        console.log('enter first if add to cart')
        updatedItems = cartInfo.cartItems.concat({
          ...product,
          sizeSelected: selectedTaille,
          quantity: 1,
        })
      } else {
        console.log('enter else add to cart')
        updatedItems = [...cartInfo.cartItems]
        updatedItems[alreadyInCart].quantity += 1
      }
    }
    updatePanier(updatedItems)
  }
  const handleChange = e => {
    console.log(e.target.value)
    setSelectedTaille(e.target.value)
  }
  const size = product.size
  return (
    <section className="productpage--info">
      <h2 className="productpage--info--marque">
        <Link to={`/designers/${product?.Brand}`}>{product?.Brand}</Link>
      </h2>
      <div className="productpage--info--name">{product?.Name}</div>
      <div className="productpage--info--price">{product?.NetPrice} €</div>
      <div className="productpage--info--shipping">
        <OkTag />
        <span className="productpage--info--shipping--text">
          Gratuit et rapide envoyé en france
        </span>
      </div>
      <form onSubmit={addToCart}>
        <div className="productpage--info--size">
          {size === null ? null : (
            <>
              <div className="productpage--info--size--title">Taille</div>
              <div className="productpage--info--size--list">
                {size.map((taille, index) => (
                  <div key={`custom-div-${index}`}>
                    <input
                      type="radio"
                      name="taille-checkbox"
                      key={`custom-radio-${index}`}
                      id={`custom-radio-${index}`}
                      className="productpage--info--size--list--input"
                      value={taille}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor={`custom-radio-${index}`}
                      className="productpage--info--size--title"
                      key={`custom-label-${index}`}
                    >
                      {taille}
                    </label>
                  </div>
                ))}
              </div>
            </>
          )}

          <button type="submit" className="productpage--info--addToCart">
            Add to cart
          </button>
        </div>
      </form>
    </section>
  )
}

export default ProductForm
