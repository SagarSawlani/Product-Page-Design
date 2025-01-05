const selectedButtonIndex = localStorage.getItem('selectedImage');

const changeImageButton = document.querySelectorAll('.js-change-button');

if(selectedButtonIndex !== null) {
  changeImageButton[selectedButtonIndex].classList.add('changed-image-button');
} else {
  changeImageButton[0].classList.add('changed-image-button');
}
changeImage(Number(selectedButtonIndex) + 1);

changeImageButton.forEach((button, index) => {
  button.addEventListener('click', () => {
    changeImageButton.forEach((btn) => btn.classList.remove('changed-image-button'));
    button.classList.add('changed-image-button');
    localStorage.setItem('selectedImage', index);
    changeImage(index + 1);
  });
});

function changeImage(index) {
  document.getElementById("img").src = `images/image${index}.png`;
}

const sizeButton = document.querySelectorAll('.size');
sizeButton.forEach((button, index) => {
  button.addEventListener('click', () => {
    sizeButton.forEach((btn) => {
      btn.classList.remove('selected-size');
    });
    button.classList.add('selected-size');
    localStorage.setItem('selectedSize', index);
  });
});

const selectedSize = localStorage.getItem('selectedSize');

if(selectedSize !== null) {
  sizeButton[selectedSize].classList.add('selected-size');
}

const colorButton = document.querySelectorAll('.color');
colorButton[0].style.backgroundColor = "red";
colorButton[1].style.backgroundColor = "green";
colorButton[2].style.backgroundColor = "blue";
colorButton[3].style.backgroundColor = "lightpink";

colorButton.forEach((button, index) => {
  button.addEventListener('click', () => {
    colorButton.forEach(btn => btn.classList.remove('selected-color'));
    button.classList.add('selected-color');
    localStorage.setItem('selectedColor', index);
  });
});

const selectedColor = localStorage.getItem('selectedColor');

if(selectedColor !== null) {
  colorButton[selectedColor].classList.add('selected-color');
}

const buyButton = document.querySelector('.js-buy-now');
buyButton.addEventListener('click', () =>{
  document.querySelector('.js-quanity-input').value = 1;
});