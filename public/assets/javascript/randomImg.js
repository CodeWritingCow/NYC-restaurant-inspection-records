const imgCount = 5;
const dir = '/public/assets/img/';
const randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
const images = new Array;
    images[1] = { "img": "michael-browning-14090-unsplash-1024x683.jpg", "alt": "Men working in kitchen. Photo by Michael Browning on Unsplash."};
    images[2] = { "img": "roman-arkhipov-123618-unsplash-1024x683.jpg", "alt": "Food cart in New York at night. Photo by Roman Arkhipov on Unsplash."};
    images[3] = { "img": "joanna-boj-17158-unsplash-1024x683.jpg", "alt": "Cook in a cafe. Photo by Joanna Boj on Unsplash."};
    images[4] = { "img": "making-waffles-cutting-them-into-pieces-picjumbo-com-1024x683.jpg", "alt": "Making waffles cutting them into pieces. Photo by picjumbo.com."};
    images[5] = { "img": "woman-holding-an-ice-cream-picjumbo-com-1024x683.jpg", "alt": "Woman holding an ice cream. Photo by picjumbo.com."};

const randomImg = dir + images[randomCount].img;
const randomImgAlt = images[randomCount].alt;

document.getElementById("parallaxImg").src = randomImg;
document.getElementById("parallaxImg").alt = randomImgAlt;