
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

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
const auth = getAuth(app);
console.log(auth)

function checkUser() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
        } else {
            location.href = 'login.html'
        }
    });
};


const signup = (email, password,) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            location.href = 'Amazon Clone-Assignment/index.html'
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
}


const signIn = (email, password) => {
    console.log(email,password)
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            location.href = 'Amazon Clone-Assignment/index.html'

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)

        });
}


export {
    checkUser,
    signup,
    signIn
}


