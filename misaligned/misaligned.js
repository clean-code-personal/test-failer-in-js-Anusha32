const {expect} = require('chai');
function index(i,j){
    return i*5+j+1;
}

function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    for (let i = 0; i <= majorColors.length; i++) {
        for (let j = 0; j <= minorColors.length; j++) {
            console.log(`${index(i,j)} | ${majorColors[i]} | ${minorColors[j]}`);
        }
    }
    return majorColors.length * minorColors.length;
}

module.exports = {print_color_map,expect,index};
