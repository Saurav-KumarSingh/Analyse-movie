import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './component/Home/Home'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import MovieDetails from './component/MovieDetails/MovieDetails'
import PageNotFound from './component/PageNotFound/PageNotFound'
const App = () => {
  return (
    <div className='min-h-screen'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:imdbID' element={<MovieDetails/>}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App