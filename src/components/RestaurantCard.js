import React from 'react'
import { LOGO_URL } from '../utils/constants'

const RestaurantCard = () => {
  return (
    <div className='res-card'>

        <img className='res-img' src={LOGO_URL} alt='restaurant image'></img>
        <h2>res name</h2>
        <h3>cuisine</h3>
        <h3><span>price</span><span>rating</span></h3>

    </div>
  )
}

export default RestaurantCard