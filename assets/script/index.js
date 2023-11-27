// Contact class
class Contact {
	constructor(name, city, email) {
		this.name = name;
		this.city = city;
		this.email = email;
	}

	// Getters
	getName() {
		return this.name;
	}

	getCity() {
		return this.city;
	}

	getEmail() {
		return this.email;
	}
}

// Array to store contacts
let contacts = [];

// Function to add a contact
function addContact(name, city, email) {
	const newContact = new Contact(name, city, email);
	contacts.unshift(newContact); // Adds the new contact to the beginning of the array
	listContacts();
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
	const name = document.getElementById("name").value.split(",")[0];
	const city = document.getElementById("name").value.split(",")[1];
	const email = document.getElementById("name").value.split(",")[2];
	addContact(name, city, email);
	document.getElementById("name").value = "";
});
