const { expect } = require('chai');
let res = require('./misaligned');

result = res.print_color_map();
expect(result).equals(25);