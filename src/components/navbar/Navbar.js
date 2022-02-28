import { Link } from "react-router-dom"

export const Navbar = () => {
   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         <div className="container">

            <Link  to='/' className="navbar-brand">Heroes APP</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
               <div className="navbar-nav">

                  <Link to='/marvel' className="nav-link">Marvel</Link>

                  <Link to='/dc' className="nav-link">DC</Link>

               </div>
            </div>
         </div>
      </nav>
   )
}