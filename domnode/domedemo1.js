const output = document.getElementById('output');
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {

    const h1  = document.createElement('h1');
    h1.innerHTML = 'Hello World';
    output.appendChild(h1);
})
btn.addEventListener('click', () => {

    const img = document.createElement('img');
    img.src = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
    output.appendChild(img);


})