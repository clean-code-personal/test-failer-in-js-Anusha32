const { expect, assert } = require('chai');
let res = require('../misaligned/misaligned');

result = res.print_color_map();
//assert.equal(index(0,0),1);
expect(result).equals(25);

