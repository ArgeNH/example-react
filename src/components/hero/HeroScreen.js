import { useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../../helpers/getHeroById";
import { heroImages } from "../../helpers/heroImages";

export const HeroScreen = () => {

   const navigate = useNavigate();

   const { heroId } = useParams();

   const hero = getHeroById(heroId);
   console.log(hero);
   const { id, superhero, publisher, first_appearance, characters } = hero;

   const handleReturn = () => {
      navigate(-1);
   }

   return (
      <div className='mt-2'>
         <h1>HeroScreen</h1>
         <hr />
         <p>
            Params : <b>{heroId}</b>
         </p>
         <hr />
         <div className="card">
            <div className="row g-0">
               <div className="col-md-4">
                  <img src={heroImages(`./${id}.jpg`)} className="img-fluid rounded-start" alt={superhero} />
               </div>
               <div className="col-md-8">
                  <div className="card-body">
                     <h5 className="card-title">{superhero}</h5>
                     <p className="card-text">{publisher}</p>
                     <p className="card-text">{characters}</p>
                     <p className="card-text"><small className="text-muted">{first_appearance}</small></p>
                     <button
                        className="btn btn-outline-info"
                        onClick={handleReturn}
                     >
                        Return
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}