const input = document.querySelector('input#validation-input');

input.addEventListener("blur" , (ev) => {
    const dataLenght = input.getAttribute('data-length');
    console.log(dataLenght);
    const contentLength = input.value.length;
    console.log(contentLength);

    if (ev.currentTarget.value.length <= dataLenght) 
    ev.currentTarget.setAttribute('class', 'valid')
    else ev.currentTarget.setAttribute('class', 'invalid');

});
