
import bgImg from './images/table.jpg';
import salad from './images/salad.jpg';
import fig from './images/fig.jpg';

export default function loadHome() {   
    // Main Image
    const content = document.getElementById('content');
    const backgroundImage = document.createElement('img');
    backgroundImage.src = bgImg;
    backgroundImage.id = 'table';

    // Specials
    const specials = document.createElement('div');
    specials.id = 'specials'
    content.append(backgroundImage, specials);

    const box1 = document.createElement('div');
    box1.id = 'box1';
    const b1h1 = document.createElement('h1');
    b1h1.textContent = 'Summer Specials';
    const b1p = document.createElement('p');
    b1p.textContent = 'These dishes make use of seasonal ingredients and are only available for a limited amount of time. Enjoy while you can!'
    const b1Btn = document.createElement('button');
    b1Btn.innerText = 'Browse menu';
    b1Btn.id = "menuBtn";
    box1.append(b1h1, b1p, b1Btn);
    
    const box2 = document.createElement('div');
    box2.id = 'box2';
    const b2img = document.createElement('img');
    b2img.src = salad;
    const b2cap = document.createElement('figcaption');
    b2cap.textContent = 'Rainbow Salad';
    box2.append(b2img, b2cap);

    const box3 = document.createElement('div');
    box3.id = 'box3';
    const b3img = document.createElement('img');
    b3img.src = fig;
    const b3cap = document.createElement('figcaption');
    b3cap.textContent = 'Fig cheese and bread';
    box3.append(b3img, b3cap);

    specials.append(box1, box2, box3);  
}

