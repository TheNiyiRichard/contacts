class Contact {
    name;
    city;
    email;

    constructor(name, city, email) {
        this.name = name;
        this.city = city;
        this.email = email;
    }

    // Getters for private fields
    getName() { return this.name; }
    getCity() { return this.city; }
    getEmail() { return this.email; }
}
