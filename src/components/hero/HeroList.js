import React from 'react'

import { getHeroByPublisher } from '../../helpers/getHeroByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

   const heroes = getHeroByPublisher(publisher);

   return (
      <div className='row'>
         {
            heroes.map(hero => (
               <HeroCard key={hero.id} {...hero} />
            ))
         }
      </div>
   )
}
