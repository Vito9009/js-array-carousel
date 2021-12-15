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
let classActive = 0;

// Cicli for per inserimento immagini e testo in html
for (let i = 0; i < imgArray.length; i++){
    imgShowed += `
    <div class="picture-show" id="img-num-${i}">
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
    <div class="my_preview-images d-flex flex-column justify-content-center align-items-center col-12" id="img-preview-num-${i}">
            <img class="main-pic h-100" src="${imgArray[i]}" alt="">
    </div>
    `;
}

mainPicture.innerHTML = imgShowed;
previewImage.innerHTML = imgSide;

let mainImgActive = document.getElementById("img-num-" + classActive); //Rendere visibile l'immagine principale
mainImgActive.classList.add("active");
let previewImgActive = document.getElementById("img-preview-num-" + classActive);
previewImgActive.classList.add("my_preview-selected");

/*CLICK PULSANTI */

let btnPrev = document.querySelector(".prev");
let btnNext = document.querySelector(".next");

btnPrev.addEventListener("click", function (){ //btn Prev
    classActive--;
    if (classActive < 0){ //LOOP VERSO L'ALTO
        classActive = 4;
    }

    if (previewImgActive.classList.contains("my_preview-selected")){ // INSERISCE BORDO ALL=IMMAGINE PREVIEW SELEZIONATA
        previewImgActive.classList.toggle("my_preview-selected");
    }

    if (mainImgActive.classList.contains("active")){ // DISPLAYBLOCK SULL'IMMAGINE SELEZIONATA (NELLA SITUAZIONE PRECEDENTE L'IMMAGINE È IN DISPLAY NONE)
        mainImgActive.classList.toggle("active");
    }

    mainImgActive = document.getElementById("img-num-" + classActive); //AGGIUNTA CLASSE ACTIVE
    mainImgActive.classList.add("active");
    
    previewImgActive = document.getElementById("img-preview-num-" + classActive); //AGGIUNTA CLASSE BORDO E OPACITY
    previewImgActive.classList.add("my_preview-selected");
}
);

btnNext.addEventListener("click", function (){ //btn Next
    classActive++;
    if (classActive > 4){  //LOOP VERSO IL BASSO
        classActive = 0;
    }

    if (previewImgActive.classList.contains("my_preview-selected")){ // INSERISCE BORDO ALL=IMMAGINE PREVIEW SELEZIONATA
        previewImgActive.classList.toggle("my_preview-selected");
    }

    if (mainImgActive.classList.contains("active")){ // DISPLAYBLOCK SULL'IMMAGINE SELEZIONATA (NELLA SITUAZIONE PRECEDENTE L'IMMAGINE È IN DISPLAY NONE)
        mainImgActive.classList.toggle("active");
    }

    mainImgActive = document.getElementById("img-num-" + classActive); //AGGIUNTA CLASSE ACTIVE
    mainImgActive.classList.add("active");
    
    previewImgActive = document.getElementById("img-preview-num-" + classActive); //AGGIUNTA CLASSE BORDO E OPACITY
    previewImgActive.classList.add("my_preview-selected");
}
);

/*
PROBLEMA CON IMMAGINI LATERALI (ALTEZZA ESTREMAMENTE BASSA)
*/