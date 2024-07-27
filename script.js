const images = [
    'Daenerystar.jpg',
    'jonsnows.jpg',
    'sansa.jpg',
    'Tyrion.jpg'
];

let currentImageIndex = 0;
let intervalId;
let isPaused = false;

function changeBackground(imageSrc, index = null) {
    document.getElementById('main-image').style.backgroundImage = `url(${imageSrc})`;
    if (index !== null) {
        currentImageIndex = index;
        pauseSlider();
    }
}

function nextImage() {
    if (!isPaused) {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        changeBackground(images[currentImageIndex]);
        if (currentImageIndex === images.length - 1) {
            pauseSlider();
        }
    }
}

function startSlider() {
    intervalId = setInterval(nextImage, 4000);
}

function pauseSlider() {
    isPaused = true;
    clearInterval(intervalId);
    setTimeout(() => {
        isPaused = false;
        startSlider();
    }, 8000); // Pause for 8 seconds
}

document.querySelectorAll('.thumbnail').forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        changeBackground(images[index], index);
    });
});

// Initialize with the first image
changeBackground(images[currentImageIndex]);
startSlider();
