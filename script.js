const container = document.querySelector('.container')
const unsplashUrl = 'https://source.unsplash.com/random/'

for(let i = 0; i < tows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${unsplashUrl}${getRandomSize()}`
    container.appendChild(img)
}

function getRandomSize() {
    return `${getRandomNr()} x ${getRandomNr()}`
}

function getRandomNr(){
    return Math.floor(Math.random() * 10) + 300
}