import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
    const { data } = props;

    return (
        <Link to={`/movie/${data.imdbID}`}>
        <div className="w-full max-w-sm rounded-md border overflow-hidden shadow-md">
            <div className='h-80 overflow-hidden'>
                <img
                    src={data?.Poster === 'N/A' ? 'https://img.freepik.com/premium-vector/available-allowed-icon-concept_313674-32493.jpg' : data?.Poster}
                    alt={data?.Title || 'Movie poster'}
                    className="h-80 w-full object-cover transition-transform duration-150 ease-in-out transform hover:scale-105"
                />
            </div>
            <div className="p-4">
                <h1 className="text-lg font-semibold truncate">{data?.Title}</h1>
                <p className="mt-1 text-sm text-gray-600">{data?.Year}</p>
            </div>
        </div>
        </Link>
    );
};

export default MovieCard;
