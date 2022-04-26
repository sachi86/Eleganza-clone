import React, {useState} from 'react'
import './cardCategorie.scss'
import {useNavigate} from 'react-router-dom'

function CardCategorie({hit, reduct, tarif2}) {
  const navigate = useNavigate()
  const [img, setImg] = useState(hit.UrlImage2)

  const handChange = () => {
    setImg(hit.UrlImage1)
  }

  const handleInit = () => {
    setImg(hit.UrlImage2)
  }

  const handleClick = () => {
    navigate(`/product/${hit.objectID}`)
  }

  return (
    <div className="bloc" onClick={handleClick}>
      <div className="card">
        {reduct ? (
          <div className="reduction">REDUCTION {`${reduct}`} %</div>
        ) : null}
        <img
          onMouseMove={handChange}
          onMouseLeave={handleInit}
          className="picture"
          height="auto"
          width="350px"
          src={img}
          alt="produit"
        />
      </div>
      <div className="descriptif">
        <span>{hit.Brand}</span>
        <span>{hit.Name}</span>
        <div>
          {tarif2 ? <span className="tarif2">{tarif2} </span> : null}
          <span style={reduct ? {color: '#44CBCB'} : {color: 'black'}}>
            {hit.NetPrice},00 €
          </span>
        </div>
      </div>
    </div>
  )
}

export default CardCategorie
