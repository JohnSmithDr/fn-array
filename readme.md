# fn-array

ES6 function array. Typed array accepts only function as element.

# Example

```JavaScript
let FunctionArray = require('fn-array');

let arr = FunctionArray
  .create()
  .use(function foo() { return 'foo'; })
  .use(function bar() { return 'bar'; });
  
let fn;
let it = arr.iterator();
while(fn = it.next().value) {
  fn();
}
```

# Install

```
npm install fn-array --save
```

# License

MIT