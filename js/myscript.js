// Definizione degli array

const imgArray = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const titleArray = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const textArray = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// Definizione delle variabili

let mainPicture = document.getElementById("main-pic");
mainPicture.src = imgArray[0];

let titlePicture = document.getElementById("title-info-pic");
titlePicture.innerHTML = titleArray[0];

let infoPicture = document.getElementById("info-pic");
infoPicture.innerHTML = textArray[0];