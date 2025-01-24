// STEP 1
// Cat class using named declaration
class Cat {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    meow() {
        console.log(`${this.name} says Meow!`);
    }
}

// Dog class using anonymous declaration
const Dog = function(name, breed) {
    this.name = name;
    this.breed = breed;
};

Dog.prototype.bark = function() {
    console.log(`${this.name} says Woof!`);
};

// STEP 2
// Creating a new instance of the Cat class
const myCat = new Cat('Nixon', 'Bengal');
myCat.meow(); // Nixon says Meow!

// Creating a new instance of the Dog class
const myDog = new Dog('River', 'Aussie');
myDog.bark(); // River says Woof!


// STEP 3
// Animal class
class Animal {
    constructor() {
        this.message = "The Animal has been created";
    }

    displayMessage() {
        console.log(this.message);
    }
}

const myAnimal = new Animal();
myAnimal.displayMessage();


// STEP 4
class Animal {
    constructor(message) {
        this.message = message;
    }

    displayMessage() {
        console.log(this.message);
    }
}

const myAnimal = new Animal ("A new animal has been created")
myAnimal.displayMessage()


// STEP 5
class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type;  
        this.breed = breed;   
        this.color = color;   
        this.height = height;  
        this.length = length; 
    }

    displayInfo() {
        console.log(`Type: ${this.type}`);
        console.log(`Breed: ${this.breed}`);
        console.log(`Color: ${this.color}`);
        console.log(`Height: ${this.height} cm`);
        console.log(`Length: ${this.length} cm`);
    }
}

const myAnimal = new Animal('Dog', 'Chihuahua', 'white', 12, 20);
myAnimal.displayInfo();

// STEP 6
class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type;      
        this.breed = breed;   
        this.color = color;    
        this.height = height;  
        this.length = length;  
    }

    displayInfo() {
        // Using a for-in loop to display all properties
        for (let property in this) {
            if (this.hasOwnProperty(property)) { // Check to ensure it's a property of the instance
                console.log(`${property}: ${this[property]}`);
            }
        }
    }
}

const myAnimal = new Animal('Dog', 'Chihuahua', 'white', 12, 20);
myAnimal.displayInfo();


// STEP 7
class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type;     
        this.breed = breed;   
        this.color = color;   
        this.height = height;  
        this.length = length;  
    }

    displayInfo() {
        for (let property in this) {
            if (this.hasOwnProperty(property)) {
                console.log(`${property}: ${this[property]}`);
            }
        }
    }

    speak() {
        if (this.type.toLowerCase() === 'dog') {
            return `The ${this.color} dog is barking!`;
            return `The ${this.color} cat is meowing!`;
        } else {
            return `The ${this.color} animal makes a sound!`;
        }
    }
}

const myDog = new Animal('Dog', 'Chihuahua', 'white', 12, 20);
const myCat = new Animal('Cat', 'Siamese', 'White', 30, 50);

myDog.displayInfo();
console.log(myDog.speak()); 

myCat.displayInfo();
console.log(myCat.speak()); 

// STEP 8
function Animal(type, breed, color, height, length) {
    // Private properties
    let _type = type;
    let _breed = breed;
    let _color = color;
    let _height = height;
    let _length = length;

    // Private method
    let checkType = function() {
        return _type.toLowerCase() === 'dog' ? 'dog' : 'cat';
    };

    // Public method to display information
    this.displayInfo = function() {
        console.log(`Type: ${_type}`);
        console.log(`Breed: ${_breed}`);
        console.log(`Color: ${_color}`);
        console.log(`Height: ${_height} cm`);
        console.log(`Length: ${_length} cm`);
    };

    // Privileged method
    this.speak = function() {
        const animalType = checkType(); // Call private method
        return `The ${animalType} has made a noise!`;
    };
}

// Creating new instances of the Animal class
const myDog = new Animal('Dog', 'Chihuahua', 'white', 12, 20);
const myCat = new Animal('Cat', 'Siamese', 'White', 30, 50);

// Calling the methods
myDog.displayInfo();
console.log(myDog.speak());

myCat.displayInfo();
console.log(myCat.speak()); 

// STEP 9
//  the String prototype method
String.prototype.findWords = function(word) {
    // Ensure the input word is a string and not empty
    if (typeof word !== 'string' || word.trim() === '') {
        alert('Please provide a valid word to search for.');
        return;
    }
    
    // Use a regular expression to find all instances of the word, case-insensitive
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const matches = this.match(regex);
    
    // Calculate the number of occurrences
    const count = matches ? matches.length : 0;
    
    // Alert the user with the result
    alert(`The word "${word}" was found ${count} time(s) in the text.`);
};

const paragraph = "The sun dipped below the horizon, painting the sky in shades of orange and pink as the day came to a close.";
const wordToFind = "the";

paragraph.findWords(wordToFind);