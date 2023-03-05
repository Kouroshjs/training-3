let $ = document
let usernameInput = $.getElementById('username');
let passwordInput = $.getElementById('password');
let usernameError = $.getElementById('usernameError');
let passwordError = $.getElementById('passwordError');
let modal = $.getElementById('modal');
let submitBtn = $.getElementById('submit');
let modalTxt = $.getElementById('textModal');


usernameInput.addEventListener('keydown', function() {
  if (usernameInput.value.length<12) {
    usernameError.style.display = 'block'
    usernameError.style.color = 'red'
    usernameError.innerHTML = 'username must be at least 12 character :('
  } else {
    usernameError.style.display = 'block'
    usernameError.style.color = 'green'
    usernameError.innerHTML = 'username is currect :)'
  }
})


passwordInput.addEventListener('keydown', function () {  
  if (passwordInput.value.length < 8) {
    passwordError.style.display = 'block'
    passwordError.style.color = 'red'
    passwordError.innerHTML = 'password must be at least 8 character :('
  } else {
    passwordError.style.display = 'block'
    passwordError.style.color = 'green'
    passwordError.innerHTML = 'password is currect :)'
  }
})


submitBtn.addEventListener('click', function () {
  if (passwordInput.value.length < 8 || usernameInput.value.length<12 ) {
    modal.style.display = 'inline'
  } else {
    modal.style.display = 'inline'
    modal.style.background = 'green'
    modalTxt.innerHTML = 'Login succesfull :)'
  }
})


