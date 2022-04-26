import React, {useEffect, useState} from 'react'
import './cardHomeValentino.scss'

function CardHomeValentino({image, format, handleCard}) {
  const [height, setHeight] = useState('450px')
  const [scale, setScale] = useState(1)
  const [hidden, setHidden] = useState('hidden')

  const handleUp = () => {
    setScale(1.05)
    setHidden('')
  }

  const handleDown = () => {
    setScale(1)
    setHidden('hidden')
  }

  useEffect(() => {
    if (format === 'small') {
      setHeight('230')
    }
  }, [format])
  return (
    <div
      onClick={handleCard}
      onMouseMove={handleUp}
      onMouseLeave={handleDown}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: `${height}px`,
        maxWidth: `350px`,
        backgroundColor: '#EBEBEB',
        margin: '20px',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      <div className="blocCard">
        <img
          style={{transform: `scale(${scale})`, transitionDuration: '0.5s'}}
          src={image}
          alt="produit"
          width="250px"
          height="auto"
        />
        <span style={{visibility: `${hidden}`}} className="valentino">
          VALENTINO
        </span>
      </div>
    </div>
  )
}

export default CardHomeValentino
