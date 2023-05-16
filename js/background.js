const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg'
];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement('img');

bgImage.src = `img/${chosenImage}`;
document.body.style.backgroundImage = `url(${bgImage.src})`;
document.body.style.backgroundSize = 'cover';
// document.body.appendChild(bgImage);

