async function WebpIsSupported() {
    // If the browser doesn't has the method createImageBitmap, you can't display webp format
    if (!self.createImageBitmap) return false;
  
    // Base64 representation of a white point image
    const webpData = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=';
    
    // Retrieve the Image in Blob Format
    const blob = await fetch(webpData).then(r => r.blob());

    // If the createImageBitmap method succeeds, return true, otherwise false
    return createImageBitmap(blob).then(() => true, () => false);
}


const imgCount = 4;
const dir = '/public/assets/img/';
const randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
const images = new Array;
images[1] = { "img": "michael-browning-14090-unsplash-1024x683", "alt": "Men working in kitchen. Photo by Michael Browning on Unsplash."};
images[2] = { "img": "roman-arkhipov-123618-unsplash-1024x683", "alt": "Food cart in New York at night. Photo by Roman Arkhipov on Unsplash."};
images[3] = { "img": "making-waffles-cutting-them-into-pieces-picjumbo-com-1024x683", "alt": "Making waffles cutting them into pieces. Photo by picjumbo.com."};
images[4] = { "img": "woman-holding-an-ice-cream-picjumbo-com-1024x683", "alt": "Woman holding an ice cream. Photo by picjumbo.com."};

let randomImg = dir + images[randomCount].img;
let randomImgAlt = images[randomCount].alt;


(async () => {
    if(await WebpIsSupported()) {
        randomImg += '.webp'
    } else {
        randomImg += '.jpg'
    }
    document.getElementById("parallaxImg").src = randomImg;
    document.getElementById("parallaxImg").alt = randomImgAlt;
})();