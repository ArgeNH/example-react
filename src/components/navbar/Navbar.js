

export const Navbar = () => {
   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         <div className="container">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
               <div className="navbar-nav">
                  <a className="nav-link" href="#">Marvel</a>
                  <a className="nav-link" href="#">DC</a>
               </div>
            </div>
         </div>
      </nav>
   )
}
