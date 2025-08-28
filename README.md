Modules = reusable piece of code that encapsulates implementation details.

Compose software: Modules are small building blocks that we put together to build complex applications.

Isolate components: Modules can be developed in isolation without thinking about the entire codebase.

Abstract code: Implement low-level code in modules and import these abstractions into other modules.

Organized code: Modules naturally lead to a more organized codebase.

Reuse code: Modules allow us to easily reuse the same code, even across multiple projects.

====================================================
ES6 MODULES
Modules stored in files, exactly one module per file.
*Top-level variables -Scoped to module
*Default mode -Strict mode
*Top-level this -undefined
*Imports and exports -yes

- All imports are hoisted and need to happen at top-level

HTML linking <script type='module'>
File downloading -Asynchronous

Parsing means reading the code without executing
first he index.html will be parse

Exporting module will be executed first before the importing module
Exporting need to be a top level code for it to work

Import is not simply a copy it is a live connection similar to reference in the heap with the object
Import are not copy of the export instead like a live connections means point the same place in the memory.

========================================
LEARN ABOUT
-parcel
-babel
-core-js
-lodash
-node-modules
-regenerator-runtime
======================================
MODERN AND CLEAN CODE
-Readable code

- Write code so that others can understand it
- Write code so that you can understand it in 1 year
- Avoid too "clever" and overcomplicated solutions
- Use descriptive variable names: what they contain
- Use descriptive function names: what they do

-General

- Use DRY principle (refactor youur code)
- Don't pollute global namespace, encapsulate instead
- Don't use var
- Use strong type check (=== and !==)

-Function

- Generally, functions should do only one thing
- Don't use more than 3 function parameters
- Use default parameters whenever possible
- Generally, return same data type as received
- Use arrow functions when they make code more readable

-OOP

- Use ES6 classes
- Encapsulate data and don't mutate it from outside the class
- Implement method chaining
- Do not use arrow functions as methods (in regular objects)

-Avoid nested code

- Use early return (guard clauses)
- Use ternary (conditional) or logical operators instead of if
- Use multiple if instead of if/else-if
- Avoid for loops, use array methods instead
- Avoid callback-based asynchronous APIs

-Asynchronous code

- Consume promise with async/await for best readability
- Whenever possible, run promises in parallel (Promise.all)
- Handle errors and promise rejections

==============================================
IMPERATIVE VS. DECLARATIVE CODE
Two fundamentally different ways of writing code (paradigms)

-Imperative

- Programmer explain "How to do things"
- We explain the computer every single step it has to follow to achieve a result
- Example: Step-by-step recipe of a cake

-Declarative

- Programmer tells "What to do"
- We simmply describe the way the computer should achieve the result
- The HOW (step-by-step instructions) gets abstracted away
- Example: Description of a cake

==========================================
FUNCTIONAL PROGRAMMING PRINCIPLES

- Declarative programming paradigm
- Based on the idea of writing software by combining many pure functions, avoiding side effects and mutating data

:side effec - Modification (mutation) of any data outside of the function (mutating external variables, logging to console, writing to DOM, etc)

:Pure function - function without side effects. Does not depend on external variables. Given the same inputs, always returns the same outputs.

:Immutability - State(data) is never modified! Instead, state is copied and the copy is mutated and returned.

=======================================
FUNCTIONAL PROGRAMMING TECHNIQUES

- Try to avoid data mutations
- Use built-in methods that don't produce side effects
- Do data transformations with methods such as .map(), .filter(), .reduce()
- Try to avoid side effects in functions this is of course not always possible!

DECLARATIVE SYNTAX

- Use array and object destructuring
- Use the spread operator (...)
- Use the ternary (conditional) operator
- Use template literals
