
import { heroImages } from '../../helpers/heroImages'

export const HeroCard = ({ id, superhero, first_appearance }) => {
   return (
      <div className='col-md-3 ml-5 mb-2'>
         <div className="card" >
            <img src={heroImages(`./${id}.jpg`)} className="card-img-top" alt={superhero} />
            <div className="card-body">
               <h5 className="card-title">{superhero}</h5>
               <p className='card-text'>
                  <small className='text-muted'>{first_appearance}</small>
               </p>

               <a href="#" className="btn btn-primary">More...</a>

            </div>
         </div>
      </div>
   )
}
