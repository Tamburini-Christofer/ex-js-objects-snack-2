const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}
​
const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?

// Soluzione: per clonaree l'oggetto chef il meglio è spread perchè clona anche le funzioni
// Soluzione: per clonare l'oggetto restaurant il meglio è sempre structureClone perchè copia anche il formato data corretto e non un JSON