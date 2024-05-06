
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

// Reference to the service providers node in Firebase
const serviceProvidersRef = firebase.database().ref('commonsignup3');

// Function to fetch and display service providers
function displayServiceProviders() {
    serviceProvidersRef.on('value', (snapshot) => {
        const serviceProviders = snapshot.val();

        // Clear previous content
        document.getElementById('serviceProvidersList').innerHTML = '';

        // Loop through each service provider and display their details
        for (const key in serviceProviders) {
            if (Object.hasOwnProperty.call(serviceProviders, key)) {
                const provider = serviceProviders[key];
                const providerDetails = `
                    <div class="provider">
                        <h2>${provider.fieldOfWork}</h2>
                        <p>Qualification: ${provider.qualification}</p>
                        <p>Experience: ${provider.yearsOfExperience} years</p>
                        <p>Birth Date: ${provider.birthDate}</p>
                        <p>District: ${provider.district}</p>
                        <p>Contact Number: ${provider.contactNum}</p>
                        <p>Description: ${provider.description}</p>
                    </div>
                `;
                document.getElementById('serviceProvidersList').innerHTML += providerDetails;
            }
        }
    });
}

// Call the function to display service providers when the page loads
window.onload = displayServiceProviders;