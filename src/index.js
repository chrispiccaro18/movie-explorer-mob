import loadMovieList from './list-component.js';
import { updateSearchBar } from './search-component.js';
import { updatePagingInfo } from './paging-component.js';
import { readFromQuery } from './hash-query.js';
import makeSearchMovieUrl from './make-search-movie-url.js';
// loadMovieList(movieArray);

window.addEventListener('hashchange', loadQuery); 

loadQuery();

function loadQuery() {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery);
    updateSearchBar(queryOptions.searchTerm);
    const url = makeSearchMovieUrl(queryOptions);
    if(!url) {
        return;
    }
    fetch(url)
        .then(response => response.json())
        .then(result => {
            loadMovieList(result.results);
            const pagingInfo = {
                currentPage: result.page,
                totalPages: result.total_pages
            };
            updatePagingInfo(pagingInfo);
        });
}
