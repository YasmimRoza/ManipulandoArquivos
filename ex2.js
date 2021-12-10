const fs = require('fs');

//Simple read file
fs.readFile('danki2.txt', function(err, data){
    console.log(data.toString());
})