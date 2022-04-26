import React, {useContext} from 'react'
import {ContextCategory} from '../../contexts/ContextCategory'
import {useLocation, useNavigate} from 'react-router-dom'
const DropdownLi = ({uldropdown}) => {
  const {handleCard} = useContext(ContextCategory)
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const handleClick = () => {
    if (pathname !== '/') {
      navigate('/')
    }
    handleCard('', `${uldropdown.title}`)
  }
  return (
    <li className={`${uldropdown.cName} dropdown--link`} onClick={handleClick}>
      {uldropdown.title}
    </li>
  )
}

const Dropdown = ({dropDown}) => {
  return (
    <ul className="ulDropdown">
      {dropDown.map((item, index) => {
        return <DropdownLi uldropdown={item} key={index} />
      })}
    </ul>
  )
}

export default Dropdown
