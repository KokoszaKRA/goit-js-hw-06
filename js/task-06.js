const input = document.querySelector('input#validation-input');

input.addEventListener("blur" , (ev) => {
    
    if (ev.currentTarget.value.length <= ev.currentTarget.getAttribute('data-length')) 
    ev.currentTarget.setAttribute('class', 'valid')
    else ev.currentTarget.setAttribute('class', 'invalid');
   
    console.log(ev.currentTarget.value.length);
    console.log(ev.currentTarget.getAttribute('data-length'));
});
