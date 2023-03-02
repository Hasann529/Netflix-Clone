import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Netflix/Navbar'
import Home from './Home'
import Movie from './Movie'
import MyList from './MyList'
import Recent from './Recent'
import TVShows from './TVShows'

const Netflix = () => {
  return (
    <div className='netflix'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tvshows' element={<TVShows />} />
        <Route path='/recent' element={<Recent />} />
        <Route path='/mylist' element={<MyList />} />
        <Route path='/:movie' element={<Movie />} />
      </Routes>  
    </div>
  )
}

export default Netflix
