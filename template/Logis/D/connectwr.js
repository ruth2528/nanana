

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
document.getElementById("signup-form").addEventListener('submit', submitform);

function submitform(e) {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    var email = getElementVal('email');
    var password = getElementVal('password');
    var fullname = getElementVal('fullname');
    var role = getElementVal('role');

    // Log form values
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Full Name:", fullname);
    console.log("Role:", role);

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up successfully
            const user = userCredential.user;
            console.log("User signed up:", user.uid);
            alert('User created successfully!');

            // Save form values to Firebase Realtime Database
            if (role === 'customer') {
                // Save data for customer
                savemessage(user.uid,email, fullname, password, role);
                window.location.href = "../SP/indexasisp.html";
            } else if (role === 'service provider') {
                
                // Redirect to register.html for additional information
                window.location.href = "registersp.html?uid=" + user.uid + "&email=" + encodeURIComponent(email) + "&fullname=" + encodeURIComponent(fullname) + "&role=" + encodeURIComponent(role);

                savemessage(user.uid,email, fullname, password, role);
            }
        })
        .catch((error) => {
            // Handle errors
            console.error("Error signing up:", error.message);
            alert(error.message);
        });
}

// Function to save form values to Firebase Realtime Database
const savemessage = (userId,email, fullname, password, role) => {
    var userData = {
        email: email,
        fullname: fullname,
        password: password,
        role: role
    };

    // Save user data to Firebase Realtime Database
   // samplessdb.push(userData);
    samplessdb.child(userId).set(userData);
    // Log saved data
    console.log("Data saved to Firebase:", userData);

     // After saving data to database, updateDatabaseFromRegisterSP2() will be called
      
};

// Function to get element value by ID
const getElementVal = (id) => {
    return document.getElementById(id).value;
};




// Read data from registersp2.html and update database
/*function updateDatabaseFromRegisterSP2(email, fullname, role) {
    const urlParams = new URLSearchParams(window.location.search);
    const fieldOfWork = getElementVal('fieldOfWork');
    const qualification = getElementVal('qualification');
    const yearsOfExperience = getElementVal('yearsOfExperience');
    const birthDate = getElementVal('birthDate');
    const district = getElementVal('district');
    const city = getElementVal('city');
    const region = getElementVal('region');
    const postalCode = getElementVal('postalCode');

    // Update data in the database
    samplessdb.orderByChild("email").equalTo(email).once("value", function(snapshot) {
        snapshot.forEach(function(child) {
            child.ref.update({
                fieldOfWork: fieldOfWork,
                qualification: qualification,
                yearsOfExperience: yearsOfExperience,
                birthDate: birthDate,
                district: district,
                city: city,
                region: region,
                postalCode: postalCode
            });
        });

        // Once database updates are complete, redirect to index.html
        window.location.href = "../index.html";
    });
}
//document.getElementById("registrationForm").addEventListener('submit', updateDatabaseFromRegisterSP2);
//document.getElementById("registrationForm").addEventListener('Register', updateDatabaseFromRegisterSP2);

//document.getElementById("signUp1").addEventListener('click', updateDatabaseFromRegisterSP2);
*/