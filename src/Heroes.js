
import { MarvelScreen } from "./components/marvel/MarvelScreen";
import { Navbar } from "./components/navbar/Navbar";

export const Heroes = () => {

   let user = 'Arge';

   return (
      <>
         <Navbar />
         <div className='container mt-2'>
            <h1>Hola bienvenido {user}</h1>
            <MarvelScreen />
         </div>
      </>
   )
}
