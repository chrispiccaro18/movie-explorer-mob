const test = QUnit.test;

QUnit.module('Card template');

function makeMovieCard(movie) {
    const html = /*html*/`
        <li>
            <h2>${movie.title}</h2>
            <img src="https://image.tmdb.org/t/p/original${movie.poster_path}">
            <div>${getYear(movie.release_date)}</div>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('make movie card', function(assert) {
    // arrange
    const expected = /*html*/`
        <li>
            <h2>Star Wars</h2>
            <img src="https://image.tmdb.org/t/p/original/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg">
            <div>1977</div>
        </li>
    `;
    const movie = {
        "vote_count": 10870,
        "id": 11,
        "video": false,
        "vote_average": 8.2,
        "title": "Star Wars",
        "popularity": 34.363,
        "poster_path": "/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg",
        "original_language": "en",
        "original_title": "Star Wars",
        "genre_ids": [
            12,
            28,
            878
        ],
        "backdrop_path": "/4iJfYYoQzZcONB9hNzg0J0wWyPH.jpg",
        "adult": false,
        "overview": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
        "release_date": "1977-05-25"
    };
    // act
    const result = makeMovieCard(movie);
    // assert
    assert.htmlEqual(result, expected);
});

function getYear(date) {
    // Splits the date at the dashes and returns each number as a string in a new array
    const fullDate = date.split('-');
    return fullDate[0];
}

test('return year from release date', assert => {

    const expected = '1977';

    const result = getYear('1977-05-25');

    assert.equal(result, expected);
});

