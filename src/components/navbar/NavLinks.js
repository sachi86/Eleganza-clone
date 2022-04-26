import '../../sass/main.scss'
import React, {useContext} from 'react'
import {navItems} from './NavItems'
import {Link} from 'react-router-dom'
import {dropDowns} from '../Dropdown/dropDownFile'
import Dropdown from '../Dropdown/Dropdown'
import {AnimatePresence, motion} from 'framer-motion'
import {ContextCategory} from '../../contexts/ContextCategory'
import {useLocation, useNavigate} from 'react-router-dom'
const DropDownsContainer = ({selectedLink, id}) => {
  return id === 0 ? null : (
    <motion.div
      exit={{opacity: 0}}
      initial={{opacity: 0, x: -200}}
      animate={{opacity: 1, x: 0}}
      transition={{ease: 'easeOut', duration: 0.3}}
      className={
        selectedLink ? 'dropdown-container' : 'dropdown-container-hidden'
      }
    >
      {dropDowns.at(id - 1).map((dropdownUl, index) => (
        <Dropdown dropDown={dropdownUl} key={index} />
      ))}
    </motion.div>
  )
}

const NavBarLi = ({item}) => {
  const [selectedLink, setSelectedLink] = React.useState(false)
  const onMouseEnter = e => {
    setSelectedLink(true)
  }
  const onMouseLeave = e => {
    setSelectedLink(false)
  }
  const {id, name, link, cName} = item
  return (
    <li
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={selectedLink ? `navbar--li--active ` : 'navbar--li'}
    >
      <Link to={link} className={cName}>
        {name}
      </Link>
      <AnimatePresence>
        {selectedLink && (
          <DropDownsContainer selectedLink={selectedLink} id={id} />
        )}
      </AnimatePresence>
    </li>
  )
}
const MobileNavigationLi = ({hamburger, item, indexNavItems, dispatch}) => {
  const index = indexNavItems - 1
  const item0 = item[0]
  const {step2} = hamburger
  return (
    <li
      className="navbar--li"
      onClick={() => dispatch({type: 'avancer', index: index})}
    >
      <button className="mobile--button">
        <span className="mobile--name">
          {step2 === false ? item.name : item0.title}
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#212121"
          xmlns="http://www.w3.org/2000/svg"
          className="mobile--arrow"
        >
          <path d="M14.2426 12.6569L9.29288 7.70711L10.7071 6.29289L17.0711 12.6569L10.7071 19.0208L9.29288 17.6066L14.2426 12.6569Z"></path>
        </svg>
      </button>
    </li>
  )
}
const MobileDropdownLinks = ({item, closeHamburger}) => {
  const {handleCard} = useContext(ContextCategory)
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const handleClick = title => {
    if (pathname !== '/') {
      navigate('/')
    }
    closeHamburger()
    handleCard('', `${title}`)
  }
  return item.map((itemLink, indexLink) => {
    return (
      <li
        className="navbar--li"
        key={indexLink}
        onClick={() => handleClick(itemLink.title)}
      >
        <div className="mobile--button">
          <span className="mobile--name">{itemLink.title}</span>
        </div>
      </li>
    )
  })
}
export const MobileDropdownstep2 = ({hamburger, dispatch, closeHamburger}) => {
  const {step2} = hamburger
  // je récupère la step qui contient l'index de l'objet qui se trouve dans dropdown.js
  // Pour le premier objet de l'objet correspondant à la step, je veux afficher les objets qu'il contient.
  // Pour les autres objets, je veux qu'ils affichent seulement le premier objet
  return (
    <ul className="navbar-ul">
      {dropDowns[step2].map((item, indexNav) => {
        return indexNav === 0 ? (
          <MobileDropdownLinks
            item={item}
            key={indexNav}
            indexNavItems={indexNav}
            hamburger={hamburger}
            dispatch={dispatch}
            closeHamburger={closeHamburger}
          />
        ) : (
          <MobileNavigationLi
            key={indexNav}
            hamburger={hamburger}
            item={item}
            indexNavItems={indexNav + 1}
            dispatch={dispatch}
          />
        )
      })}
    </ul>
  )
}
export const MobileDropdownstep3 = ({hamburger, closeHamburger}) => {
  const {step2, step3} = hamburger
  const {handleCard} = useContext(ContextCategory)
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const handleClick = title => {
    if (pathname !== '/') {
      navigate('/')
    }
    closeHamburger()
    handleCard('', `${title}`)
  }
  return (
    <ul className="navbar-ul">
      {dropDowns[step2][step3].map((item, indexNav) => {
        return (
          <li
            className="navbar--li"
            key={indexNav}
            onClick={() => handleClick(item.title)}
          >
            <div className="mobile--button">
              <span className="mobile--name">{item.title}</span>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

// Il y a les items du items du menu selectionné selectionné.
// le premier dropdown est déplié et envoyé en lien
// s'il y a d'autres array dans l'array du menu selectionné alors cela renverra
export const NavigationLinks = () => {
  return (
    <ul className="navbar-ul">
      {navItems.map((item, index) => {
        return <NavBarLi item={item} key={index} />
      })}
    </ul>
  )
}
// quand je clique sur un MobileNavigationLi alors il transformera le composant supérieur.
// update du state du composant supp
// step1
export const MobileNavigationLinks = ({hamburger, dispatch}) => {
  return (
    <ul className="navbar-ul">
      {navItems.map((item, index) => {
        return index === 0 ? (
          <li className="navbar--li" key={index}>
            <Link to={item.link} className="mobile--button">
              <span className="mobile--name">{item.name}</span>
            </Link>
          </li>
        ) : (
          <MobileNavigationLi
            item={item}
            key={index}
            indexNavItems={index}
            hamburger={hamburger}
            dispatch={dispatch}
          />
        )
      })}
    </ul>
  )
}
