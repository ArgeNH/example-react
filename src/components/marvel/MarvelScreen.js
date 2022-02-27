import React from 'react'
import { HeroList } from '../hero/HeroList'

export const MarvelScreen = () => {
   return (
      <div className='mt-5'>
         <h1>Marvel Screen</h1>
         <hr />
         <HeroList publisher={'Marvel Comics'}/>
      </div>
   )
}
