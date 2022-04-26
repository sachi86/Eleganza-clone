import React, {useEffect, useState} from 'react'
import {Slide} from 'react-slideshow-image'
import './shippingmethod.scss'
import {ReactComponent as LeftChevron} from '../../../assets/productpage/left-chevron.svg'
import {ReactComponent as RightChevron} from '../../../assets/productpage/right-chevron.svg'
function getWindowDimensions() {
  const {innerWidth: width} = window
  return width
}
const MultipleSlidesExample = () => {
  const style = {
    padding: '10px',
  }
  const [slideToShow, setSlideToShow] = useState(3)

  useEffect(() => {
    function handleResize() {
      if (getWindowDimensions() < 1200) {
        setSlideToShow(2)
      }
      if (getWindowDimensions() < 600) {
        setSlideToShow(1)
      }
      if (getWindowDimensions() > 1200) {
        setSlideToShow(3)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const properties = {
    duration: 3000,
    slidesToShow: slideToShow,
    slidesToScroll: slideToShow,
    infinite: false,
    autoplay: false,
    indicators: false,
    prevArrow: <LeftChevron className="slideshowButtonShipping " />,
    nextArrow: <RightChevron className="slideshowButtonShipping " />,
  }

  return (
    <Slide {...properties}>
      <div style={style} className="delivery--wrapper">
        <label htmlFor="gls1" className="delivery--contrainer">
          <div className="delivery--title">
            <h5> GLS</h5>
            <span> Free </span>
          </div>
          <div className="delivery--date">
            <p>
              GLS Home Delivery Thursday, {Date.now()}
              <br />
              08:00 - 17:00
            </p>
          </div>
          <input id="gls1" value="gls1" type="radio" name="delivery" />
        </label>
      </div>
      <div style={style} className="delivery--wrapper">
        <label htmlFor="gls2" className="delivery--contrainer">
          <div className="delivery--title">
            <h5> GLS</h5>
            <span> Free </span>
          </div>
          <div className="delivery--date">
            <p>
              GLS Home Delivery Thursday, {Date.now()}
              <br />
              08:00 - 17:00
            </p>
          </div>
          <input id="gls2" value="gls2" type="radio" name="delivery" />
        </label>
      </div>
      <div style={style} className="delivery--wrapper">
        <label htmlFor="gls3" className="delivery--contrainer">
          <div className="delivery--title">
            <h5> GLS</h5>
            <span> Free </span>
          </div>
          <div className="delivery--date">
            <p>
              GLS Home Delivery Thursday, {Date.now()}
              <br />
              08:00 - 17:00
            </p>
          </div>
          <input id="gls3" value="gls3" type="radio" name="delivery" />
        </label>
      </div>
      <div style={style} className="delivery--wrapper">
        <label htmlFor="gls4" className="delivery--contrainer">
          <div className="delivery--title">
            <h5> GLS</h5>
            <span> Free </span>
          </div>
          <div className="delivery--date">
            <p>
              GLS Home Delivery Thursday, {Date.now()}
              <br />
              08:00 - 17:00
            </p>
          </div>
          <input id="gls4" value="gls4" type="radio" name="delivery" />
        </label>
      </div>
    </Slide>
  )
}
const ShippingMethod = () => {
  const [deliveryMethod, setDeliveryMethod] = useState(false)
  return (
    <div className="shipping--container">
      <h4 className="shipping--titleFirst">2. Shipping method</h4>
      {deliveryMethod ? null : (
        <>
          <h5 className="shipping--titleSec">Delivered at home</h5>
          <MultipleSlidesExample />
          <button
            type="button"
            onClick={() => setDeliveryMethod(!deliveryMethod)}
            className="delivery--next"
          >
            {' '}
            Next{' '}
          </button>
        </>
      )}
    </div>
  )
}

export default ShippingMethod
