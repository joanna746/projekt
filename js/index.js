

/* Wyszukiwarka*/

const searchForm = document.getElementById('search-link');
const searchContainer = document.getElementById('search-container');
let isOpen = false; 


searchForm.addEventListener('click', function(event) {
    event.preventDefault();
    if (!isOpen) {
        searchContainer.style.display = 'block';
        isOpen = true;
    } else {
        searchContainer.style.display = 'none';
        isOpen = false;
    }
});



/* Menu oferta*/
const buttonOfert = document.getElementById('dropdownMenuButton');
console.log(buttonOfert);
const menuOfert = document.querySelector('.menu-ofert');
console.log(menuOfert)
let isMenuOpen = false;

buttonOfert.addEventListener('click', function() {
    if (!isMenuOpen) {
        menuOfert.style.display = 'block';
        isMenuOpen = true;
    } else {
        menuOfert.style.display = 'none';
        isMenuOpen = false;
    }
});

/*Zdjecia*/
const masonry = new Macy ({
    container:'.gallery',
    mobileFirst: true,
    columns:1,
    breakAt: {
        700:2,
        1000:3,
    },
    margin: {
        x:10,
        y:10,
    }
})


/*Galeria zdjęć*/


const images = document.querySelectorAll('.gallery-image');
const lightbox = document.querySelector('.lightbox');

const lightboxImage = document.querySelector('.lightbox-content');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const closeButton = document.querySelector('.close');

let currentImageIndex = 0;

images.forEach((image, index) => {
    image.addEventListener('click', () => {
     showLightbox(index);
    });
});

function showLightbox(index) {
    lightboxImage.src = images[index].src;
    currentImageIndex = index;
    lightbox.style.display = 'block';
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

closeButton.addEventListener('click', closeLightbox);

prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showLightbox(currentImageIndex);
});

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showLightbox(currentImageIndex);
});

lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});
/*Element otwierajacy galerie*/

document.getElementById("expand-button").addEventListener("click", function () {
    const containerGallery = document.querySelector(".gallery");
    containerGallery.classList.toggle("expanded");

    const expandButton = document.getElementById("expand-button");
    if (containerGallery.classList.contains("expanded")) {
        expandButton.textContent = "Zwiń";
    } else {
        expandButton.textContent = "Rozwiń";
    }
});
