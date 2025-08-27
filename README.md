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
