let container = document.getElementById('container');

export function ClearItem () {
    this.clear = function () {
        let buttonClear = document.createElement('button');
        buttonClear.id = 'clearButton'
        buttonClear.innerHTML = 'Clear Items';
        buttonClear.addEventListener('click', () => {
            let p = document.querySelectorAll('.paragraph');
            p.forEach((element)=> {
                element.remove();
            })

        })
        container.appendChild(buttonClear);
    }
}
