const mapx = require( './map-x.min.js' );


const square= (n) => n * n;

const arr = [ 1,2,3 ];

const obj = {
	a: 1,
	b: 2,
	c: 3
};

console.log( mapx() );
console.log( mapx(obj) );
console.log( mapx(obj, square) );
console.log( mapx(arr) );
console.log( mapx(arr, square) );