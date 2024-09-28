import { signIn } from "./complete.js"


var login_email = document.getElementById("login_email");
var login_password = document.getElementById("login_password");
var login_btn = document.getElementById("login_btn");


login_btn.addEventListener('click', () => {
    // console.log(signup_email.value, signup_password.value)

    signIn(login_email.value, login_password.value);

    login_email.value = "";
    login_password.value = "";
});
