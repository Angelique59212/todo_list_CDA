import('../../assets/styles/style.css');

let container = document.getElementById('container');
let search = document.getElementById('search');
let containerList = document.getElementById('container-List');

let SearchBar = function (width, height, margin) {
    this.width = width;
    this.height = height;
    this.margin = margin;

    this.display = () => {
        let inputSearch = document.createElement('input');
        inputSearch.setAttribute('id', 'styleSearch')
        inputSearch.style.width = this.width;
        inputSearch.style.height = this.height;
        inputSearch.style.margin = this.margin;
        search.appendChild(inputSearch);

        let button = document.createElement('button');
        button.setAttribute('id', 'styleButtonSearch')
        button.innerHTML = 'Add Item';
        search.appendChild(button);
    }
}

let BarSearch = new SearchBar("25vw","4vh","2rem");
BarSearch.display();