let search = document.getElementById('search');

export let SearchBar = function (width, height, border) {
    this.width = width;
    this.height = height;
    this.border = border;

    this.display = () => {
        let inputSearch = document.createElement('input');
        inputSearch.setAttribute('id', 'styleSearch')
        inputSearch.style.width = this.width;
        inputSearch.style.height = this.height;
        inputSearch.style.border = this.border;
        search.appendChild(inputSearch);

        let button = document.createElement('button');
        button.setAttribute('id', 'styleButtonSearch')
        button.innerHTML = 'Add Item';
        search.appendChild(button);
    }
}