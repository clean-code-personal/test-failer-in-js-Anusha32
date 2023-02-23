const {expect} = require('chai');

let s = require('./tshirts') ;


console.assert(expect(s.size(37)).equals('S'));
expect(s.size(40)).equals('M');
expect(s.size(43)).equals('L');
console.assert(expect(s.size(38)).equals('S')); 
