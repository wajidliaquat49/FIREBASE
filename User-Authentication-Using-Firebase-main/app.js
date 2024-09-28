// // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAbL_0DHhSDaQIIIdC9Q8gzmQztTFgZT9c",
    authDomain: "my-first-project-65013.firebaseapp.com",
    projectId: "my-first-project-65013",
    storageBucket: "my-first-project-65013.appspot.com",
    messagingSenderId: "895713215639",
    appId: "1:895713215639:web:09b31c4f8910bcb86f55d2",
    measurementId: "G-EDBKJ5FJLQ"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
// // console.log("App-->",app)

const auth = getAuth(app)
// // console.log("Auth-->",auth)


const sign_up_email = document.getElementById("sign_up_email");
const sign_up_password = document.getElementById("sign_up_password");
const sign_up_btn = document.getElementById("sign_up_btn");

const sign_in_email = document.getElementById("sign_in_email");
const sign_in_password = document.getElementById("sign_in_password");
const sign_in_btn = document.getElementById("sign_in_btn");

const signup_signin = document.getElementById("signup_signin");
const logout_div = document.getElementById("logout_div");
const gmailtext = document.getElementById("gmailtext");
const log_out_btn = document.getElementById("log_out_btn");



sign_up_btn.addEventListener("click", createAccount)
sign_in_btn.addEventListener("click", signIn)
log_out_btn.addEventListener("click", logOut)


function createAccount() {
    // console.log("UsersEmail==>", sign_up_email.value)
    // console.log("UsersPassword==>", sign_up_password.value)
    createUserWithEmailAndPassword(auth, sign_up_email.value, sign_up_password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            // alert("Users Account is Successfully")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
}


function signIn() {
    // console.log("UsersEmail==>", sign_in_email.value)
    // console.log("UsersPassword==>", sign_in_password.value)
    signInWithEmailAndPassword(auth, sign_in_email.value, sign_in_password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            // alert("Users Account is Loggin")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
}



onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User-->", "User is Loggin")
        const uid = user.uid;
        //         // ...
        signup_signin.style.display = "none";
        logout_div.style.display = "block";
        gmailtext.innerText = user.email;


    } else {
        console.log("User-->", "User is not Loggin")
        // User is signed out
        //         // ...
        signup_signin.style.display = "block";
        logout_div.style.display = "none";
        //
    }
});


function logOut() {
    signOut(auth).then(() => {
        // Sign-out successful.
        // alert("SignOut is Successfully")
    }).catch((error) => {
        // An error happened.
        alert(errorMessage);

    });
}