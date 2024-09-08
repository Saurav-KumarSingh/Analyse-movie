import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import {useDispatch} from 'react-redux'
import { fetchMovies,fetchSeries } from '../../features/movieSlice'

const Home = () => {
  const dispatch=useDispatch();

  useEffect(()=>{
    const movieText='Harry';
    const seriesText='Game of Thrones'

    dispatch(fetchMovies(movieText));
    dispatch(fetchSeries(seriesText));
  },[dispatch])

  return (
    <div>
      <MovieListing />
    </div>
  )
}

export default Home