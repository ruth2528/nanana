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

// Reference to the Firebase Realtime Database
var samplessdb = firebase.database().ref('commonsignup3');

function signIn() {
    console.log("signIn() function is being invoked.");
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Sign in the user with email and password
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        console.log("User signed in:", user.uid);
  
        // Check user role and redirect to appropriate page
        samplessdb.orderByChild('email').equalTo(email).once('value', (snapshot) => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            const role = userData[Object.keys(userData)[0]].role;
            if (role === 'customer') {
              // Redirect to customer dashboard
              window.location.href = '../indexasu.html';
            } else if (role === 'service provider') {
              // Redirect to service provider dashboard
              window.location.href = '../indexasu.html';
            }
          } else {
            // User does not exist
            alert('User does not exist');
          }
        });
      })
      .catch((error) => {
        // Handle errors
        console.error("Error signing in:", error.message);
        //alert(error.message);
        alert("Please signup");
      });
  }