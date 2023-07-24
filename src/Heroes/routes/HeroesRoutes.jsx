import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import DCPage from '../pages/DCPage'
import HeroePage from '../pages/HeroePage'
import MarvelPage from '../pages/MarvelPage'
import SearchHeroe from '../pages/SearchHeroe'

const HeroesRoutes = () => {
  
  return (
    <>
        <Navbar/>

        <div className="container animate__animated animate__backInRight">
          <Routes>
              <Route path="marvel" element={<MarvelPage />} />
              <Route path="dc" element={<DCPage />} />
              <Route path="search" element={<SearchHeroe />} />
              <Route path="heroe/:id" element={<HeroePage />} />
              
              <Route path="/" element={<Navigate to='/marvel' />} />
          </Routes>
        </div>
    </>
  )
}

export default HeroesRoutes