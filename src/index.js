import loadMovieList from './list-component.js';
import { updateSearchBar } from './search-component.js';
import './paging-component.js';
import { readFromQuery } from './hash-query.js';
import makeSearchMovieUrl from './make-search-movie-url.js';
// loadMovieList(movieArray);

window.addEventListener('hashchange', () => {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery);
    updateSearchBar(queryOptions.searchTerm);
    const url = makeSearchMovieUrl(queryOptions);
    fetch(url)
        .then(response => response.json())
        .then(result => result.results)
        .then(movieList => {
            loadMovieList(movieList);
        });
}); 