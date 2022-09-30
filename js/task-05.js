const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

input.addEventListener("input", (el) => {
    if (!el.currentTarget.value) output.textContent = "Anonymous"
    else output.textContent = el.currentTarget.value;    
    
});

// PAGE STYKING
const box = document.body;

box.style.listStyle = "none";
box.style.flexDirection = "column";
box.style.display = "flex";
box.style.alignItems = "center";
box.style.justifyContent = "center";