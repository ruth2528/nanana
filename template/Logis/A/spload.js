// Function to toggle verification status
function toggleVerification(providerId) {
    var checkbox = document.getElementById('verify_' + providerId.split('_')[1]);
    var serviceProviderRef = firebase.database().ref('commonsignup3/' + providerId); // Reference to the specific service provider in the database

    // Update the verification status in the database based on the checkbox state
    serviceProviderRef.update({
        verified: checkbox.checked // Update the 'verified' field in the database to match the checkbox state
    }).then(function() {
        console.log('Verification status updated successfully');
        // You can add visual feedback here if needed
    }).catch(function(error) {
        console.error('Error updating verification status: ', error);
        // Handle any errors here
    });
}

// Function to load service providers from the Firebase Realtime Database into the table
const firebaseConfig = {
    // Your Firebase configuration
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
console.log("Initializing Firebase...");
firebase.initializeApp(firebaseConfig);

// Reference to the Firebase Realtime Database
var samplessdb = firebase.database().ref('commonsignup3');

function loadServiceProviders() {
    console.log("Loading service providers...");
    var serviceProvidersRef = firebase.database().ref('commonsignup3').orderByChild('role').equalTo('service provider');
    console.log("Service providers reference:", serviceProvidersRef);

    serviceProvidersRef.once('value', function(snapshot) {
        console.log("Snapshot:", snapshot.val()); 
        var serviceProviders = snapshot.val();
        if (serviceProviders) {
            var tableBody = document.getElementById('service-providers-table').getElementsByTagName('tbody')[0];

            // Clear existing rows
            tableBody.innerHTML = '';

            // Loop through each service provider and add a row to the table
            for (var key in serviceProviders) {
                var serviceProvider = serviceProviders[key];

                // Create a new row
                var row = document.createElement('tr');

                // Add cells for each property
                var nameCell = document.createElement('td');
                nameCell.textContent = serviceProvider.fullname || '-';
                row.appendChild(nameCell);

                var emailCell = document.createElement('td');
                emailCell.textContent = serviceProvider.email || '-';
                row.appendChild(emailCell);


                var fieldOfWorkCell = document.createElement('td');
                fieldOfWorkCell.textContent = serviceProvider.fieldOfWork;
                row.appendChild(fieldOfWorkCell);

                var qualificationCell = document.createElement('td');
                qualificationCell.textContent = serviceProvider.qualification;
                row.appendChild(qualificationCell);

                var yearsOfExperienceCell = document.createElement('td');
                yearsOfExperienceCell.textContent = serviceProvider.yearsOfExperience;
                row.appendChild(yearsOfExperienceCell);

                var birthDateCell = document.createElement('td');
                birthDateCell.textContent = serviceProvider.birthDate;
                row.appendChild(birthDateCell);

                var districtCell = document.createElement('td');
                districtCell.textContent = serviceProvider.district;
                row.appendChild(districtCell);

                var cityCell = document.createElement('td');
                cityCell.textContent = serviceProvider.city;
                row.appendChild(cityCell);

                var descriptionCell = document.createElement('td');
                descriptionCell.textContent = serviceProvider.description;
                row.appendChild(descriptionCell);

                var contactnumCell = document.createElement('td');
                contactnumCell.textContent = serviceProvider.contactnum;
                row.appendChild(contactnumCell);

                // Add the verification checkbox cell
                var verificationCell = document.createElement('td');
                var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.name = 'verification_' + key; // Use a unique name for each checkbox
                checkbox.id = 'verify_' + key; // Use a unique ID for each checkbox
                checkbox.addEventListener('change', function() {
                    toggleVerification(this.id);
                });
                verificationCell.appendChild(checkbox);
                row.appendChild(verificationCell);

                // Add the row to the table
                tableBody.appendChild(row);
                tableBody.appendChild(row);
            }
        } else {
            console.log("No service providers found");
        }
    }).catch(function(error) {
        console.error('Error loading service providers: ', error);
    });
}
// Load service providers when the page loads
//window.onload = loadServiceProviders;
console.log("Before adding window.onload event listener");
window.onload = function() {
    console.log("Window onload event fired");
    loadServiceProviders();
};
console.log("After adding window.onload event listener");