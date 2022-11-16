import {Content} from "./Content";


export function  AddList() {
    this.printList = ()=> {
        let button = document.querySelector('#styleButtonSearch');

        button.addEventListener('click', () => {
            let ParaList = new Content(document.querySelector('#styleSearch').value);
            ParaList.display();
        })
    }
}