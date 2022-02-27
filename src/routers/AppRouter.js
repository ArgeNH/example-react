import { BrowserRouter, Route, Routes } from "react-router-dom"

import { DcScreen } from "../components/dc/DcScreen"
import { HeroScreen } from "../components/hero/HeroScreen"
import { MarvelScreen } from "../components/marvel/MarvelScreen"
import { Navbar } from "../components/navbar/Navbar"

export const AppRouter = () => {
   return (
      <BrowserRouter>
         <Navbar />
         <div className="container">
            <Routes>
               <Route path="/" element={<MarvelScreen />} />
               <Route path="/marvel" element={<MarvelScreen />} />
               <Route path="/dc" element={<DcScreen />} />
               <Route path="/hero/:heroId" element={<HeroScreen />} />
            </Routes>
         </div>
      </BrowserRouter>
   )
}
