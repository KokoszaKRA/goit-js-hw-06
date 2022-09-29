const input = document.querySelector('input#validation-input');


input.addEventListener("blur" , (ev) => {
    if (ev.currentTarget.value.length === 6) ev.currentTarget.setAttribute('class', 'valid')
    else ev.currentTarget.setAttribute('class', 'invalid');

});


document.body.style.listStyle = "none";
document.body.style.flexDirection = "column";
document.body.style.display = "flex";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";