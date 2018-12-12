/*
Diferença da utilização do server.get e server.use

Usando o metodo get só sera mapeado a url utilizando a requisição
get do http

Usando o metodo use sera mapeado para todas as requisições http
e todos os caminhos da url que passarem pelo caminho definido, no exemplo:

server.use('/api')

então qualquer caminho que passar por /api/caminhoqualquer


OBS:
Se você suprimir o primeiro parametro (o caminhoda url) a função
sera aplicada para todos os caminhos da aplicação
*/ 

const express = require('express')
const server = express()

//middleware1
server.use('/api',function(req, resp, next){
    console.log('Inicio')
    next()
    console.log('fim')
})
//middleware2
server.use('/api',function(req,resp){
    console.log('Resposta')
    resp.send('<h1>API</h1>')
})

//servidor escutando a porta 3000
server.listen(3000, () => console.log('executando...'))

