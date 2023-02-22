const {expect} = require('chai');

let s = require('./tshirts') ;


expect(s.size(38)).equals('M'); 
expect(s.size(37)).equals('S');
expect(s.size(40)).equals('M');
expect(s.size(43)).equals('L');
console.log('All is well (maybe!)');