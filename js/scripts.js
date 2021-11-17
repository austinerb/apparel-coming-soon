let form = document.querySelector("form");
let emailForm = document.querySelector(".email");
let errorIcon = document.querySelector(".error-icon");
let errorMsg = document.querySelector(".error-msg");

// set event listener for submit and prevent submition
form.addEventListener("submit", function(e) {
  e.preventDefault();

  // submit form if email is valid
  // else, add error styles
  if (checkEmail()) {
    // remove error styles
    emailForm.classList.remove("input-error");
    errorIcon.classList.remove("visible");
    errorMsg.classList.remove("visible");

    // submit form
    form.submit();
  } else {
    // add error styles
    emailForm.classList.add("input-error");
    errorIcon.classList.add("visible");
    errorMsg.classList.add("visible");
  }
});

// check email
function checkEmail() {
  let regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return regex.test(emailForm.value);
}
