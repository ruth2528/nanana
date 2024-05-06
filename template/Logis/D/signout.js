const firebaseConfig = {
    // Your Firebase config here
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

  // Add event listener to the "SIGN-OUT" link
  document.getElementById("sign-out-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log("User signed out successfully");
      alert("signout success");
      window.location.href = '../index.html';
      // Redirect to another page or update UI as needed
    }).catch(function(error) {
      // An error happened.
      console.error("Error signing out:", error);
      alert("error in signout ");
      
    });
  });