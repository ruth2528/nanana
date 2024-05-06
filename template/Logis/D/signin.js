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
// Function to handle form submission for sign-in
document.getElementById("signin-form").addEventListener('submit', signIn);

function signIn(event) {
  event.preventDefault(); // Prevent form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      console.log("User signed in:", user.uid);

      // Query user data from the database
      samplessdb.orderByChild('email').equalTo(email).once('value', (snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          const storedPassword = userData[Object.keys(userData)[0]].password;

          if (password === storedPassword) {
            const role = userData[Object.keys(userData)[0]].role;
            // Redirect based on user role
            if (role === 'customer') {
              window.location.href = '../C/indexasic.html';
            } else if (role === 'service provider') {
              window.location.href = '../SP/indexasisp.html';
            }
          } else {
            alert('Incorrect password');
          }
        } else {
          alert('User does not exist. Please sign up.');
        }
      });
    })
    .catch((error) => {
      // Handle authentication errors
      console.error("Error signing in:", error.message);
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        alert('Incorrect email or password');
      } else {
        alert("Unexpected error occurred. Please Sign-UP if you are not already signed up.");
      }
    });
}
