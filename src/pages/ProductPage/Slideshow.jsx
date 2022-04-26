import * as React from 'react'
import {Slide} from 'react-slideshow-image'
import './productpage.scss'
import {ReactComponent as LeftChevron} from '../../assets/productpage/left-chevron.svg'
import {ReactComponent as RightChevron} from '../../assets/productpage/right-chevron.svg'
import {ReactComponent as LightboxButtonClose} from '../../assets/productpage/lightboxButtonClose.svg'
import {ReactComponent as LightboxButtonOpen} from '../../assets/productpage/lightboxButtonOpen.svg'
const Slideshow = ({productImages}) => {
  const slideRef = React.useRef()
  const [clickedImage, setClickedImage] = React.useState(false)

  const properties = {
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    autoplay: false,
    prevArrow: (
      <LeftChevron className="slideshowButton slideshowButton--prev" />
    ),
    nextArrow: (
      <RightChevron className="slideshowButton slideshowButton--next" />
    ),
  }
  const showFullImage = index => {
    setClickedImage(slideRef.current.state.index)
  }
  const hideFullImage = () => {
    setClickedImage(false)
  }
  return (
    <>
      {clickedImage !== false ? (
        <div className="slideshow">
          <div
            className="slideshow__image"
            style={{
              backgroundImage: `url(${productImages[clickedImage]})`,
            }}
          ></div>
          <button className="closeSlideButton" onClick={hideFullImage}>
            <LightboxButtonClose />
          </button>
        </div>
      ) : (
        <div className="slide-container">
          <div className="image__container">
            <Slide ref={slideRef} {...properties}>
              {productImages?.map((slideImage, index) => (
                <div className="each-slide" key={index}>
                  <div style={{backgroundImage: `url(${slideImage})`}}></div>
                </div>
              ))}
            </Slide>
          </div>
          <div>
            <button className="lightbox" onClick={showFullImage}>
              <LightboxButtonOpen />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
export default Slideshow
