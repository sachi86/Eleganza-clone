import './App.scss'
import Header from './components/header/Header'
import Homepage from './pages/Homepage/Homepage.jsx'
import CheckoutPage from './pages/Checkout/CheckoutPage.jsx'
import Footer from './components/Footer/Footer.jsx'
import PageError from './pages/PageError/PageError.jsx'
import FreeDelivery from './pages/FreeDelivery/FreeDevilevry'
import React, {useEffect, useContext} from 'react'
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from 'react-router-dom'
import SignInModalsContextProvider from './contexts/SignInModalsContext.jsx'
import CartContextProvider from './contexts/CartContext.jsx'
import Productpage from './pages/ProductPage/Productpage.jsx'
import {InstantSearch} from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'
import {ContextCategory} from './contexts/ContextCategory'
export const ThemeContext = React.createContext('')

function App() {
  const initTheme = () => {
    let themeValue = {
      overlay: false,
    }
    return themeValue
  }
  const [themeValue, setThemeValue] = React.useState(() => initTheme())
  const theme = [themeValue, setThemeValue]
  const [search, setSearch] = React.useState(false)
  const [input, setInput] = React.useState(false)
  const {setChangePage} = useContext(ContextCategory)
  const navigate = useNavigate()
  let location = useLocation()
  const handleChange = () => {
    setInput(true)
  }

  const handleClick = e => {
    e.preventDefault()

    if (!input) {
      return
    }
    if (location !== '/') {
      navigate(`/`)
    }
    setSearch(true)
  }

  const handleLogo = () => {
    setChangePage(false)
  }

  useEffect(() => {
    if (!search) {
      return
    }
    setChangePage(true)
  }, [search, setChangePage])

  const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_KEY,
    process.env.REACT_APP_ALGOLIA_ID,
  )

  return (
    <div id="App">
      <ThemeContext.Provider value={theme}>
        <CartContextProvider>
          <InstantSearch searchClient={searchClient} indexName="dev_eleganza">
            <SignInModalsContextProvider>
              <Header
                handleClick={handleClick}
                handleChange={handleChange}
                handleLogo={handleLogo}
              />
            </SignInModalsContextProvider>
            <Routes>
              <Route path={'/' || ''} element={<Homepage />} />
              <Route exact path="/checkout" element={<CheckoutPage />} />
              <Route
                exact
                path="/product/:objectId"
                element={<Productpage />}
              />
              <Route path="/404" element={<PageError />} />
              <Route path="*" element={<Navigate replace to="/404" />} />
              <Route path="/free-delivery" element={<FreeDelivery />} />
            </Routes>
          </InstantSearch>
          <Footer />
          {themeValue.overlay ? <div id="overlay" className="overlay" /> : null}
        </CartContextProvider>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
