// shuffle "randomize" elements of an array format and return one element
const {shuffle} = require("../util/shuffle.js");

// CDN images link for home page background
const images = [
  "https://res.cloudinary.com/hg7jltnn9/image/upload/v1562031458/public/assets/img/kevin-curtis-3308-unsplash-1024x676_bcwbjg.jpg",

  "https://res.cloudinary.com/hg7jltnn9/image/upload/v1562031452/public/assets/img/making-waffles-cutting-them-into-pieces-picjumbo-com-1024x683_tepguq.jpg",

  "https://res.cloudinary.com/hg7jltnn9/image/upload/v1562031444/public/assets/img/michael-browning-14090-unsplash-1024x683_ctyvc1.jpg",

  "https://res.cloudinary.com/hg7jltnn9/image/upload/v1562031427/public/assets/img/pan-with-olive-oil-ready-to-cooking-picjumbo-com_1024_x683_r6v9jd.jpg",

  "https://res.cloudinary.com/hg7jltnn9/image/upload/v1562031418/public/assets/img/roman-arkhipov-123618-unsplash-1024x683_jhbqz7.jpg",

  "https://res.cloudinary.com/hg7jltnn9/image/upload/v1562031391/public/assets/img/woman-holding-an-ice-cream-picjumbo-com-1024x683_smr3ej.jpg"
];

exports.get = (req, res) => {
  let image = shuffle(images)[0]
  res.send(image)
};
