import cardiff from './images/cardiff.jpg';
import swansea from './images/swansea.jpg';
import newport from './images/newport.jpg';


export default function branches() {
   
    const content = document.getElementById('content');
    const section = document.createElement('section');
    const h1 = document.createElement('h1');
    h1.textContent = 'Our Locations';
    content.appendChild(h1);

    const locationImagesBox = document.createElement('div');
    locationImagesBox.id = "locationImagesBox";

    const loc1 = document.createElement('div');
    loc1.class = 'locationImages';
    const loc1Img = document.createElement('img');
    loc1Img.src = cardiff;
    loc1Img.classList.add('car');
    const loc1AddName = document.createElement('h2');
    loc1AddName.textContent = 'Cardiff';
    const loc1AddP1 = document.createElement('p'); 
    loc1AddP1.textContent = '5 Bay Street, Cardiff'
    const loc1AddP2 = document.createElement('p');
    loc1AddP2.textContent = 'Glamorgan, CD21 4PN';
    const loc1Tel = document.createElement('p');
    loc1Tel.textContent = 'Tel: 01765 345 231';
    loc1Tel.classList.add('phone'); 
    loc1.append(loc1Img, loc1AddName, loc1AddP1, loc1AddP2, loc1Tel);

    const loc2 = document.createElement('div');
    loc2.class = 'locationImages';
    const loc2Img = document.createElement('img');
    loc2Img.src = swansea;
    loc2Img.classList.add('car');
    const loc2AddName = document.createElement('h2');
    loc2AddName.textContent = 'Swansea';
    const loc2AddP1 = document.createElement('p'); 
    loc2AddP1.textContent = '5 Bay Street, Cardiff'
    const loc2AddP2 = document.createElement('p');
    loc2AddP2.textContent = 'Glamorgan, CD21 4PN';
    const loc2Tel = document.createElement('p');
    loc2Tel.textContent = 'Tel: 01765 345 231';
    loc2Tel.classList.add('phone'); 
    loc2.append(loc2Img, loc2AddName, loc2AddP1, loc2AddP2, loc2Tel);


    const loc3 = document.createElement('div');
    loc3.class = 'locationImages';
    const loc3Img = document.createElement('img');
    loc3Img.src = newport;
    loc3Img.classList.add('car');
    const loc3Add = document.createElement('div');
    loc3Add.classList.add('address');
    const loc3AddName = document.createElement('h2');
    loc3AddName.textContent = 'Newport';
    const loc3AddP1 = document.createElement('p'); 
    loc3AddP1.textContent = '5 Bay Street, Cardiff'
    const loc3AddP2 = document.createElement('p');
    loc3AddP2.textContent = 'Glamorgan, CD21 4PN';
    const loc3Tel = document.createElement('p');
    loc3Tel.textContent = 'Tel: 01765 345 231';
    loc3Tel.classList.add('phone');  
    loc3.append(loc3Img, loc3AddName, loc3AddP1, loc3AddP2, loc3Tel);

    locationImagesBox.append(loc1, loc2, loc3);
    section.append(h1, locationImagesBox);
    content.append(section);
}