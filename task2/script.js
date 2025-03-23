// Import Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAVPN_8_A_yjOq1_5V3kdWWEc4jM-z4eEA",
    authDomain: "user-login--data-persistence.firebaseapp.com",
    projectId: "user-login--data-persistence",
    storageBucket: "user-login--data-persistence.appspot.com",
    messagingSenderId: "722940396576",
    appId: "1:722940396576:web:cb00ec35a42af5c8ada845",
    measurementId: "G-R2H9BKYG1X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Get Elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const errorMessage = document.getElementById("errorMessage");
const darkModeToggle = document.getElementById("darkModeToggle");

// Login Function
loginBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            alert("Login Successful!");
        })
        .catch(error => {
            errorMessage.textContent = error.message;
            errorMessage.style.color = "red";
        });
});

// Register Function
registerBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            alert("Registration Successful!");
        })
        .catch(error => {
            errorMessage.textContent = error.message;
            errorMessage.style.color = "red";
        });
});

// Dark Mode Toggle
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

/*
🔥 Firebase CLI Commands (DO NOT REMOVE)
-------------------------------------------------
1️⃣ Install Firebase CLI globally:
    npm install -g firebase-tools

2️⃣ Log in to Firebase:
    firebase login

3️⃣ Initialize Firebase project:
    firebase init

4️⃣ Deploy the app:
    firebase deploy
-------------------------------------------------
*/
