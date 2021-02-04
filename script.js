// Variable declarations for the container and the image source url
const container = document.querySelector('.container')
const unsplashUrl = 'https://source.unsplash.com/random/'
const rows = 5

// Loop though the image source and append the container to add the images
for(let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${unsplashUrl}${getRandomSize()}`
    container.appendChild(img)
}

// Function to get a random size of image
function getRandomSize() {
    return `${getRandomNr()} x ${getRandomNr()}`
}

// Function to get a random number of images
function getRandomNr(){
    return Math.floor(Math.random() * 10) + 300
}