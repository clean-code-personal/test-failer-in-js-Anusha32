const {expect} = require('./tshirts');
// var size = require('./tshirts');
let size = require('./tshirts') ;


expect(size(38)).equals('undefined'); 
expect(size(37)).equals('S');
expect(size(40)).equals('M');
expect(size(43)).equals('L');
console.log('All is well (maybe!)');