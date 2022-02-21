// Hamburger Menu
function myFunction() {
    var x = document.getElementById("toggle");
    if (x.className === "nav-list") {
      x.className += " responsive";
    } else {
      x.className = "nav-list";
    }
  }


//Hex Color
const button1 = document.getElementById('btn-hex')
const viewport1 = document.getElementById('hexCode')
const hexCodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D',
 'E', 'F']

button1.addEventListener('click', function(d){
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hexCodes[randomNumber()]    
    }
    viewport1.textContent = color
    document.querySelector('.box-section').style.backgroundColor = color
})

function randomNumber() {
    return Math.floor(Math.random() * hexCodes.length)
}

// RGB Color

const viewport2 = document.getElementById('rgbColor')

function rgbColor() {
    let red = document.getElementById('red').value
    let green = document.getElementById('green').value
    let blue = document.getElementById('blue').value
    let color = 'rgb(' + red + ', ' + green + ', ' + blue + ')'
    document.querySelector('.box-section2').style.backgroundColor = color
    viewport2.value = color
}
document.getElementById('red').addEventListener('input', rgbColor)
document.getElementById('green').addEventListener('input', rgbColor)
document.getElementById('blue').addEventListener('input', rgbColor)

// Palette Tab

const paletteBtn = document.querySelector('.palette-btn')
const colorBox = document.querySelectorAll('.color-box')
const paletteText = document.querySelectorAll('.hex-color')

paletteBtn.addEventListener('click', createColors)

function createColors() {
  for (let i = 0; i < colorBox.length; i++) {
    const randomColors = Math.floor(Math.random()*16777215).toString(16);
    colorBox[i].style.backgroundColor = '#' + randomColors
    paletteText[i].textContent = '#' + randomColors
  }
}
createColors()