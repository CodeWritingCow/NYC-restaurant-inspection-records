const imgCount = 4;
const dir = 'https://res.cloudinary.com/hg7jltnn9/image/upload/f_auto,q_auto/';
const randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
const images = new Array;
images[1] = { "url": "v1562031444/public/assets/img/michael-browning-14090-unsplash-1024x683_ctyvc1.jpg", "alt": "Men working in kitchen. Photo by Michael Browning on Unsplash."};
images[2] = { "url": "v1562031418/public/assets/img/roman-arkhipov-123618-unsplash-1024x683_jhbqz7.jpg", "alt": "Food cart in New York at night. Photo by Roman Arkhipov on Unsplash."};
images[3] = { "url": "v1562031452/public/assets/img/making-waffles-cutting-them-into-pieces-picjumbo-com-1024x683_tepguq.jpg", "alt": "Making waffles cutting them into pieces. Photo by picjumbo.com."};
images[4] = { "url": "v1562031391/public/assets/img/woman-holding-an-ice-cream-picjumbo-com-1024x683_smr3ej.jpg", "alt": "Woman holding an ice cream. Photo by picjumbo.com."};

let randomImg = dir + images[randomCount].url;
let randomImgAlt = images[randomCount].alt;

document.getElementById("parallaxImg").src = randomImg;
document.getElementById("parallaxImg").alt = randomImgAlt;