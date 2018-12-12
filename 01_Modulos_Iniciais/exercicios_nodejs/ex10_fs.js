const fs = require('fs')

/*
A variavel __dirname é uma variavel disponivel
no core do node, ela aponta pro arquivo atual

readdirSync(__dirname) função padrão que lê o diretorio
de forma sincrona, e retorna um vetor com os arquivos 
*/
const files = fs.readdirSync(__dirname)

files.forEach(f => console.log(f));