//
// map-x.js
//
//	Auto detecting map for Object and Array
//
// MIT License
//
// Copyright (c) 2015 Dennis Raymondo van der Sluis
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//

function isFunction(f){
	return typeof f === 'function';
}


module.exports= function( obj, callback ){
	var mapped	= [];
	callback		= isFunction(callback) ? callback : (n) => n;

	if ( obj instanceof Array ){

		if ( isFunction(Array.prototype.map) ){
			mapped = obj.map( callback );
		} else for ( var index in obj ){
			mapped.push( callback(obj[ index ]) );
		}

	} else if ( typeof obj === 'object' ){
		mapped = {};

		for ( var key in obj ){
			if ( obj.hasOwnProperty(key) ){
				mapped[ key ]= callback( obj[key], key );
			}
		}

	}

 	return mapped;
};