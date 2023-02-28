const images =[
    "img01.jpg",
    "img02.jpg",
    "img03.jpg",
    "img04.jpeg",
    "img05.jpeg",
    "img06.jpeg",
    "img07.jpeg",
    "img08.jpeg",
    "img09.jpeg"

   
];
const BG = "background"

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.className = BG;

bgImage.src = `img/${chosenImage} `;

document.body.appendChild(bgImage);
