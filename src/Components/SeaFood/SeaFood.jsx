import React from 'react'
import Banner from '../Banner/Banner'
import BgSeaFood from '../../assets/seafood-banner.jpg'
import CategoryPage from '../CategoryPage/CategoryPage'

const SeaFood = () => {
  return (
    <div>
     <CategoryPage  title="Meet & SeaFood" bgImage={BgSeaFood} categories={['Meat','SeaFood']} />
    </div>
  )
}

export default SeaFood