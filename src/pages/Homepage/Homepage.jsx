import React, {useContext} from 'react'
import CardHome from '../../components/cardHomePage/CardHome'
import Etiquette from '../../components/etiquetteHome/Etiquette'
import CardHomeValentino from '../../components/cardHomePage/CardHomeValentino'
import CardImage from '../../components/cardHomePage/CardImage'
import Category from '../Category/Category'
import './homepage.scss'
import {ContextCategory} from '../../contexts/ContextCategory'
function Homepage() {
  const {changePage, handleCard} = useContext(ContextCategory)
  if (changePage) {
    return <Category />
  }
  return (
    <div className="homepage">
      <div className="ligne">
        <CardHome
          title1="Nouvelles"
          title2="Marques"
          image="https://static.eleganza-shop.com/media/experius/content/block/MERCER_Banner.png"
          format="large"
          handleCard={() => handleCard('', 'Alexander McQueen')}
        />
        <CardHome
          title1="Vêtements"
          title2="Pour"
          title3="Kids"
          image="https://static.eleganza-shop.com/media/experius/content/block/0T7A1648_1_.png"
          format="large"
          handleCard={() => handleCard('Kids')}
        />
      </div>
      <div className="ligne">
        <div className="ligne-etiquette">
          <CardHome
            title1="Chaussures"
            title2="Hommes"
            image="https://static.eleganza-shop.com/media/experius/content/block/0T7A1589.png"
          />
          <CardHome
            title1="Chaussures"
            title2="Femmes"
            image="https://static.eleganza-shop.com/media/experius/content/block/Foto_14-04-2021_om_12.16_1_1_1_.png"
            handleCard={() => handleCard('Femme', '', 'ok')}
          />
        </div>

        <CardHome
          title1="Vetements"
          title2="Pour"
          title3="Hommes"
          image="https://static.eleganza-shop.com/media/experius/content/block/Palm_4_Aspect_16x9_1_.png"
          format="large"
          handleCard={() => handleCard('Homme')}
        />
      </div>
      <div className="ligne">
        <div className="ligne-etiquette">
          <Etiquette
            image="https://static.eleganza-shop.com/media/experius/content/block/PalmAngelsLogo_1.png"
            handleCard={() => handleCard('', 'Palm Angels')}
          />
          <Etiquette
            image="https://static.eleganza-shop.com/media/experius/content/block/IsabelMarant2.png"
            handleCard={() => handleCard('', 'Isabel Marant')}
          />
        </div>
        <div className="ligne-etiquette">
          <Etiquette
            image="https://static.eleganza-shop.com/media/experius/content/block/BalenciagaMedium.png"
            handleCard={() => handleCard('', 'Balenciaga')}
          />
          <Etiquette couleur="vert" nom="OUTLET" />
        </div>
      </div>
      <div className="ligne">
        <CardHome
          image="https://static.eleganza-shop.com/media/experius/content/block/WEB-Valentino_1_.png"
          format="large"
          notitle="ok"
          handleCard={() => handleCard('', 'Valentino')}
        />
        <div className="ligne-etiquette">
          <div className="ligne-vertical">
            <CardHomeValentino
              image="https://static.eleganza-shop.com/media/catalog/product/0/1/018881_1_21a5.png?scale.width=1600&scale.height=235&format=optimal"
              format="small"
              handleCard={() => handleCard('', 'Valentino')}
            />
            <CardHomeValentino
              image="https://static.eleganza-shop.com/media/catalog/product/0/1/018882_1_1337.png?scale.width=1600&scale.height=235&format=optimal"
              format="small"
              handleCard={() => handleCard('', 'Valentino')}
            />
          </div>

          <CardHomeValentino
            image="https://static.eleganza-shop.com/media/catalog/product/0/1/018851_1_d442.png?scale.width=1600&scale.height=235&format=optimal"
            handleCard={() => handleCard('', 'Valentino')}
          />
        </div>
      </div>
      <div className="last-line">
        <CardHome format="large" text="ok" />
        <CardImage picture="https://static.eleganza-shop.com/media/experius/content/block/0T7A9698_1__1.png" />
      </div>
    </div>
  )
}

export default Homepage
