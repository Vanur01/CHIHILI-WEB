import SavedForLater from '@/components/cart/SavedForLater'
import ShoppingCart from '@/components/cart/ShoppingCart'
import PeopleBought from '@/components/PeopleBought'
import React from 'react'

const cartDetails = () => {
  return (
    <div>
      <ShoppingCart/>
      <SavedForLater/>
      <PeopleBought/>

    </div>
  )
}

export default cartDetails