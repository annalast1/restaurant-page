import loadHome from './main';
import header from './branding';
import branches from './locations';
import menu from './menu';

import './locations.css';
import './main.css';
import './menu.css';


document.addEventListener('DOMContentLoaded', () => {
    header()
    loadHome();
});

const clear = () => {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

const navBar = document.querySelector('#nav-bar');
navBar.addEventListener('click', (event) => {
    const target = event.target;
    switch(target.id){
        case 'home':
            clear();
            loadHome();
            break;
        case 'location':
            clear();
            branches();
            break;
        case 'food':
            clear();
            menu();
            break;
        default:
            break;
    }
});

