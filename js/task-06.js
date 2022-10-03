const input = document.querySelector('input#validation-input');

input.addEventListener("blur" , (ev) => {
    
    if (ev.currentTarget.value.length == input('data-length')) 
    ev.currentTarget.setAttribute('class', 'valid')
    else ev.currentTarget.setAttribute('class', 'invalid');
    
    console.log(input('data-length'));
    console.log(ev.currentTarget.value.length);
    
});