const slides = [
  {
    title: "What is JavaScript?",
    subtitle: "The language of the Web",
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
      "Client-Side Language: Runs in the browser",
      "Dynamic & Interpreted: Executes line-by-line at runtime",
      "Multi-Paradigm: Supports OOP, functional, procedural",
      "Versatile: Used for web, backend (Node.js), games, apps",
    ],
    slideNumber: "1 / 15",
  },

  {
    title: "What is a Variable?",
    subtitle: "Storage for data",
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
      "var: function-scoped",
      "let: block-scoped (preferred for changing values)",
      "const: block-scoped, cannot be reassigned",
    ],
    slideNumber: "2 / 15",
  },

  {
    title: "What is a Function?",
    subtitle: "Reusable logic",
    content: `
Functions let you group code into reusable chunks.

They help you avoid repeating yourself and make your code easier to read and maintain.
    `.trim(),
    code: `function greet() {
  alert("Hi!");
}`,
    note: "Functions can also be stored in variables or passed as arguments.",
    concepts: [
      "Functions group code for reuse",
      "Defined using 'function' keyword or arrow syntax",
      "Can take parameters and return values",
    ],
    slideNumber: "3 / 15",
  },

  {
    title: "What are Data Types?",
    subtitle: "Kinds of values you can work with",
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
      "Primitive Types: string, number, boolean, null, undefined",
      "Reference Types: object, array, function",
      "typeof: Used to check data types",
      "JavaScript is dynamically typed",
    ],
    slideNumber: "4 / 15",
  },

  {
    title: "What are Loops?",
    subtitle: "Repeat code until a condition is false",
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
      "for: loop with counter",
      "while: loop based on condition",
      "do...while: executes at least once",
      "Break and continue can control loop flow",
    ],
    slideNumber: "5 / 15",
  },
  {
    title: "What are Conditionals?",
    subtitle: "Make decisions in your code",
    content: `Conditionals let your code make decisions.
    They check if a condition is true and run different code depending on the result.
    JavaScript uses if, else if, else, and switch to write conditional logi`.trim(),
    code: `let scroe = 85;
    if (scroe >=90)P{
    console.log("Grade:A");
    } else if (score >= 80){
     console.log('Grade: C or below);}`,
    note: "Conditions use comparison operators like >,<, === to check vulues.",
    concepts: [
      "if: Run block if condition is true",
      "else if: check more contions",
      "else: Fallback if none match",
      "switch: Cleaner way to check many exact values",
    ],
    slideNumber: "6 / 15",
  },
];

export default slides;
