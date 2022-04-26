import './category.scss'
import React, {useContext} from 'react'
import {Hits, Pagination, RefinementList} from 'react-instantsearch-dom'
import CardCategorie from '../../components/cardCategorie/CardCategorie.jsx'
import {ContextCategory} from '../../contexts/ContextCategory'
function Category() {
  const {changePage, category, marque, shoes} = useContext(ContextCategory)
  if (!changePage) {
    return null
  } else {
    return (
      <div>
        <div className="search">
          <div>
            <h3>Marque</h3>
            <RefinementList
              attribute="Brand"
              defaultRefinement={!marque ? null : [`${marque}`]}
            />
            <h3>Couleur</h3>
            <RefinementList attribute="Couleur" />
            <h3>Categorie</h3>
            <RefinementList
              attribute="Category"
              defaultRefinement={!category ? null : [`${category}`]}
            />
            <h3>Chaussure</h3>
            <RefinementList
              attribute="type"
              defaultRefinement={
                shoes ? ['Sneaker basse', 'Baskets montantes'] : null
              }
            />
          </div>

          <div className="right">
            <Hits hitComponent={CardCategorie} />
            <div className="pagination">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Category
