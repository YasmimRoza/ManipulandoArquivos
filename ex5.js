const fs = require('fs');
const read = require('readline');

fs.rename('yasmim.txt', 'yasmimroza.txt', function(err){
    console.log('Reescrito')
})