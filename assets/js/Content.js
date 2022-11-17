export let containerList = document.getElementById('container-List');

export let Content = function (inputValue) {
    this.inputValue = inputValue;

    this.display = () => {
        let paragraph = document.createElement('p');
        paragraph.className = "paragraph";
        paragraph.innerHTML = this.inputValue;
        containerList.appendChild(paragraph);

        let removeList = document.createElement('span');
        removeList.id = "styleButtonRemove"
        removeList.innerHTML = "❌";
        removeList.addEventListener('click', ()=> {
            paragraph.remove();
        });
        paragraph.appendChild(removeList);

        let validateList = document.createElement('span');
        validateList.id = 'styleValidate';
        validateList.innerHTML = "✅";
        validateList.addEventListener('click', ()=> {
            paragraph.style.textDecoration = "line-through";
        });
        paragraph.appendChild(validateList);

        let editList = document.createElement('span');
        editList.id = 'styleEdit';
        editList.innerHTML = '📃';
        editList.addEventListener('click', ()=> {
            paragraph.contentEditable = 'true';
            paragraph.style.border = "1px solid brown"
            setTimeout(() => {
                paragraph.contentEditable = 'false';
                paragraph.style.border = "none";
            },3000)
        });
        paragraph.appendChild(editList);
    }
}