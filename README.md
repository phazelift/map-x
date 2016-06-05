<h1>map-x</h1>


Auto detecting, non-destructive map for Object and Array

- Auto detects Object or Array and applies the appropriate operation
- Switches to native map, if available, in case of Array 
- Checks for hasOwnProperty in case of Object
- Does not change the original Object or Array

--

**Usage**:


>Install with npm: `npm install --save map-x`


```javascript
var map= require( 'map-x' );

var square= (value) => (value * value);

var arr= map( [1, 2, 3], square );
console.log( arr );
// [ 1, 4, 9 ]

var obj= map( {a: 1, b: 2, c: 3}, square );
console.log( obj );
// { a: 1, b: 4, c: 9 }
```
