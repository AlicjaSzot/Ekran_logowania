const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("submit");
const span = document.getElementsByClassName("email-error");

function disable(isDisabled) {
  const el = document.getElementById('button_submit');
  el.disabled = isDisabled
}

const validate = (e) => {
  e.preventDefault();
  let emailValue = email.value;
  let passwordValue = password.value;

  if (passwordValue.length > 0) {
    if (passwordValue.length > 4 && passwordValue.length < 20) {
      password.style.backgroundColor = "green";
      span[0].innerText = "";
      disable(false);
    } else {
      password.style.backgroundColor = "red";
      span[0].innerText = "Błędne hasło";
      disable(true)
    }
  } else {
    password.style.backgroundColor = "";
    span[0].innerText = "";
    disable(false)
  }
  
  if (emailValue.length > 0) {
    if (emailValue.includes("@")) {
      email.style.backgroundColor = "green";
      disable(false);
    } else {
      email.style.backgroundColor = "red";
      disable(true);
    } 
  } else {
    email.style.backgroundColor = "";
  }

} 

const submit = (e) => {
  e.preventDefault();
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  })
}
document.addEventListener("keyup",validate );
form.onsubmit = submit












