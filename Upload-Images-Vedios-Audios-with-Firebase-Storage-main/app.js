
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyAbL_0DHhSDaQIIIdC9Q8gzmQztTFgZT9c",
    authDomain: "my-first-project-65013.firebaseapp.com",
    projectId: "my-first-project-65013",
    storageBucket: "my-first-project-65013.appspot.com",
    messagingSenderId: "895713215639",
    appId: "1:895713215639:web:09b31c4f8910bcb86f55d2",
    measurementId: "G-EDBKJ5FJLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

console.log("App==>", app)
console.log("Storage==>", storage)

const formFileLg = document.getElementById("formFileLg");
const userImage = document.getElementById("userImage");

formFileLg.addEventListener("change", uplaod);

function uplaod() {
    const ImageRef = ref(storage, `Images/${formFileLg.files[0].name}`);

    uploadBytes(ImageRef, formFileLg.files[0]).then((snapshot) => {
        console.log('Uploaded a blob or file!');

    });

    getDownloadURL(ImageRef)
        .then((url) => {
            console.log("Url==>", url)
            userImage.src = url;
        })
        .catch((error) => {
        });

    console.log(ImageRef);
}