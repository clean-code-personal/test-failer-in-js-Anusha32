const { expect, assert } = require('chai');
const { it } = require('mocha');
let res = require('../misaligned/misaligned');
// let id = require('../misaligned/misaligned');

describe('Color Map Print', function(){
    it('should return 25', function(){
        let result = res.print_color_map();
        expect(result).equals(25);
    });
    it('should return the first item index as 1', function(){
        let value = res.index();
        expect(value[0]).equals("1");
    })
})


