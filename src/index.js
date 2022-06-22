import "./styles/index.scss";

import {renderHeaderNav} from "./components/header-nav/index.js";



const render = () => {
    renderHeaderNav()
}


document.addEventListener("DOMContentLoaded", render);