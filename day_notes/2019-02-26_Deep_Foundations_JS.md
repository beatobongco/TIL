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

Strict mode prevents this
