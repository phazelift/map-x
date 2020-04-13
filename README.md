<h1>map-x</h1>


Auto detecting, non-destructive map for Object and Array

- Auto detects Object or Array and applies the appropriate operation
- Switches to native map, if available, in case of Array 
- Checks for hasOwnProperty in case of Object
- Won't crash on missing arguments
- Returns original input on missing handler

--

**Usage**:


>Install with npm: `npm install --save map-x`

<br/>


```javascript
import mapx from 'map-x';

const square= value => value * value;

const arr= mapx( [1, 2, 3], square );
console.log( arr );
// [ 1, 4, 9 ]

const obj= mapx( {a: 1, b: 2, c: 3}, square );
console.log( obj );
// { a: 1, b: 4, c: 9 }
```

###license

MIT
