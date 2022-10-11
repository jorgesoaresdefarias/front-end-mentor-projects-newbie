const form = document.querySelector(".wrapper form");
const email = document.querySelector(".wrapper form input[type=email]");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailValue = email.value;
    if(validateEmail(emailValue)){
        console.log('CERTO');
        form.classList.remove('error');
    } else {
        console.log('ERRADO');
        form.classList.add('error');
    }
});

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };