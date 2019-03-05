const test = QUnit.test;

QUnit.module('hash query tests');

function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchTerm', searchTerm);
    searchParams.set('page', 1);
    return searchParams.toString();
}

test('set search to query', assert => {
    // arrange
    const existingQuery = '';
    const searchTerm = 'star wars';
    // act
    const query = writeSearchToQuery(existingQuery, searchTerm);
    // assert
    assert.equal(query, 'searchTerm=star+wars&page=1');
});

test('adds search to existing query', assert => {
    // arrange
    const existingQuery = 'searchTerm=star+wars&page=3';
    const searchTerm = 'harry potter';
    // act
    const query = writeSearchToQuery(existingQuery, searchTerm);
    // assert
    assert.equal(query, 'searchTerm=harry+potter&page=1');
});

function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}

test('write page to existing query', assert => {
    // arrange
    const existingQuery = 'searchTerm=star+wars&page=1';
    const page = 3;
    // act
    const query = writePageToQuery(existingQuery, page);
    // assert
    assert.equal(query, 'searchTerm=star+wars&page=3');
}); 