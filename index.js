const fs = require('fs');

//Criar novo arquivo

/** 
fs.writeFile('danki.txt', 'teste danki code', function(err){
    if(err) throw err;
    console.log('o arquivo foi criado com sucesso!')
})
*/

//Cria novo arquivo ou insere o conteudo depois do que já existe
fs.appendFile('danki.txt', '\n Outro conteudo', (err) => {
    if(err) throw err;
    console.log('salvo novamente com sucesso!');
})