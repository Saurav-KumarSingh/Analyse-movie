import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieOrShowDetail, getMovieOrShowDetail } from '../../features/movieSlice';

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { imdbID } = useParams();
  const data = useSelector(getMovieOrShowDetail);
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);

  useEffect(() => {
    if (imdbID) {
      dispatch(fetchMovieOrShowDetail(imdbID));
    }
  }, [dispatch, imdbID]);

  if (loading) {
    return (
      <div className='mt-60 ml-[40vw]'>
        <div aria-label="Loading..." role="status" className="flex items-center">
        <svg className="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
          <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
          <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round"
            strokeWidth="24"></line>
          <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
          </line>
          <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
            strokeWidth="24"></line>
          <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
          </line>
          <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
            strokeWidth="24"></line>
          <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
          <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
          </line>
        </svg>
        <span className="text-4xl font-medium text-gray-500">Loading...</span>
      </div>
      </div>
    );
  }

  if (error) return <div className="text-center p-4 text-red-500">Error: {error}</div>;
  if (!data) return <div className="text-center p-4 text-gray-400">No details available.</div>;

  return (
    <div className="max-w-6xl mx-auto py-6 text-white shadow-xl rounded-lg px-3">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img
            src={data.Poster || 'https://via.placeholder.com/300'}
            alt={data.Title}
            className="w-full h-auto rounded-lg shadow-lg border-2 border-gray-700"
          />
        </div>
        <div className="md:w-2/3 md:ml-6">
          <h1 className="text-4xl font-extrabold mb-4 text-gradient bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{data.Title}</h1>



          <div className=" flex flex-wrap py-4 justify-between">
            <p className=" text-sm text-gray-300">IMDB Rating 🌟: <span className="text-gray-100">{data.imdbRating}</span></p>
            <p className=" text-sm text-gray-300">IMDB Votes 👍: <span className="text-gray-100">{data.imdbVotes}</span></p>
            <p className=" text-sm text-gray-300">Runtime ⌛: <span className="text-gray-100">{data.Runtime}</span></p>
            <p className=" text-sm text-gray-300">Released : <span className="text-gray-100">{data.Released}</span></p>
            <p className=" text-sm text-gray-300">Language: <span className="text-gray-100">{data.Language}</span></p>
          </div>
          <p className="text-md mb-2">{data.Plot}</p>
          <div className="space-y-4">
            <p className="font-semibold text-gray-300">Runtime: <span className="text-gray-100">{data.Runtime}</span></p>
            <p className="font-semibold text-gray-300">Rated: <span className="text-gray-100">{data.Rated}</span></p>
            <p className="font-semibold text-gray-300">Box Office: <span className="text-gray-100">{data.BoxOffice}</span></p>
            <p className="font-semibold text-gray-300">Awards: <span className="text-gray-100">{data.Awards}</span></p>
            <p className="font-semibold text-gray-300">Metascore: <span className="text-gray-100">{data.Metascore}</span></p>
            <p className="font-semibold text-gray-300">IMDb Rating: <span className="text-gray-100">{data.imdbRating}</span></p>
            <p className="font-semibold text-gray-300">IMDb Votes: <span className="text-gray-100">{data.imdbVotes}</span></p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default MovieDetails;
