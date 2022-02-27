import React from 'react'
import { heroImages } from '../../helpers/heroImages'

export const HeroCard = ({ id, superhero, alter_ego, first_appearance, characters }) => {
   return (
      <div className='col-3 m-5'>
         <div className="card" >
            <img src={heroImages(`./${id}.jpg`)} className="card-img-top" alt={superhero} />
            <div className="card-body">
               <h5 className="card-title">{superhero}</h5>
               <p className="card-text">{alter_ego}</p>
               <p className='text-muted'>{characters}</p>
               <p className='card-text'>
                  <small className='text-mutd'>{first_appearance}</small>
               </p>

               <a href="#" className="btn btn-primary">More...</a>

            </div>
         </div>
      </div>
   )
}
