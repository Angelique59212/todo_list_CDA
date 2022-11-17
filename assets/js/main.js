import {SearchBar} from "./SearchBar";
import {AddList} from "./AddList";
import {ClearItem} from "./ClearItems";

import('../../assets/styles/style.css');

let BarSearch = new SearchBar("40vw","4vh", "1px solid #95d6b7");
BarSearch.display();

let ListAdd = new AddList();
ListAdd.printList();

let clearIt = new ClearItem();
clearIt.clear();