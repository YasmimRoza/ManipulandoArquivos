const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual o seu nome?', function(name){
    console.log('Nome de usuario é : '+name)
    rl.question('Qual sua idade?', function(idade){
        console.log('Idade da '+name+' é '+idade);
    })
})

rl.on('close', function(){
    console.log('adeus!')
    process.exit(0);
})