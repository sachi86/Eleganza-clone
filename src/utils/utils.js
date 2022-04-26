export const BASE_DIR_MEDIA = 'assets'

const CART_KEY = 'cart'

/* Manage Media */
export const getBaseUrlMedia = () => {
  return process.env.PUBLIC_URL + '/' + BASE_DIR_MEDIA
}

export const getFileUrlMedia = fileName => {
  return getBaseUrlMedia() + '/' + fileName
}

/* Manage Cart */
export const calculatePrice = items => {
  return `${items
    .reduce((acc, item) => acc + item.quantity * item.NetPrice, 0)
    .toFixed(2)}`
}

export const calculateQuantityTotal = items => {
  if (items === undefined || items.length === 0) return 0
  return `${items.reduce((acc, item) => acc + item.quantity, 0)}`
}

export const calculateAmount = items => {
  return Number(
    items.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2),
  )
}

export const setCart = (value, cartKey = CART_KEY) => {
  if (localStorage) {
    localStorage.setItem(cartKey, JSON.stringify(value))
  }
}

export const getCart = (cartKey = CART_KEY) => {
  if (localStorage && localStorage.getItem(cartKey)) {
    console.log('getCart')
    console.log(JSON.parse(localStorage.getItem(cartKey)))
    return JSON.parse(localStorage.getItem(cartKey))
  }
  return []
}

export const clearCart = (cartKey = CART_KEY) => {
  if (localStorage) {
    localStorage.removeItem(cartKey)
  }
}
