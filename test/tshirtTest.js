const {expect, assert} = require('chai');
const { it } = require('mocha');

let size = require('../tshirts/tshirts') ;

//Test cases using Mocha
describe('User tshirt size test', function(){
  it('should return "S" when the value is 37', function(){
    assert.equal(size(37),'S');
  });
  it('should return "M" when the size is 41', function(){
    expect.equal(size(41),'M');
  });
  it('should return "L" when the size is 43', function(){
    expect(size(43)).equals('L');
  });
  it('should return "S" when the value is 38',function(){
    assert.equal(size(38),'S');
  });
});