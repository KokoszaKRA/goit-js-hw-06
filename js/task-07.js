const sizeText = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');

// sizeText.addEventListener('input', (ev) => {
//     text.style.fontSize = `${ev.currentTarget.value}px`;    
// });

const sizeChange = () => { 
    let slider = sizeText.value + "px";
    text.style.fontSize = slider;

};

sizeText.addEventListener("input",sizeChange);
