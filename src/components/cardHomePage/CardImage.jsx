import React from 'react'

function CardImage({picture}) {
  return (
    <div style={{margin: '20px'}}>
      <img src={picture} alt="produits" height="360px" width="620px" />
    </div>
  )
}

export default CardImage
