import React from 'react'
import { LOGO_URL, NAV_ITEMS } from '../utils/constants'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-container'>
        <div className='logo-container'>
            <img className='logo' src={LOGO_URL} alt='food-logo' />
        </div>
        <div className='nav-container'>
            <ul>
                {NAV_ITEMS.map((item, index)=>{
                    return <li key={index}> <Link to={item.link}>{item.name}</Link></li>
                })}
            </ul>
        </div>
    </div>
  )
}

export default Header