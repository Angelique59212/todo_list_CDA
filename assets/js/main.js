import {SearchBar} from "./SearchBar";
import {Content} from "./Content";

import('../../assets/styles/style.css');

let container = document.getElementById('container');

let BarSearch = new SearchBar("40vw","4vh", "1px solid #95d6b7");
BarSearch.display();

let ParaList = new Content();
ParaList.display();

