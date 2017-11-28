# Here is an example of feathers mutating the context object

- If you look at the code in stuff.hooks.js the mutate hook changes the context object but does not return it.
- The debug statement after it shows that it has been mutated
