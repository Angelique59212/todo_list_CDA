let containerList = document.getElementById('container-List');

export let Content = function (inputValue) {
    this.inputValue = inputValue;

    this.display = () => {
        let paragraph = document.createElement('p');
        paragraph.id = "paragraph";
        paragraph.innerHTML = this.inputValue;
        containerList.appendChild(paragraph);

        let removeList = document.createElement('span');
        removeList.innerHTML = "Supprimer";
        removeList.addEventListener('click', ()=> {
            paragraph.remove();
        })
        paragraph.appendChild(removeList);
    }
}