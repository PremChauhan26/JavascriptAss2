// constants for query selector
const customNumberInput = document.querySelector('#customNumber');
const custColorButton = document.querySelector('.custColor');
const randColorButton = document.querySelector('.randColor');
const imageSelect = document.querySelector('#imageSelect');
const images = document.querySelector('#images');
const myStudentId = document.querySelector('#myStudentId');

// function to change bg color from user input and add student id
function changeCustomColor() {
  const inputValue = Number(customNumberInput.value);
    console.log(inputValue);
  if (inputValue < 0 || inputValue > 100) {
    document.body.style.background = 'red';
  } else if (inputValue > 80 && inputValue <= 100) {
    document.body.style.background = 'yellow';
  } else if (inputValue > 60 && inputValue <= 80) {
    document.body.style.background = 'purple';
  } else if (inputValue > 40 && inputValue <= 60) {
    document.body.style.background = 'orange';
  } else if (inputValue > 20 && inputValue <= 40) {
    document.body.style.background = 'blue';
  } else if (inputValue >= 0 && inputValue <= 20) {
    document.body.style.background = 'green';
  }

  myStudentId.textContent = 'Your Student ID: 200524574';
}


// function to change bg color from random no.
function changeRandomColor() {
  const randomValue = Math.floor(Math.random() * 100) + 1;
  changeCustomColor();
  customNumberInput.value = randomValue;
}

// function to generate options for select list
function addList() {
  const imageNames = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];

  for (let i = 0; i < imageNames.length; i++) {
    const option = document.createElement('option');
    option.value = imageNames[i];
    option.textContent = imageNames[i];
    imageSelect.appendChild(option);
  }
}

// function to change image
function changeImage() {
  const selectedImage = imageSelect.value;
  images.src = `./img/${selectedImage}`;
}

// event listeners for on click event of buttons and select
custColorButton.addEventListener('click', changeCustomColor);
randColorButton.addEventListener('click', changeRandomColor);
imageSelect.addEventListener('change', changeImage);

// event listeners for on change event of select
window.addEventListener('DOMContentLoaded', addList);
