
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDEWizSHweYkjg51Q7xUCl1-Y3WQkBRVLI",
    authDomain: "rapidrepairs-4.firebaseapp.com",
    databaseURL: "https://rapidrepairs-4-default-rtdb.firebaseio.com",
    projectId: "rapidrepairs-4",
    storageBucket: "rapidrepairs-4.appspot.com",
    messagingSenderId: "567460102691",
    appId: "1:567460102691:web:8b542dcc39b923a2926796",
    measurementId: "G-SQMMBEY43H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().languageCode = 'en';

// Check user authentication state
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    document.getElementById("signin-button").style.display = "none";
    document.getElementById("signout-button").style.display = "block";
  } else {
    // User is signed out
    document.getElementById("signin-button").style.display = "block";
    document.getElementById("signout-button").style.display = "none";
  }
});

// Sign-in function
function signIn() {
  // Your sign-in function here

  // Sign-in function
function signIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validate email and password
  if (!email || !password) {
    alert("Please enter email and password.");
    return false;
  }

  // Sign in the user
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      console.log("Signed in as:", user.email);

      // Update UI after sign-in
      toggleSignInSignOut();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === "auth/user-not-found") {
        alert("User not found. Please sign up first.");
      } else if (errorCode === "auth/wrong-password") {
        alert("Incorrect password. Please try again.");
      } else {
        console.error("Error signing in:", error);
        alert("An error occurred while signing in. Please try again later.");
      }
    });

  return false;
}
}

// Sign-out function
function signOut() {
  firebase.auth().signOut().then(() => {
    // Update UI after sign-out
    document.getElementById("signin-button").style.display = "block";
    document.getElementById("signout-button").style.display = "none";
  }).catch((error) => {
    console.error('Error signing out:', error);
  });
}

// Toggle sign-in and sign-out buttons
function toggleSignInSignOut() {
  const signinButton = document.getElementById("signin-button");
  const signoutButton = document.getElementById("signout-button");

  if (signinButton.style.display === "none") {
    signinButton.style.display = "block";
    signoutButton.style.display = "none";
  } else {
    signinButton.style.display = "none";
    signoutButton.style.display = "block";
  }
}

// Add event listener to sign-in button
document.getElementById("signin-button").addEventListener("click", toggleSignInSignOut);

// Add event listener to sign-out button
document.getElementById("signout-button").addEventListener("click", signOut);