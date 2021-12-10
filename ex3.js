const fs = require('fs');
const read = require('readline')

//Simple read file
fs.readFile('danki3.txt', function(err, data){
    
    let str = data.toString();

    let newStr = str.split('/');

    let newStr1 = str.substr(0,3);

    console.log(newStr);
    console.log(newStr1);

})