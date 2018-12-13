
/*
Mongoose serve tanto para fazer o mapeamento dos objetos em javascript
para os documentos que irão para o mongodb

Alem de ser o responsavel por abrir a conexão com o mongo e realizar qualquer
procedimento de banco de dados
*/
const mongoose = require('mongoose')

//somente para tirar uma mensagem de advertencia
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo')
