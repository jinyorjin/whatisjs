const slides = [
  {
    title: "What is JavaScript?",
    subtitle: "The Language of the Web",
    image: require("../images/kangaroo.png"),
    content: `
JavaScript is a powerful, versatile scripting language used to make websites interactive.
It runs directly in the browser and can respond to user actions like clicks, inputs, and animations.
JavaScript works alongside HTML and CSS to bring websites to life.
It supports multiple programming paradigms — procedural, object-oriented, and functional.
    `.trim(),
    code: `// This prints a message to the browser console
console.log("Hello, JavaScript!");`,
    note: "JavaScript ≠ Java. They are completely different languages despite the similar names.",
    concepts: [
      "Client-side language: Runs in the browser.",
      "Dynamic & interpreted: Executes line-by-line at runtime.",
      "Multi-paradigm: Supports OOP, functional, procedural.",
      "Versatile: Used for web, backend (Node.js), games, apps.",
    ],
    slideNumber: "1 / 15",
  },

  {
    title: "What is a Variable?",
    subtitle: "Storage for Data",
    content: `
Variables store data that your program can use and manipulate.
You can declare variables using:
- var (old way, function-scoped)
- let (modern, block-scoped)
- const (block-scoped, constant value)
Use 'let' or 'const' in modern JavaScript.
    `.trim(),
    code: `let name = "Eunjin";`,
    note: "Prefer 'const' by default. Use 'let' only if you plan to reassign.",
    concepts: [
      "var: Function-scoped.",
      "let: Block-scoped (preferred for changing values).",
      "const: Block-scoped, cannot be reassigned.",
    ],
    slideNumber: "2 / 15",
  },

  {
    title: "What is a Function?",
    subtitle: "Reusable Logic",
    content: `
Functions let you group code into reusable chunks.
They help you avoid repeating yourself and make your code easier to read and maintain.
    `.trim(),
    code: `function greet() {
  alert("Hi!");
}`,
    note: "Functions can also be stored in variables or passed as arguments.",
    concepts: [
      "Functions group code for reuse.",
      "Defined using 'function' keyword or arrow syntax.",
      "Can take parameters and return values.",
    ],
    slideNumber: "3 / 15",
  },

  {
    title: "What are Data Types?",
    subtitle: "Kinds of Values You Can Work With",
    content: `
JavaScript has dynamic types, which means variables can hold any type of data.
There are two main categories:
- Primitive Types: string, number, boolean, null, undefined, symbol, bigint
- Reference Types: objects, arrays, functions
You can check a value's type using the 'typeof' operator.
    `.trim(),
    code: `let age = 30;              // number
let name = "Eunjin";       // string 
let isStudent = true;      // boolean
let car = null;            // null
let address;               // undefined
let person = { name: "Eun" }; // object`,
    note: "null is a primitive, but typeof null === 'object' (JavaScript quirk).",
    concepts: [
      "Primitive types: string, number, boolean, null, undefined.",
      "Reference types: object, array, function.",
      "typeof: Used to check data types.",
      "JavaScript is dynamically typed.",
    ],
    slideNumber: "4 / 15",
  },

  {
    title: "What are Loops?",
    subtitle: "Repeat Code Until a Condition Is False",
    content: `
Loops are used to repeat a block of code multiple times.
JavaScript supports several types of loops:
- for: runs a block of code a specific number of times
- while: runs as long as a condition is true
- do...while: runs the block at least once before checking the condition
Loops are useful when working with arrays or when something needs to happen repeatedly.
    `.trim(),
    code: `// for loop
for (let i = 0; i < 3; i++) {
  console.log("Count:", i);
}

// while loop
let j = 0;
while (j < 3) {
  console.log("While Count:", j);
  j++;
}

// do...while loop
let k = 0;
do {
  console.log("DoWhile Count:", k);
  k++;
} while (k < 3);`,
    note: "Use 'for...of' or 'forEach' when looping through arrays.",
    concepts: [
      "for: Loop with counter.",
      "while: Loop based on condition.",
      "do...while: Executes at least once.",
      "break and continue can control loop flow.",
    ],
    slideNumber: "5 / 15",
  },

  {
    title: "What are Conditionals?",
    subtitle: "Make Decisions in Your Code",
    content: `
Conditionals let your code make decisions.
They check if a condition is true and run different code depending on the result.
JavaScript uses if, else if, else, and switch to write conditional logic.
    `.trim(),
    code: `let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C or below");
}`,
    note: "Conditions use comparison operators like >, <, === to check values.",
    concepts: [
      "if: Run block if condition is true.",
      "else if: Check more conditions.",
      "else: Fallback if none match.",
      "switch: Cleaner way to check many exact values.",
    ],
    slideNumber: "6 / 15",
  },

  {
    title: "What is an Array?",
    subtitle: "A List of Values",
    content: `
An array is a special variable that can hold multiple values at once.
Arrays are ordered, and each value has an index starting from 0.
They are useful when working with lists like names, scores, or items.
    `.trim(),
    code: `let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // "apple"
console.log(fruits.length); // 3`,
    note: "Arrays start at index 0, not 1!",
    concepts: [
      "Arrays store multiple values in a single variable.",
      "Use square brackets: [ ].",
      "Access values by index (starts at 0).",
      "Common methods: push(), pop(), length.",
    ],
    slideNumber: "7 / 15",
  },

  {
    title: "Array Methods",
    subtitle: "map, filter, forEach",
    content: `
Arrays have built-in methods that make working with lists easier and more powerful.
The most useful ones are:
- forEach: Runs a function for each item (no return)
- map: Transforms each item and returns a new array
- filter: Keeps items that match a condition
    `.trim(),
    code: `const numbers = [1, 2, 3, 4, 5];

// forEach: print each number
numbers.forEach(num => console.log(num));

// map: double each number
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter: keep even numbers only
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]`,
    note: "`map` and `filter` always return new arrays. `forEach` does not.",
    concepts: [
      "forEach: Run code for every item (no return).",
      "map: Transform each item, returns new array.",
      "filter: Select items that match a condition.",
      "Non-destructive: Original array is unchanged.",
    ],
    slideNumber: "8 / 15",
  },

  {
    title: "Advanced Array Methods",
    subtitle: "reduce, find, sort",
    content: `
Beyond map and filter, JavaScript provides powerful methods for complex data operations:
- reduce: Combine all items into a single value
- find: Get the first item that matches a condition
- sort: Sort items alphabetically or numerically
    `.trim(),
    code: `const numbers = [5, 2, 9, 1, 7];

// reduce: sum all numbers
const total = numbers.reduce((acc, num) => acc + num, 0);
console.log(total); // 24

// find: first number greater than 5
const found = numbers.find(num => num > 5);
console.log(found); // 9

// sort: ascending order
const sorted = [...numbers].sort((a, b) => a - b);
console.log(sorted); // [1, 2, 5, 7, 9]`,
    note: "`reduce` is great for totals and calculations. `sort` modifies the array unless you copy it first.",
    concepts: [
      "reduce: Combine all items into one (e.g., sum).",
      "find: Returns the first match (or undefined).",
      "sort: Sorts strings by default, use compareFn for numbers.",
      "Use spread ([...arr]) to avoid changing the original array.",
    ],
    slideNumber: "9 / 15",
  },

  {
    title: "What is an Object?",
    subtitle: "Structured Data with Key-Value Pairs",
    content: `
Objects store related data and functions together using key-value pairs.
They’re like mini-databases for one thing: a person, a product, a user, etc.
Each key is called a "property", and it can hold any type of value.
    `.trim(),
    code: `const person = {
  name: "Eunjin",
  age: 27,
  isStudent: true,
  greet: function() {
    console.log("Hi, I'm " + this.name);
  }
};

// Accessing properties
console.log(person.name);       // "Eunjin"
console.log(person["age"]);     // 27

// Updating a property
person.age = 28;

// Calling a method
person.greet(); // "Hi, I'm Eunjin"`,
    note: "Use dot (.) or bracket [ ] notation to access object properties.",
    concepts: [
      "Objects store related values as key-value pairs.",
      "Access with dot (obj.key) or bracket (obj['key']).",
      "Can include methods (functions inside objects).",
      "Useful for modeling real-world things.",
    ],
    slideNumber: "10 / 15",
  },
];

export default slides;
