/*
Express tem diverças funções, a principal é servir como middleware das
informações, antesque ainformação chegue no ponto final ela
passa por esse middleware(express), nos exemplos abaixao, as funções
callback representam o que ira acontecer dentro do middleware


Importando express

Criando uma instancia do express chamada server

Utilizando o metodo get(do http) para mapear a rota

server.get responde as requisições http de GET

server.all responde a qualquer tipo de requisição http

alem de mapear um caminho unico eu posso mapear uma rota
de caminhos, como no ex3 que qualquer caminho /api/ sera 
mapeado 
*/

const express = require('express')
const server = express()
//ex1
server.get('/', function(req, resp){
    resp.send('<h1>Batata</h1>')
})
//ex2
server.all('/teste', function(req, resp){
    resp.send('<h1>Batata1</h1>')
})
//ex3
server.get(/api/, function(req, resp){
    resp.send('<h1>API</h1>') 
})

//servidor escutando a porta 3000
server.listen(3000, () => console.log('executando...'))

