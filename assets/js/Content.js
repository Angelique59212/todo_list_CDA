let containerList = document.getElementById('container-List');

export let Content = function (inputValue) {
    this.inputValue = inputValue;

    this.display = () => {
        let paragraph = document.createElement('p');
        paragraph.id = "paragraph";
        paragraph.innerHTML = this.inputValue;
        containerList.appendChild(paragraph);

        let removeList = document.createElement('span');
        removeList.id = "styleButtonRemove"
        removeList.innerHTML = "Supprimer";
        removeList.addEventListener('click', ()=> {
            paragraph.remove();
        });
        paragraph.appendChild(removeList);

        let validateList = document.createElement('span');
        validateList.id = 'styleValidate';
        validateList.innerHTML = "Valider";
        validateList.addEventListener('click', ()=> {
            paragraph.style.textDecoration = "line-through";
        });
        paragraph.appendChild(validateList);

        let editList = document.createElement('span');
        editList.id = 'styleEdit';
        editList.innerHTML = 'Editer';
        editList.addEventListener('click', ()=> {
            paragraph.replace(0);
        });
        paragraph.appendChild(editList);

        let clearItem = document.createElement('button');
        clearItem.id = 'clear';
        clearItem.innerHTML = 'Clear Items';
        clearItem.addEventListener('click', ()=> {
            containerList.remove();
        });
        paragraph.appendChild(clearItem);
    }
}