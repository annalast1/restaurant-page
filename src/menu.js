

export default function menu() {

    const content = document.getElementById('content');
    const section = document.createElement('section');

    const lbBox = document.createElement('div');
    const h3lb = document.createElement('h3');
    h3lb.textContent = 'Light Bites';
    const p1 = document.createElement('p');
    p1.textContent = 'Soup Of The Day with homemade date bread';
    const p1cost = document.createElement('p');
    p1cost.classList.add('price');
    p1cost.textContent = '£7 ve gf*'
    const p2 = document.createElement('p');
    p2.textContent = 'Wild Garlic and Lemon Split Pea Hummus - homemade bread';
    const p2cost = document.createElement('p');
    p2cost.classList.add('price');
    p2cost.textContent = '£7.50 ve gf*';
    const p3 = document.createElement('p');
    p3.textContent = 'Mushroom, Cashew and Basil Pate homemade bread';
    const p3cost = document.createElement('p');
    p3cost.classList.add('price');
    p3cost.textContent = '£7.75 ve gf*';
    const p4 = document.createElement('p');
    p4.textContent = 'Chimichurri Roast Cauliflower on Smoked Butterbean Puree';
    const p4cost = document.createElement('p');
    p4cost.classList.add('price');
    p4cost.textContent = '£8.50 ve gf*';
    const p5 = document.createElement('p');
    p5.textContent = 'Spring Onion, Kohlrabi Gyoza';
    const p5cost = document.createElement('p');
    p5cost.classList.add('price');
    p5cost.textContent = '£8.90 ve*';

    const mBox = document.createElement('div');
    const h3m = document.createElement('h3');
    h3m.textContent = 'Mains';
    const p6 = document.createElement('p');
    p6.textContent = 'Twice-baked Three Cheese Soufflé with homemade chutney';
    const p6cost = document.createElement('p');
    p6cost.classList.add('price');
    p6cost.textContent = '£10.50 ve*';
    const p7 = document.createElement('p');
    p7.textContent = 'Rhubarb, Ginger and Yorkshire Fettle Curd Tart';
    const p7cost = document.createElement('p');
    p7cost.classList.add('price');
    p7cost.textContent = '£10.50 ve*';
    const p8 = document.createElement('p');
    p8.textContent = 'Super Food Soul Bowl salad, slaws, seeds, grains and dollops';
    const p8cost = document.createElement('p');
    p8cost.classList.add('price');
    p8cost.textContent = '£13.50 ve*';
    const p9 = document.createElement('p');
    p9.textContent = 'Twelve Treasures Ramen Broth';
    const p9cost = document.createElement('p');
    p9cost.classList.add('price');
    p9cost.textContent = '£14.50 ve*';    
    const p10 = document.createElement('p');
    p10.textContent = 'Demi Enchilada';
    const p10cost = document.createElement('p');
    p10cost.classList.add('price');
    p10cost.textContent = '£15 | Puy Chilli Bowl £15.90 ve gf';
    const p11 = document.createElement('p');
    p11.textContent = 'Sweet Potato and Broccoli Crumble with Dolcelatte Custard';
    const p11cost = document.createElement('p');
    p11cost.classList.add('price');
    p11cost.textContent = '£17.90 gf*';
    const p12 = document.createElement('p');
    p12.textContent = 'Rich Thai Spring Green Curry';
    const p12cost = document.createElement('p');
    p12cost.classList.add('price');
    p12cost.textContent = '£19.50 ve*';

    const des = document.createElement('div');
    const h3des = document.createElement('h3');
    h3des.textContent = 'Desserts';
    const pdes = document.createElement('p');
    pdes.textContent = '£7.50 - all homemade daily* - please see our blackboard.';



    lbBox.append(h3lb, p1, p1cost, p2, p2cost, p3, p3cost, p4, p4cost, p5, p5cost);
    mBox.append(h3m, p6, p6cost, p7, p7cost, p8, p8cost, p9, p9cost, p10, p10cost, p11, p11cost, p12, p12cost);
    des.append(h3des, pdes);
    section.append(lbBox, mBox, des);
    content.append(section);
}