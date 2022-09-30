const buttonDecrement = document.querySelector('div#counter>button[data-action="decrement"]');
const buttonIncrement = document.querySelector('div#counter>button[data-action="increment"]');
const counter = document.querySelector('div#counter>span#value');

let counterValue = 0;

const decrement = () => {
    counter.textContent = counterValue -= 1;
  };
  const increment = () => {
    counter.textContent = counterValue += 1;
  };
buttonDecrement.addEventListener("click", decrement);
buttonIncrement.addEventListener("click", increment);

// PAGE STYKING
const box = document.body;

box.style.listStyle = "none";
box.style.flexDirection = "column";
box.style.display = "flex";
box.style.alignItems = "center";
box.style.justifyContent = "center";