import makeSearchMovieUrl from '../src/make-search-movie-url.js';
const test = QUnit.test;

QUnit.module('Make URL for fetch');

test('includes query and page', assert => {
    // arrange
    const expected = 'https://api.themoviedb.org/3/search/movie?api_key=a9c1c53b2d714000fd04fb94fe4ad651&language=en-us&include_adult=false&query=star+wars&page=3';
    const queryOptions = {
        searchTerm: 'star wars',
        page: 3
    };
    // act
    const result = makeSearchMovieUrl(queryOptions);
    // assert
    assert.equal(result, expected);
});

test('return empty string if no search term', assert => {
    //arrange
    const expected = '';
    const queryOptions = {
        searchTerm: '',
        page: 3
    };
    //act
    const result = makeSearchMovieUrl(queryOptions);
    //assert
    assert.equal(result, expected);
});