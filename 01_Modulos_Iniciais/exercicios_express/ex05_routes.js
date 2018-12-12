/*
router.json manda para o navegador em forma de arquivo json
*/ 

const express = require('express')
const router = express.Router()


router.use(function(req,resp,next){
    const init = Date.now()
    next()

    console.log(`Tempo = ${Date.now() - init} ms`)
})


router.get('/produtos/:id', function(req,resp){
    resp.json({id: req.params.id, name: 'Caneta'})
})

router.get('/clientes/:id', function(req, resp){
    resp.json({id: req.params.id, name: 'Batata'})
})

module.exports = router


