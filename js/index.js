

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
    container:'.container-withfoto',
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

