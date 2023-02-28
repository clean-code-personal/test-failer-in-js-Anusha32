// const { it } = require('mocha');
// let res = require('../misaligned/misaligned');
// var mocha = require('mocha');
// var describe= mocha.describe

const { expect } = require("chai");
const print = require("../misaligned/misaligned");

let result = print.print_color_map();
describe('Color Map Print',function(){
    it('should return size as 25',function(){
        expect(result).equals(25);
    });
    it('should return the first index as 1',function(){
        expect(print.index(0,0)).equals('1 ');
    });
});