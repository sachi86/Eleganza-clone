import * as React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import 'react-slideshow-image/dist/styles.css'
import './productpage.scss'
import ProductForm from './ProductForm'
import AccordionProduct from './AccordionProduct'
import {fetchChaussureById} from '../../api/api'
import Slideshow from './Slideshow'

const Productpage = () => {
  const [product, setProduct] = React.useState(false)
  const [isDataLoading, setDataLoading] = React.useState(true)
  let {objectId} = useParams()
  const navigate = useNavigate()
  // const chaussureId = '621364da7e3822001670bbce'
  React.useEffect(() => {
    async function fetchData() {
      setDataLoading(true)
      try {
        const {chaussure} = await fetchChaussureById(objectId)
        let productImages = []
        for (const [, value] of Object.entries(chaussure)) {
          if (typeof value === 'string' && value.match(/^http/)) {
            productImages.push(value)
          }
        }
        setProduct({
          ...chaussure,
          productImages: productImages,
        })
      } catch (err) {
        console.log(err)
        navigate('/404')
      } finally {
        setDataLoading(false)
      }
    }
    fetchData()
  }, [navigate, objectId])
  return (
    <>
      {isDataLoading ? (
        <div className="loader__container">
          <div className="productpage__loader "></div>
        </div>
      ) : (
        <div className="productpage--body">
          <Slideshow productImages={product?.productImages} />

          <div className="productpage--blockInfo">
            <ProductForm objectId={objectId} product={product} />
            <AccordionProduct product={product} />
          </div>
        </div>
      )}
    </>
  )
}

export default Productpage
