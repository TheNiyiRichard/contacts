// Contact class

// Array to store contacts
let contacts = [];

// Function to add a contact
function addContact(name, city, email) {

    // Validation for name, city, and email
    if (!validateName(name)) {
        alert("Invalid name input");
        return false;
    }
    if (!validateCity(city)) {
        alert("Invalid city input");
        return false;
    }
    if (!validateEmail(email)) {
        alert("Invalid email input");
        return false;
    }

    const newContact = new Contact(name, city, email);
    contacts.unshift(newContact); // Adding to the beginning of the array
    listContacts();
    return true;
}
function validateName(name) {
    return name.trim() !== "";
}

function validateCity(city) {
    // Add city validation logic here
    return city.trim() !== "";
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}
// Function to list contacts
function listContacts() {
	const contactsList = document.getElementById("contactsList");
	contactsList.innerHTML = ""; // Clear current contacts
	contacts.forEach((contact, index) => {
		const contactDiv = document.createElement("div");
		contactDiv.classList.add("contact");
		contactDiv.innerHTML = `
            <strong>${contact.getName()}</strong>
            <span class="v-city">
							<span class="v-key">City: </span>
							<span class="v-value">${contact.getCity()}</span>
						</span>
            <span class="v-email">
							<span class="v-key">Email: </span>
							<span class="v-value">${contact.getEmail()}</span>
						</span>
        `;
		contactDiv.onclick = function () {
			deleteContact(index);
		};
		contactsList.appendChild(contactDiv);
		document.querySelector('.total_number').innerHTML = `Total Contacts: ${contacts.length}`;

	});
}

// Function to delete a contact
function deleteContact(index) {
	contacts.splice(index, 1);
	listContacts();
}

// Form submission handling
document.getElementById("contactForm").addEventListener("submit", function (event) {
	event.preventDefault();
	const inputValues = document.getElementById("name").value.split(",");
    const name = inputValues[0].trim()
    const city = inputValues[1].trim()
    const email = inputValues[2].trim()

    if (!name || !city || !email) {
        alert("Empty fields detected. Please ensure all fields are filled.");
        return false;
    }
    else{
    	addContact(name, city, email);
		document.getElementById("name").value = "";
    }
	
});
