console.log('Cozy Cafe JavaScript is connected!');

//part1

const mainTitleEl=document.querySelector("#main-title")
mainTitleEl.textContent="Welcome to the Cozy Cafe."

//part2

const highlightTitleEls= document.querySelectorAll('.highlight-title')
highlightTitleEls.forEach((hlight) => {
  console.log(hlight.textContent)
  hlight.style.fontStyle='italic'}
)

const quoteEl=document.querySelector('#quote-of-the-day')
quoteEl.textContent= 'A little coffee, a little conversation.'
quoteEl.classList.add('features')

//part3

const mainPhotoEl=document.querySelector('#main-photo')
const currentSrc= mainPhotoEl.getAttribute('src')
console.log(currentSrc)
mainPhotoEl.setAttribute('src', './assets/berry-cake.jpg');
mainPhotoEl.setAttribute('alt', 'A berry cake served at the cafe')


//part 4 (same answer share in slack)
const bgbtn = document.querySelector('#bg-color-btn')
const body = document.querySelector('body')
//this is extra on the assignment (linking arrays to a button)
const color = ['lightsteelblue','bisque','lavender','darkgray'] // This is the array
let colorIndex = 0 // this is just an integer that updates the position in the array
function handleBackgroundChange() {
    body.style.backgroundColor = color[colorIndex] // we call the array here
    colorIndex = (colorIndex + 1) % color.length // this is so that the color cycles the length of the array 
}

bgbtn.addEventListener('click',(handleBackgroundChange))


//part5 (same answer share in slack)

const roseLatteEl = document.querySelector('#rose-latte')
const croissantEl = document.querySelector('#croissant')
const cheescakeEl = document.querySelector('#cheesecake')
// console.log(roseLatteEl, croissantEl, cheescakeEl)

roseLatteEl.textContent = 'Available'
croissantEl.textContent = 'Sold Out'
cheescakeEl.textContent = 'Available'

// CSS identifiers cannot begin with an unescaped number.
// const button = document.querySelector('[id="0"]')
const roseBtnEl = document.getElementById('0')
const croissantBtnEl = document.getElementById('1')
const cheescakeBtnEl = document.getElementById('2')
// console.log(roseBtnEl, croissantBtnEl, cheescakeBtnEl)

roseBtnEl.addEventListener('click', () => {
    roseLatteEl.textContent = 'Sold Out'
})
croissantBtnEl.addEventListener('click', () => {
    croissantEl.textContent = 'Sold Out'
})
cheescakeBtnEl.addEventListener('click', () => {
    cheescakeEl.textContent = 'Sold Out'
})
