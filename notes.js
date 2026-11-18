JavaScript OOP — Interview Notes

1. OOP (Object-Oriented Programming)
OOP organizes data and behavior around objects. An object contains properties (data) and methods (behavior).
const user = {
    username: "Rajat", // Property: user data.
    age: 21, // Property: user data.
    login() { console.log("Logged in"); } // Method: user behavior.
};

2. Why use OOP?
OOP helps organize code, reuse behavior, maintain applications, encapsulate data, and create many similar objects.

3. Object Literal
An object created directly with {} is an object literal.
const user = { username: "Rajat", age: 21 };

4. Constructor Function
A constructor function creates objects with the same structure. Use new to create each instance.
function User(username, age) {
    this.username = username; // Store the argument on the new object.
    this.age = age;
}
const user1 = new User("Rajat", 21);
const user2 = new User("Aman", 22);

5. The new Keyword
new creates an object, links it to the constructor's prototype, calls the constructor with this set to that object, then returns it (unless another object is explicitly returned).

6. this
this refers to the object determined by how a function is called. In a constructor called with new, it refers to the new instance.
function User(username) {
    this.username = username; // Assign username to this instance.
}
const user1 = new User("Rajat"); // Here, this refers to user1.
// user1.username === "Rajat"

7. Instance
An instance is an object created from a constructor or class.
const user1 = new User("Rajat");
user1 instanceof User; // true: user1 was created from User.

8. Prototype
JavaScript uses prototype-based inheritance. Objects can access shared properties and methods through their prototype chain.
User.prototype.greeting = function() {
    console.log(`Welcome ${this.username}`); // this is the calling instance.
};
user1.greeting(); // Uses the shared method on User.prototype.
// Prototype chain: user1 → User.prototype → Object.prototype → null

9. prototype vs __proto__
User.prototype belongs to the constructor and is where shared methods are commonly defined.
__proto__ is a legacy accessor for an object's prototype. Prefer Object.getPrototypeOf(user1).

10. Class
class syntax is a convenient way to define constructors and prototype methods; JavaScript inheritance remains prototype-based.
class User {
    constructor(username, age) {
        this.username = username; // Initialize each instance.
        this.age = age;
    }
    greeting() { console.log(`Welcome ${this.username}`); } // Shared prototype method.
}
const user1 = new User("Rajat", 21);
// Interview point: JavaScript classes are primarily syntax over prototype-based inheritance.

11. Class Constructor
constructor() runs automatically when new creates an instance.
constructor(username, age) {
    this.username = username;
    this.age = age;
}
const user = new User("Rajat", 21); // Calls constructor("Rajat", 21).

12. Four Pillars of OOP
A. Abstraction — Hide implementation details and expose only what is needed; use login() without knowing its internals.
B. Encapsulation — Bundle data and methods together, and control access to data.
const user = {
    username: "Rajat",
    login() { console.log("Logged in"); }
};
class User {
    #password; // # makes this field private to the class.
    constructor(password) { this.#password = password; }
}

C. Inheritance — Reuse behavior from another class.
class Animal {
    eat() { console.log("Eating"); }
}
class Dog extends Animal {
    bark() { console.log("Barking"); }
}
const dog = new Dog();
dog.eat(); // Inherited from Animal.
dog.bark(); // Defined on Dog.

D. Polymorphism — The same method/interface can behave differently for different objects.
class Animal {
    speak() { console.log("Animal sound"); }
}
class Dog extends Animal {
    speak() { console.log("Bark"); } // Overrides Animal.speak().
}
class Cat extends Animal {
    speak() { console.log("Meow"); } // Overrides Animal.speak().
}
new Dog().speak(); // Bark
new Cat().speak(); // Meow

13. Important Interview Questions
Q1. What is OOP?
A programming paradigm that organizes code around objects containing data and behavior.

Q2. What is an object?
A collection of properties (data) and methods (behavior).

Q3. What is a constructor function?
A reusable function called with new to create similarly structured objects.

Q4. What does new do?
Creates an instance, links its prototype, calls the constructor with this bound to it, and returns it.

Q5. What is this?
The value determined by the call context; in a constructor called with new, it is the new instance.

Q6. What is an instance?
An object created from a constructor or class.

Q7. What is a prototype?
An object that provides shared properties/methods and supports inheritance.

Q8. Are JavaScript classes internally class-based?
JavaScript inheritance is prototype-based; class provides cleaner syntax for it.

Q9. What are the four pillars of OOP?
Abstraction, Encapsulation, Inheritance, and Polymorphism.

Q10. What is the difference between a constructor and a prototype?
A constructor initializes instances; the prototype provides shared properties and methods they can access.
