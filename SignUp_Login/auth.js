// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBAVc5RyFX8FxSS687Wm7aGM7h1SKkH_U8",
  authDomain: "dashboard-be403.firebaseapp.com",
  databaseURL: "https://dashboard-be403.firebaseio.com",
  projectId: "dashboard-be403",
  storageBucket: "dashboard-be403.appspot.com",
  messagingSenderId: "1092837736140",
  appId: "1:1092837736140:web:0406a5e49264c29d33cc69",
  measurementId: "G-9VXE9135YX",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
const auth = firebase.auth();
function register() {
  const name = document.getElementById("signup-name");
  const email = document.getElementById("signup-email");
  const password = document.getElementById("signup-password");

  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch((e) => alert(e.message));

  alert("Signed Up");
}

/* function login() {
  const email = document.getElementById("signin-email");
  const password = document.getElementById("signin-password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch((e) => alert(e.message));
  alert("Signed in" + email.value);
} */

function signOut() {
  auth.signOut();
  alert("Signed Out");
}

auth.onAuthStateChanged(function (user) {
  if (user) {
    var email = user.email;
    alert("Active User " + email);
    console.log("Welcome");
    window.location = "../Dashboard/dashboard.html";
    //Take user to a different or home page

    //is signed in
  } else {
    alert("No Active User");
    //signOut();
    //no user is signed in
  }
});