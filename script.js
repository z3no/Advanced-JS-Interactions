Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}


/*
 *
 *      PARALLAX CAROUSEL
 *
 */

//add the images to the parallax carousel
let carouselImages = [document.querySelectorAll('.carouselImage')];

carouselImages.forEach((image, index) => {
    carouselImages.style.backgroundImage = `url(images/${index+1}.jpg)`;
})

// Parallax carousel
let carousel = document.querySelector('.carouselContainer');
let carouselWidth;
let carouselImagesWidth;
let current = 0;
let target = 0;
let ease = 0.05;
