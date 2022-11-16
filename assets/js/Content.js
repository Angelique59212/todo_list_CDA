let containerList = document.getElementById('container-List');

export let Content = function () {
    this.display = () => {
        let button = document.querySelector('#styleButtonSearch');

        button.addEventListener('click', ()=> {
            let para = document.createElement('p');
            para.setAttribute('class', 'paragraph');
            para.innerHTML = document.querySelector('#styleSearch').value;
            containerList.appendChild(para);
        })
    }
}