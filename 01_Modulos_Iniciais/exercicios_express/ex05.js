/*

*/ 

const express = require('express')
const server = express()
const router = require('./ex05_routes')

server.use('/api', router)


//servidor escutando a porta 3000
server.listen(3000, () => console.log('executando...'))

