import { signup } from "./complete.js"


const signup_email = document.getElementById("signup_email")
const signup_password = document.getElementById("signup_password")
const signup_firstname = document.getElementById("signup_firstname")
const signup_lastname = document.getElementById("signup_lastname")
const signup_btn = document.getElementById("signup_btn")


signup_btn.addEventListener('click', () => {

    // console.log(signup_email.value, signup_password.value)
    signup(signup_email.value, signup_password.value);

    signup_email.value = "";
    signup_password.value = "";
    signup_firstname.value = "";
    signup_lastname.value = "";
})

