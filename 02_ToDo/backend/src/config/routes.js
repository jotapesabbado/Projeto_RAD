const express = require('express')


module.exports = function(server){
    //API ROUTES(mapeamento das rotas de api)
    const router = express.Router()
    server.use('/api',router)

    //Mapeamento das rotas de Todo
    const todoService = require('../api/todo/todoService')
    todoService.register(router,'/todos')
}
