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
let carouselImages = [...document.querySelectorAll('.carouselImage')];

carouselImages.forEach((image, index) => {
    image.style.backgroundImage = `url(images/${index+1}.jpg)`;
})

// Parallax carousel
let carousel = document.querySelector('.slide');
let carouselWidth;
let carouselImagesWidth;
let current = 0;
let target = 0;
let ease = 0.05;

// Linear interpolation function
function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

// Transform function
function setTransform (el, transform) {
    el.style.transform = transform;
}

// Initializing function
function init () {
    carouselWidth = carousel.getBoundingClientRect().width;
    carouselImagesWidth = carouselWidth/carouselImages.length;
    document.body.style.height = `${carouselWidth - (window.innerWidth - window.innerHeight)}px`;
}

// Animating the carousel
function animate() {
    current = parseFloat(lerp(current, target, ease)).toFixed(2);
    target = window.scrollY;
    setTransform(carousel, `translateX(${-current}px)`)
    animateImages();
    requestAnimationFrame(animate);
}

// Animate images for parallax effect
function animateImages() {
    let ratio = current/carouselImagesWidth;
    let intersectionRatioValue;
    carouselImages.forEach((image, index) => {
        intersectionRatioValue = ratio - (index * 0.7);
        setTransform(image, `translateX(${intersectionRatioValue * 70}px)`);
    });
}

init();
animate();

/*
 *
 *      CHASING CIRCLE
 *
 */


/*
 *
 *      LIGHT MODE / DARK MODE
 *
 */
let darkModeLight = document.querySelector('.mode');
darkModeLight.addEventListener('click', function (){
    document.body.classList.toggle('darkMode');
})