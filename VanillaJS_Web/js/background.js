const images = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg", "bg6.jpg"];
const chosenImg = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('img/${chosenImg}')`;

document.body.style.backgroundSize = 'cover';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundPosition = 'center center';
