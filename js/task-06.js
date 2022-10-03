const input = document.querySelector('input#validation-input');
const dataLenght = input.getAttribute('data-length');

input.addEventListener("blur" , (ev) => {
    
    if (ev.currentTarget.value.length == dataLenght) 
    ev.currentTarget.setAttribute('class', 'valid')
    else ev.currentTarget.setAttribute('class', 'invalid');
    
    console.log(dataLenght);
    console.log(ev.currentTarget.value.length);
    
});