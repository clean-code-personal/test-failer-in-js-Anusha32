const {expect, assert} = require('chai');
const { it } = require('mocha');

let s = require('../tshirts/tshirts') ;


// console.assert(expect(s.size(37)).equals('S'));
// expect(s.size(40)).equals('M');
// expect(s.size(43)).equals('L');
// console.assert(expect(s.size(38)).equals('S')); 

//Test cases using Mocha
describe('User tshirt size test', function(){
  it('should return "S" when the value is 37', function(){
    assert.equal(s.size(37),'S');
  });
  it('should return "M" when the size is 40', function(){
    expect.equal(s.size(41),'M');
  });
  it('should return "L" when the size is 43', function(){
    expect(s.size(43)).equals('L');
  });
  it('should return "S" when the value is 38',function(){
    assert.equal(s.size(38),'S');
  })
})