import React, {createContext, useState} from 'react'
export const ContextCategory = createContext()

const ContextCategoryProvider = props => {
  const [changePage, setChangePage] = useState(false)
  const [category, setCategory] = useState('')
  const [marque, setMarque] = useState('')
  const [shoes, setShoes] = useState('')
  const handleCard = (category, marque, shoes) => {
    setCategory(category)
    setMarque(marque)
    setShoes(shoes)
    setChangePage(true)
  }

  return (
    <ContextCategory.Provider
      value={{
        changePage,
        setChangePage,
        category,
        setCategory,
        marque,
        setMarque,
        shoes,
        setShoes,
        handleCard,
      }}
    >
      {props.children}
    </ContextCategory.Provider>
  )
}
export default ContextCategoryProvider
