
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
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
const analytics = getAnalytics(app);
const db = getFirestore(app);
console.log("App==>", app);
console.log("db==>", db);
// addNumberdb();
// async function addNumberdb() {
//     try {
//         const addCollection = collection(db, "Numbers");
//         let addref = await addDoc(addCollection, {
//             Number: Math.round(Math.random() * 1000000)
//         })
//         console.log("addref==>", addref)
//         // console.log("Document written with ID: ", docRef);
//     } catch (e) {
//         console.log("Error adding document: ", e);
//     }
// }
var todo_input = document.getElementById("todo_input");
var todo_btn = document.getElementById("todo_btn");
var todo_list = document.getElementById("todo_list");
todo_btn.addEventListener("click", todofunc);
async function todofunc() {
    const Object = {
        todo: todo_input.value,
        created: new Date().toISOString()
    }
    try {
        const todoCollection = collection(db, "Todos")
        let addref = await addDoc(todoCollection, Object)
        console.log("addref==>", addref)
        todo_input.value = "";
        gettodoCollection()
    }
    catch (e) {
        console.log("Error==>", e)
    }
}
gettodoCollection();
async function gettodoCollection() {
    try {
        const querySnapshot = await getDocs(collection(db, "Todos"));
        todo_list.innerHTML = "";
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data()}`);
            console.log("Doc===>", doc.id)
            // console.log("Data===>", doc.data())
            const { todo, created } = doc.data();
            const element = `<li id= ${doc.id} class="javaclass">${todo} - ${new Date().toLocaleDateString()}</li>`;
            todo_list.innerHTML += element;
            todo_list.childNodes.forEach((li) =>
                li.addEventListener("click", deletetodo
                ));
        });
    } catch (e) {
        console.log(e)
    }
}
async function deletetodo() {
    try {
        const docid = this.id;
        const docCollection = doc(db, "Todos", docid)
        const docRef = await deleteDoc(docCollection)
        // getTodosFromDb()
        gettodoCollection()
        console.log("Document deleted==>", docRef)
    } catch (ele) {
        console.log(ele)
    }
}