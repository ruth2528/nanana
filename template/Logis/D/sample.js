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

// Function to update database from registersp2.html
document.getElementById("signUp1").addEventListener('click', updateDatabaseFromRegisterSP2);

function updateDatabaseFromRegisterSP2() {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    const fullname = urlParams.get('fullname');
    const role = urlParams.get('role');
    const uid = urlParams.get('uid');

    if (role === 'service provider') {
        // Get additional details from registersp2.html
        const fieldOfWork = getElementVal('fieldOfWork');
        const qualification = getElementVal('qualification');
        const yearsOfExperience = getElementVal('yearsOfExperience');
        const birthDate = getElementVal('birthDate');
        const district = getElementVal('district');
        const city = getElementVal('city');
        const description = getElementVal('description');
        const contactnum = getElementVal('contactnum');

        // Update data in the database
       /* samplessdb.orderByChild("email").equalTo(email).once("value", function(snapshot) {
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
                },
                */
                samplessdb.child(uid).update({ // Use the user's UID as the key
                    email: email,
                    fullname: fullname,
                    role: role,
                    fieldOfWork: fieldOfWork,
                    qualification: qualification,
                    yearsOfExperience: yearsOfExperience,
                    birthDate: birthDate,
                    district: district,
                    city: city,
                    description:description,
                    contactnum: contactnum
                }, 
                function(error) {
                    if (error) {
                        console.error("Error updating database:", error);
                    } else {
                        // Database update successful, now redirect
                        window.location.href = "../SP/indexasisp.html";
                    }
                });
            }
        }
    


// Function to get element value by ID
function getElementVal(id) {
    return document.getElementById(id).value;
}
