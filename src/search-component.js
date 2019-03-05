const searchForm = document.getElementById('form');

export default function loadSearchBar() {
    searchForm.addEventListener('submit', event => {
        event.preventDefault();
        const formDaddy = new FormData(searchForm);
        const search = formDaddy.get('search-bar');
        console.log(search);
    });
}


