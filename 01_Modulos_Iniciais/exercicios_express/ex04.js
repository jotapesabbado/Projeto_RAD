/*
Encadeamento de Reqisições de HTTP

Ao utilizar o route não a necessidade de ficar repedindo
a mesma url

*/ 

const express = require('express')
const server = express()

server.route('/clientes')
.get( (req,resp) => resp.send('Lista de Cliente'))
.post( (req,resp) => resp.send('Novo Cliente') )
.put( (req,resp) => resp.send('Alterar Cliente'))
.delete( (req,resp) =>resp.send('Remove Cliente'))

//servidor escutando a porta 3000
server.listen(3000, () => console.log('executando...'))

