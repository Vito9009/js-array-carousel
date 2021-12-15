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
];

const textArray = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

const mainPicture = document.querySelector(".my_main-picture");    // Selettore contenitore main
const previewImage = document.querySelector(".my_preview-images");// Selettore contenitore preview

// Definizione variabili
let imgShowed = "";
let imgSide = "";
let classActive = 1;

// Cicli for per inserimento immagini e testo in html
for (let i = 0; i < imgArray.length; i++){
    imgShowed += `
    <div class="picture-show">
        <img id="main-pic" src="${imgArray[i]}" alt="">

        <div class="my_pic-info">
            <h5 id="title-info-pic">${titleArray[i]}</h5>
            <p id="info-pic">${textArray[i]}</p>
        </div>

    </div>
    `;
}

for (let i = 0; i < imgArray.length; i++){
    imgSide += `

        <div class="prev"><i class="fas fa-chevron-up"></i></div>
        <div class="next"><i class="fas fa-chevron-down"></i></div>

        <img id="main-pic" src="${imgArray[i]}" alt="">

    `;
}

mainPicture.innerHTML = imgShowed;
previewImage.innerHTML = imgSide;