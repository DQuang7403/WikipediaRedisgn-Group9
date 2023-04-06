// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {getDatabase, set, ref} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2auruNiFgCJ5avDlZbP8WtcolXYNSWKw",
  authDomain: "wikipediaredesign9.firebaseapp.com",
  databaseURL: "https://wikipediaredesign9-default-rtdb.firebaseio.com",
  projectId: "wikipediaredesign9",
  storageBucket: "wikipediaredesign9.appspot.com",
  messagingSenderId: "841997889837",
  appId: "1:841997889837:web:10f26e5db050a30bfce3a4"
};

const app = initializeApp(firebaseConfig);
const dataBase = getDatabase(app);
const auth = getAuth();
const logIn = document.getElementById("logIn");
logIn.addEventListener('click',(e)=>{
  let Email = document.getElementById('Gmail').value;
  let Password = document.getElementById('login-password').value;
  signInWithEmailAndPassword(auth, Email, Password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user; 
      alert("User loged in")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });
})

const mobileNav = document.getElementsByClassName("mobileNav")[0];
const humbergerMenu = document.getElementsByClassName("humbergerMenu")[0];
humbergerMenu.addEventListener("click", () =>{
  mobileNav.classList.toggle("active");
})
const userBtn = document.getElementsByClassName("userIcon");
for(let i = 0; i < userBtn.length; i++){
  userBtn[i].addEventListener('click',()=>{
  const content = document.getElementsByClassName("userInformations")[i];
  if(content.style.display == 'none'){
    content.style.display = 'flex';
  }else{
    content.style.display = "none"
  }
  
  })
}
// 