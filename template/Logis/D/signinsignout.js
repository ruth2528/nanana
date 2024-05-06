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
  firebase.auth().languageCode = 'en';
  
  // Sign-in function
 // Sign-in function
 function signIn() {
    // Redirect to the sign-in page
    window.location.href = "D/signin.html";
    return false;
  }



  function signInWithEmailAndPassword() {
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
        document.getElementById('sign-in-button').style.display = 'none';
        document.getElementById('sign-out-button').style.display = 'block';
  
        // Redirect to the home page
        window.location.href = "../index.html";
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
  
  // Sign-out function
  function signOut() {
    // Sign out the user
    firebase.auth().signOut()
      .then(() => {
        // Signed out successfully
        console.log("Signed out successfully.");
  
      // Update UI after sign-out.
      document.getElementById('sign-in-button').style.display = 'block';
      document.getElementById('sign-out-button').style.display = 'none';
  
        // Redirect to the sign-in page
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.error("Error signing out:", error);
        alert("An error occurred while signing out. Please try again later.");
      });
  
    return false;
  }
  

  // Toggle sign-in and sign-out buttons
  function toggleSignInSignOut(showSignIn) {
    const signInButton = document.getElementById("sign-in-button");
    const signOutButton = document.getElementById("sign-out-button");
  
    if (!signInButton || !signOutButton) {
      console.error("Sign-in or sign-out button not found.");
      return;
    }
  
    if (showSignIn) {
      // Show the sign-in button
      signInButton.style.display = "block";
  
      // Hide the sign-out button
      signOutButton.style.display = "none";
    } else {
      // Hide the sign-in button
      signInButton.style.display = "none";
  
      // Show the sign-out button
      signOutButton.style.display = "block";
    }
  }
  
  // Add event listener to sign-in button
  // Listen for the sign-in and sign-out buttons being clicked
  document.getElementById('sign-in-button').addEventListener('click', signIn);
  document.getElementById('sign-out-button').addEventListener('click', signOut);