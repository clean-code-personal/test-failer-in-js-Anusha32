const {expect} = require('chai');
function index(i,j){
    const string =  (i*5+j+1).toString();
    const pad = string.padEnd(2);
    return pad;
}


function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            console.log(`${index(i,j)} | ${majorColors[i]} | ${minorColors[j]}`);
        }
    }
    return majorColors.length * minorColors.length;
}

module.exports = {print_color_map,expect,index};
