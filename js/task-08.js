const form = document.querySelector(".login-form");

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return alert("Wypełni wszystkie pola !");
    }
    
    alert(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}

form.addEventListener("submit", handleSubmit);