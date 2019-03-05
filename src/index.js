import movieArray from '../data/movie-array.js';
import loadMovieList from './list-component.js';
import './search-component.js';
import './paging-component.js';
import { readFromQuery } from './hash-query.js';
loadMovieList(movieArray);

window.addEventListener('hashchange', () => {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery);
    console.log(queryOptions);
}); 