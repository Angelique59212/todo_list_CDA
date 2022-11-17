import {containerList} from "./Content";

export let ClearItem = ()=> {
    function clear () {
        let container = document.getElementById('container');
        let clearItem = document.createElement('button');
        clearItem.id = 'clear';
        clearItem.innerHTML = 'Clear Items';
        clearItem.addEventListener('click', ()=> {
            containerList.remove();
        });
        container.appendChild(clearItem);
    }
}
