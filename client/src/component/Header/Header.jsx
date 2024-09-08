import React, { useState } from 'react';
import '../../App.css';
import { useDispatch } from 'react-redux';
import { fetchMovies, fetchSeries } from '../../features/movieSlice';

const Header = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (term === '') return alert('Please write something to search');

    dispatch(fetchMovies(term));
    dispatch(fetchSeries(term));
    setTerm('');
  };

  return (
    <header className='flex justify-between items-center px-6 h-20 shadow-lg bg-slate-900 text-white sticky top-0 z-10'>
      <div className='font-semibold text-xl bg-gradient-to-r from-purple-600 to-pink-700 bg-clip-text text-transparent'>
  MovieFlicker
</div>

      <div className='flex gap-4 items-center bg-slate-900'>
        <form
          onSubmit={submitHandler}
          className='flex items-center w-full max-w-md bg-white rounded-xl overflow-hidden'
        >
          <input
            className='h-10 w-full px-4 bg-white text-gray-800 border-none outline-none sm:w-auto sm:flex-grow'
            type='text'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder='Search shows and movies'
            aria-label='Search'
          />
          <button
            type='submit'
            className='w-12 h-10 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors duration-300 sm:w-auto'
            aria-label='Search button'
          >
            🔍
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
