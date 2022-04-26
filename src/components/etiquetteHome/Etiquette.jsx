import React, {useState, useEffect} from 'react'
import './etiquette.scss'

function Etiquette({couleur, image, nom, handleCard}) {
  const [opacity, setOpacity] = useState(1)
  const [underline, setUnderline] = useState('')
  const [backgroundColor, setBackgroundColor] = useState('#EBEBEB')

  const handleMouseMove = () => {
    setUnderline('underline')
    setOpacity(0.5)
  }

  const handleMouseLeave = () => {
    setOpacity(1)
    setUnderline('')
  }

  useEffect(() => {
    if (!couleur) {
      return
    }
    setBackgroundColor('#44CBC8')
  }, [couleur])

  return (
    <div
      onClick={handleCard}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="etiquette"
      style={{
        backgroundColor: `${backgroundColor}`,
        textDecoration: `${underline}`,
      }}
    >
      {nom ? (
        <span>{nom}</span>
      ) : (
        <img
          src={image}
          alt="logo"
          width="100%"
          style={{
            opacity: `${opacity}`,
            position: 'absolute',
          }}
        />
      )}
    </div>
  )
}

export default Etiquette
