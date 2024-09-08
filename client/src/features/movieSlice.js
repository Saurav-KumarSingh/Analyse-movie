import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    movies: {},   // Changed to an empty array to handle lists
    shows: {},    // Changed to an empty array to handle lists
    movieOrShowDetail: null, // To store detailed data for a specific movie or show
    loading: false,
    error: null
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies',
    async (term) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}?apikey=${import.meta.env.VITE_API_KEY}&s=${term}&type=movie`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch movies';
        }
    }
);

export const fetchSeries = createAsyncThunk('shows/fetchSeries',
    async (term) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}?apikey=${import.meta.env.VITE_API_KEY}&s=${term}&type=series`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch series';
        }
    }
);

export const fetchMovieOrShowDetail = createAsyncThunk('movies/fetchMovieOrShowDetail',
    async (id) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}?apikey=${import.meta.env.VITE_API_KEY}&i=${id}&Plot=full`);
            return response.data;
        } catch (error) {
            throw error.response?.data || 'Failed to fetch movie or show details';
        }
    }
);

const mediaSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        },
        addShows: (state, { payload }) => {
            state.shows = payload;
        },
        addMovieOrShowDetail: (state, { payload }) => {
            state.movieOrShowDetail = payload;
        }
    },
    extraReducers: (builder) => {
        builder
            // Fetch Movies
            .addCase(fetchMovies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.movies = payload;
            })
            .addCase(fetchMovies.rejected, (state, { error }) => {
                state.loading = false;
                state.error = error.message;
            })
            // Fetch Series
            .addCase(fetchSeries.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSeries.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.shows = payload;
            })
            .addCase(fetchSeries.rejected, (state, { error }) => {
                state.loading = false;
                state.error = error.message;
            })
            // Fetch Movie or Show Detail
            .addCase(fetchMovieOrShowDetail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMovieOrShowDetail.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.movieOrShowDetail = payload;
            })
            .addCase(fetchMovieOrShowDetail.rejected, (state, { error }) => {
                state.loading = false;
                state.error = error.message;
            });
    }
});

export const { addMovies, addShows, addMovieOrShowDetail } = mediaSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getMovieOrShowDetail = (state) => state.movies.movieOrShowDetail;

export default mediaSlice.reducer;
