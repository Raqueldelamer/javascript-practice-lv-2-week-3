// File: objectMethods.js

console.log("Object Methods Exercise");

// Example 1: Adding Methods to a Book Object
const book = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  pages: 281,
  read() {
    console.log(`${this.title} by ${this.author} has been read.`);
  },
  updatePages(newPages) {
    this.pages = newPages;
  }
};

console.log("Example 1: Book Object with Methods");
book.read();           // Output: To Kill a Mockingbird by Harper Lee has been read.
console.log(book.pages); // Output: 281
book.updatePages(300);
console.log(book.pages); // Output: 300

// TODO 1: Add a method to `movie` object
// Add a method named `watch` that logs a message: "You watched {movie.title}."
// Add another method named `updateYear` that updates the `year` property.
// Use `this` to access and modify the properties.
console.log("ToDo 2: Movie Object with Methods");
let movie = {
  title: "Marie Antoinette",
  year: 2006,
  watch() {
    this.year += 1;
    console.log(`You watched the movie ${this.title} in ${this.year}.`)
  },
  updateYear(y) {
    this.year = y;
  }
}
movie.watch();
console.log(movie);
movie.updateYear(2006);
console.log(movie);


// Example 2: Adding Methods to a Pet Object
const pet = {
  name: 'Whiskers',
  species: 'Cat',
  age: 5,
  celebrateBirthday() {
    this.age += 1;
    console.log(`Happy Birthday ${this.name}! You are now ${this.age} years old.`);
  },
  rename(newName) {
    this.name = newName;
  }
};
console.log("\nExample 2: Pet Object with Methods");
pet.celebrateBirthday(); // Output: Happy Birthday Whiskers! You are now 6 years old.
pet.rename('Paws');
console.log(pet.name);  // Output: Paws

// TODO 2: Add a method to `city` object
// Add a method named `addPopulation` that increases the `population` property by a given number.
// Add another method named `rename` that updates the `name` property using `this`.
const city = {
  name: "Montreal",
  pop:  1800055,
  addPop: function() {
    this.pop += 1000; 
    console.log(`${this.name} now has ${this.pop} people residing in it.`);
      },
  status: function(){
    console.log(`${this.name} has ${this.pop} people residing in it.`);
  }
}
console.log("\nToDo 2: Method to City Object")
city.status();
city.addPop(); // Output added population 
city.status(); // Output status with new population

// Example 3: Adding Methods to a Car Object
const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2021,
  drive() {
    console.log(`Driving a ${this.brand} ${this.model} (${this.year}).`);
  },
  updateYear(newYear) {
    this.year = newYear;
  }
};

console.log("\nExample 3: Car Object with Methods");
car.drive();        // Output: Driving a Toyota Corolla (2021).
car.updateYear(2023);
console.log(car.year); // Output: 2023

// TODO 3: Add a method to `computer` object
// Add a method named `upgradeRAM` that updates the `ram` property.
// Add another method named `describe` that logs a message with the `brand`, `processor`, and `ram` properties.
const computer = {
  brand: 'Mac',
  processor: 'Intel',
  ram: 100,
  addRam: function() {
    this.ram += 92; 
},
describe: function(){
  console.log(`${this.processor} based ${this.brand} laptop has ${this.ram} more GB of ram.`);
  }
}
console.log("\nToDo 3: Method to Computer Object");
computer.describe();
computer.addRam();     // Output with added this.ram
computer.describe();


 // Example 4: Adding Methods to a Product Object
const product = {
  name: 'Laptop',
  price: 999.99,
  inStock: true,
  applyDiscount(discount) {
    this.price -= discount;
    console.log(`Discount applied! New price is $${this.price}.`);
  },
  updateStock(status) {
    this.inStock = status;
  }
};

console.log("\nExample 4: Product Object with Methods");
product.applyDiscount(100); // Output: Discount applied! New price is $899.99.
console.log(product.price);  // Output: 899.99
product.updateStock(false);
console.log(product.inStock); // Output: false

// TODO 4: Add a method to `restaurant` object
// Add a method named `changeRating` that updates the `rating` property.
// Add another method named `reopen` that sets the `inStock` property to true.
const restaurant = {
  name: 'Crepe Nanou',
  type: 'French',
  rating: 4,
  inStock: true,
  addRating: function() {
    this.rating += 1;
    console.log(`${this.name}, the well known ${this.type} restaurant is rated ${this.rating} stars.`);
  },
  reopen: function() {
    console.log(`${this.name}, the well known ${this.type} restaurant is now rated ${this.rating} stars`);
  }
  
}

console.log("\nToDo 4: Add Method to Restaurant Object");
  
restaurant.reopen(); 
restaurant.addRating();          // Output added this.rating stars
restaurant.reopen();
console.log(restaurant.inStock); // Output instock property 'true'



// Example 5: Adding Methods to a Student Object
const student = {
  firstName: 'John',
  lastName: 'Doe',
  grade: 'A',
  updateGrade(newGrade) {
    this.grade = newGrade;
    console.log(`${this.firstName} ${this.lastName} is now in grade ${this.grade}.`);
  },
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log("\nExample 5: Student Object with Methods");
student.updateGrade('B');        // Output: John Doe is now in grade B.
console.log(student.fullName()); // Output: John Doe

// TODO 5: Add a method to `house` object
// Add a method named `renovate` that increases the `size` property by a given number.
// Add another method named `changeAddress` that updates the `address` property.
console.log("\nToDo 5: Add Method to House Object");

const house = {
  address: '1234 Jena St.',
  size: 1350,

  changeAddress(newAddress) {
    this.address = newAddress;
    
  },
  renovate () {
    this.size += 1000;
    console.log(`${this.address} is bigger, ${this.size} in square footage.`);
  },

  status() {
    console.log(`${this.address} is ${this.size} in square footage.`);
  }
};

house.status();
house.changeAddress('1236 Jena St'); // Output changed address
house.renovate();                    // Output this.size more square footage 
house.status();