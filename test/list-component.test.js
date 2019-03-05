const test = QUnit.test;

QUnit.module('Card template');

function makeMovieCard() {
    const html = /*html*/`
        <li>
            <h2>Star Wars</h2>
            <img src="https://image.tmdb.org/t/p/original/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg">
            <div>1977</div>
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
    // const movie =
    // act
    const result = makeMovieCard();
    // assert
    assert.htmlEqual(result, expected);
});