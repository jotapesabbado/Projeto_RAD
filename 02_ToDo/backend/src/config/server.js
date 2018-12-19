const port = 3000


/*
badyParser é basicamente um decodificador de requisições HTTP
(POST,GET, ect) 
*/
const bodyParse =  require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')


/*
essa linha habilita o badyParser para decodificar (bodyParse.urlencoded({extended:true})) 
qualquer tipo de requisição HTTP (server.use())*/
server.use(bodyParse.urlencoded({extended:true}))
server.use(bodyParse.json())
server.use(allowCors)

server.listen(port,function(){
    console.log(`Executando na porta ${port}`)
})

module.exports = server