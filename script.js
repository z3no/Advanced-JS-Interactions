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
 *      COLLAGE
 *
 */

//Adding the images as background for the div .image
let collageImages = [...document.querySelectorAll('.image')];

collageImages.forEach((image, index) => {
    image.style.backgroundImage = `url(images/${index+1}.jpg)`;
})

//Get the images source onclick
let images = document.querySelectorAll('.image');
let imageSource;
let alt;

images.forEach((img) => {
    img.addEventListener('click', (e) => {
        imageSource = e.target.style.backgroundImage.split('("')[1].split('")')[0];
        console.log(imageSource);
        const number = imageSource.replace(/[^0-9]/g,'')
        console.log(number);
        //run modal function
        imageModal(imageSource, number);
    })
})

//Creating the modal
let imageModal = (src, number) => {
    const modal = document.createElement('div');
    modal.setAttribute('class', 'modal');

    //add the modal to the main section
    document.querySelector('.main').append(modal);

    //adding the image to the modal
    const newImage = document.createElement('img');
    newImage.setAttribute('src', src);

    const newText = document.createElement('p');
    newText.innerText = `This is image ${number}`;

    //creating a close button
    const closeButton = document.createElement('i');
    closeButton.setAttribute('class', 'bi bi-x-circle closeButton');

    //close function
    closeButton.addEventListener('click', function () {
        modal.remove();
    });

    modal.append(newImage, newText, closeButton);
}

/*
 *
 *      CHASING CIRCLE
 *
 */

let redCircle = document.querySelector('.chaser');
let box = document.querySelector('.box');

const onMouseMove = (e) => {
    redCircle.style.left = e.pageX + 'px';
    redCircle.style.top = e.pageY + 'px';
}

box.addEventListener('mousemove', onMouseMove);

/*
 *
 *      LIGHT MODE / DARK MODE
 *
 */
let darkModeLight = document.querySelector('.mode');
darkModeLight.addEventListener('click', function (){
    document.body.classList.toggle('darkMode');
})