
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
firebase.initializeApp(firebaseConfig);

// Reference to the Firebase Realtime Database
var samplessdb = firebase.database().ref('commonsignup3');



// Function to toggle between Sign In and Sign Out based on user authentication state
function toggleSignInSignOut() {
    const user = firebase.auth().currentUser;
    if (user) {
        signOut();
    } else {
        // Redirect to the sign-in page
        window.location.href = "D/signin.html"; // Replace "signin.html" with your actual sign-in page URL
    }
}

// Function to handle sign out
function signOut() {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      // After sign out, update the link text to "SIGN IN"
      document.getElementById("signin-signout-link").innerText = "SIGN IN";
      document.getElementById("signin-signout-link").setAttribute("href", "D/signup1.html"); // Add the href attribute back
      document.getElementById("signin-signout-link").removeEventListener("click", signOut); // Remove sign-out listener
      document.getElementById("signin-signout-link").addEventListener("click", toggleSignInSignOut); // Add sign-in listener
    }).catch((error) => {
      // An error happened.
      console.error("Sign out error:", error);
    });
  }
