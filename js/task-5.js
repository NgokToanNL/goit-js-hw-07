function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backgroundColorBtn = document.querySelector("button");

backgroundColorBtn.addEventListener('click', () => {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  
  const nameofColor = document.querySelector("span");
  nameofColor.textContent = randomColor;

})


