## Deep Foundations of Advanced Javascript v2 by Kyle Simpson

Javascript is a compiled language
* it detects syntax errors even before executed

### Shadowing

If you define a variable of the same name both inside and outside function, the outside one will be inaccessible.
(except for `window.var` which is cheating, if you are 18 levels deep you cannot go up one level to get vars from there)

```js
var foo = 'bar';

function bar() {
  console.log(foo) // bar
}

function bar() {
  console.log(foo) // undefined
  var foo = 'wow'
}
```

This problem is because we think JS is single pass, but it's at least double pass. First is var declarations thru scope manager,
second is JVM.

### Auto globals

```js

function baz() {
  bam = 'wow' // creates a new global variable bam with the value 'wow'
}

```

### Strict mode

Strict mode prevents auto-globals. Strict mode is the future, it should be adopted.

Rules in strict mode actually help your code run faster e.g. making globals at runtime is slow.

Strict mode only affects per file the statement is written on (JS is file-based). Strict mode can be function-level too.

In non-strict mode, LHS (left hand side) variables are created implicitly but RHS ones throw a `ReferenceError`

### Lexical scope

It's fixed. Keep looking for definitions of a variable til you find it.

Happens at compile-time.

![image](https://user-images.githubusercontent.com/3739702/53691620-aa311480-3dbc-11e9-8bf0-208ffb7eedfe.png)

### Named function expressions

Named function expressions make their name identifier available in their own scopes

![image](https://user-images.githubusercontent.com/3739702/53691648-68ed3480-3dbd-11e9-9ca7-065ae7d837dc.png)

Think of it kind of like 

```js
function foo(bar) {
  // bar now exists inside foo's scope
}
```

3 reasons to use named function expressions
* self-reference
* shows up in stack traces
* self-documenting code
