const input = document.querySelector('div#controls>input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const div = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(number) {
  let divSize = 20;

  for (let i = 0; i < number; i += 1) {
    const box = document.createElement("div");
    box.classList.add("box");
    divSize += 10;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    box.style.width = divSize + "px";
    box.style.height = divSize + "px";
    boxes.prepend(box);
  }
};

const destroyBoxes = () => {
  boxes.textContent = "";
};

createBtn.addEventListener("click", () => createBoxes(input.value));
destroyBtn.addEventListener("click", () => destroyBoxes());