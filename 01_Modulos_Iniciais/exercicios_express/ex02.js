/*
Testando cadeia de responsabilidade(chain of responsability)

O middleware se resume na função callback:
function(requisição, resposta, next){
}

-Requisição: É o que vem da estrutura http(GET, POST, ALL), entrar no middleware

-Resposta: É o que vai sair do middleware

-Next: É uma função do middleware que quando é chamada pula
para as proximas requisições feitas para este mesmo caminho,
assim que elas forem completadas é continuado a requisição 
principal do ponto onde a função next foi chamada

Explicando ex:

A requisição get é escutada na porta 3000 e passa pelo primeiro
middleware, ele realiza a primeira linha: 

    console.log('Inicio')

Na segunda linha é chamado a função next, que procura outras 
requisições que acontecem para o mesmo caminho: 

    server.get('/'

Ele encontra o segundo middleware e realiza 
todas as suas linhas:

    console.log('Resposta')
    resp.send('<h1>Batatatata</h1>')

Assim que a execução do segundo middleware termina ele volta
no exato ponto que a função next() foi chamada no primeiro
middleware, e realiza o resto de suas linhas:

    next()
    console.log('fim')

*/ 

const express = require('express')
const server = express()

//middleware1
server.get('/',function(req, resp, next){
    console.log('Inicio')
    next()
    console.log('fim')
})
//middleware2
server.get('/',function(req,resp){
    console.log('Resposta')
    resp.send('<h1>Batatatata</h1>')
})

//servidor escutando a porta 3000
server.listen(3000, () => console.log('executando...'))

