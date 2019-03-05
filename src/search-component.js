import { writeSearchToQuery } from './hash-query.js';

const searchForm = document.getElementById('form');

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    
    const formDaddy = new FormData(searchForm);
    const search = formDaddy.get('search-bar');
    const existingQuery = window.location.hash.slice(1); // slice gets rid of leading '#'
    const newQuery = writeSearchToQuery(existingQuery, search);
    window.location.hash = newQuery;
});



