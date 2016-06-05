//
// map-x.js
//
//	Auto detecting map for Object and Array
//
//
// Copyright (c) 2015 Dennis Raymondo van der Sluis
//
// This program is free software: you can redistribute it and/or modify
//     it under the terms of the GNU General Public License as published by
//     the Free Software Foundation, either version 3 of the License, or
//     (at your option) any later version.
//
//     This program is distributed in the hope that it will be useful,
//     but WITHOUT ANY WARRANTY; without even the implied warranty of
//     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//     GNU General Public License for more details.
//
//     You should have received a copy of the GNU General Public License
//     along with this program.  If not, see <http://www.gnu.org/licenses/>
//

var mapX= function( obj, callback ){

	var mapped= {};

	if ( obj instanceof Array ){
		mapped= [];

		if ( 'function' === typeof Array.prototype.map ){
			mapped= obj.map( callback );
		} else {
			 for ( var index in obj ){
				mapped.push( callback(obj[ index ]) );
			}
		}

	} else {

		for ( var key in obj ){
			if ( obj.hasOwnProperty(key) ){
				mapped[ key ]= callback( obj[key], key );
			}
		}

	}

 	return mapped;
};

module.exports= mapX;