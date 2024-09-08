import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movieSlice';
import MovieCard from '../MovieCard/MovieCard';

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  // Error Handling
  const hasMovieError = movies?.Error;
  const hasShowError = shows?.Error;

  if (hasMovieError || hasShowError) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="text-center px-4 py-8">
          {/* Illustration */}
          <div className="flex justify-center mb-6">
            <img
              src="https://imgs.search.brave.com/j6vC9YaemPXf9QkhgMfoMqmrKptrHFsyGIr2ZVzhobo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvOC9NYWdu/aWZ5aW5nLUdsYXNz/LVNlYXJjaC1QTkct/SW1hZ2UtRmlsZS5w/bmc"
              alt="Error illustration"
              className="w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-96 lg:h-96"
            />
          </div>

          {/* Text Content */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-4">
            {hasMovieError || hasShowError}
          </h1>
          <p className="text-gray-300 mt-2 text-sm sm:text-base md:text-lg lg:text-xl">
            We couldn’t find what you searched for. Try searching again or check your connection.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className=" text-white min-h-screen py-8">
      <div className="max-w-6xl mx-auto ">
        {/* Movies Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Movies</h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {movies?.Search?.map((movie, index) => (
              <MovieCard key={index} data={movie} />
            ))}
          </div>
        </div>

        {/* Shows Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">Series</h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {shows?.Search?.map((show, index) => (
              <MovieCard key={index} data={show} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
