import logo from './images/logo.png';

export default function header() {

    //Logo
    const header = document.getElementById('header');
    const headerLogo = document.createElement('div');
    headerLogo.id = 'logoBox';
    const headerImage = document.createElement('img');
    headerImage.src = logo;
    headerImage.id = 'logoImage';
    headerLogo.appendChild(headerImage);
    const figTree = document.createElement('p');
    figTree.id = 'name';
    figTree.textContent = 'The Fig Tree';
    headerLogo.appendChild(figTree);
    const navBar = document.getElementById('nav-bar');
    header.insertBefore(headerLogo, navBar);
}