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


/*
*******
*TEST *
*******

let mainPicture = '';

let previewImg = `
<div class="prev">
    <i class="fas fa-chevron-up"></i>
</div>
<div class="succ">
    <i class="fas fa-chevron-down"></i>
</div>`;

for (let i = 0; i < imgArray.length; i++){
    mainPicture += `
        <img id="main-pic" src="${imgArray[i]}" alt="">

        <div class="my_pic-info">
            <h5 id="title-info-pic">${titleArray[i]}</h5>
            <p id="info-pic">${textArray[i]}</p>
        </div>`;
    previewImg += `
    <div class="my_preview-images">
    <img src="${imgArray[i]}" alt="">

    </div>`;
}

document.querySelector(".my_main-picture").innerHTML = mainPicture;
document.querySelector(".my_preview-images").innerHTML = previewImg;

prev = document.getElementById("prev");
succ = document.getElementById("succ"); SOSTITUIRE CLASS CON ID IN HTML

prev.addEventListener("click", function(){
    }
});

succ.addEventListener("click", function(){    
});

*/