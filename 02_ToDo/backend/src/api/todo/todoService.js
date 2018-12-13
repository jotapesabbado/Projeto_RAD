 const Todo = require('./todo')

 Todo.methods(['get','post','put','delete'])
 //Linha padrão para garantir as validações feitas no todo.js
 Todo.updateOptions({new: true, runValidator:true})

 module.exports = Todo