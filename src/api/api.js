import {gql, request} from 'graphql-request'

const endpoint = process.env.REACT_APP_STRAPI_ENDPOINT

export const fetchChaussureById = async id => {
  try {
    let queryChaussure = gql`
      query Chaussure($id: ID!) {
        chaussure(id: $id) {
          _id
          Name
          Brand
          UrlImage1
          UrlImage2
          UrlImage3
          UrlImage4
          size
          NetPrice
          hauteurTalon
          Couleur
        }
      }
    `
    let variables = {
      id: `${id}`,
    }

    const product = await request(endpoint, queryChaussure, variables)
    product.chaussure.sizeSelected = product?.chaussure.size[0]
    return product
  } catch (e) {
    console.error(e)
  }
}
