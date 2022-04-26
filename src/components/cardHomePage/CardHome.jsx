import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
import {useEffect, useState} from 'react'
import './cardHome.scss'

function CardHome({
  title1,
  title2,
  title3,
  image,
  format,
  notitle,
  backgroundColor,
  text,
  handleCard,
}) {
  const [up, setUp] = useState(false)
  const [scale, setScale] = useState(1)
  const [width, setWidth] = useState('300px')
  const [height, setHeight] = useState('500px')
  const [background, setBackground] = useState('')

  const handleUp = () => {
    setUp(true)
    setScale(1.08)
  }

  const handleDown = () => {
    setUp(false)
    setScale(1)
  }

  useEffect(() => {
    setBackground('#EBEBEB')
  }, [backgroundColor])

  useEffect(() => {
    if (format === 'large') {
      setWidth('630px')
    }
    if (format === 'small') {
      setHeight('235px')
    }
  }, [format])

  return (
    <div
      onClick={handleCard}
      className="cardHome"
      onMouseMove={handleUp}
      onMouseLeave={handleDown}
      style={{
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        height: `${height}`,
        width: `${width}`,
        margin: '20px',
        backgroundColor: `${background}`,
      }}
    >
      {text ? (
        <div className="text">
          <h1 className="text-title">Eleganza</h1>
          <p className="paragraph">
            Sur ELEGANZA, vous achetez en ligne des chaussures et des vêtements
            pour hommes parmi les marques de luxe de designers haut de gamme
            dans le monde. Nous proposons notamment les baskets Alexander
            McQueen, Balanciaga, Dsquared2, Isabel Marant et Mason Garments.
            Nous vendons également les bottines UGG mini Classic ou les
            dernières bottines Nubikk. Nous avons également le concept store
            OBLIQUE à Utrecht où nous vendons également des chaussures et des
            baskets vendons des vestes de Canada Goose ou Moncler, les jeans de
            Dsquared2 et Balmain, les survêtements de sport de Clan de Banlieue,
            les t-shirts de Givenchy et Valentino, les chandails à capuchon et
            les pulls de Stone Island et In Gold We Trust.
          </p>
        </div>
      ) : (
        <div className="card-text">
          <p className="titre-card">
            <span className="title">{title1}</span>
            <span className="title">{title2}</span>
            <span className="title">{title3}</span>

            {up ? (
              notitle ? null : (
                <p className="buy">
                  Achetez <FontAwesomeIcon icon={faLongArrowAltRight} />
                </p>
              )
            ) : null}
          </p>
        </div>
      )}
      {image ? (
        <img
          src={image}
          alt="produit"
          height={height}
          width="100%"
          style={{
            position: 'absolute',
            transform: `scale(${scale})`,
            transitionDuration: '1s',
          }}
        />
      ) : null}
    </div>
  )
}

export default CardHome
