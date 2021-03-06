/*
Mapeamento do restful encima do mongoose

Docmentação do node-restful:
https://github.com/baugarten/node-restful
*/

const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description:{ type: String, required: true},
    done:{ type: Boolean, required: true, default:false},
    createdAt:{type: Date, default:Date.now}
})



module.exports = restful.model('Todo',todoSchema)