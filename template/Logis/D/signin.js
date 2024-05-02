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

// Reference to the Firebase Realtime Database
var samplessdb = firebase.database().ref('commonsignup3');

// Function to handle form submission
// Function to handle form submission for sign-in
// Function to handle form submission for sign-in
document.getElementById("signin-form").addEventListener('submit', signIn);

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
          const storedPassword = userData[Object.keys(userData)[0]].password;
          if (password === storedPassword) {
            const role = userData[Object.keys(userData)[0]].role;
            if (role === 'customer') {
              // Redirect to customer dashboard
              window.location.href = '../indexasc.html';
            } else if (role === 'service provider') {
              // Redirect to service provider dashboard
              window.location.href = '../indexasp.html';
            }
          } else {
            // Incorrect password
            alert('Incorrect password');
          }
        } else {
          // User does not exist
          alert('User does not exist. Please sign up.');
        }
      })
      .catch((error) => {
        // Handle errors
        console.error("Error checking user role:", error.message);
        //alert(error.message)
        alert("Please sign up.");
      });
    })
    .catch((error) => {
      // Handle errors
      console.error("Error signing in:", error.message);
      if (error.code === 'auth/user-not-found') {
        alert('User does not exist. Please sign up.');
      } else if (error.code === 'auth/wrong-password') {
        alert('Incorrect password');
      } else {
        alert("Unexpected error occurred. Please try again later.If not signed up please signup using the link given");
      }
    });
}