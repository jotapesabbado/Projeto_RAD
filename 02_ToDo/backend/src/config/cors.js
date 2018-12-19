module.exports = function(req, resp, next){
    
    /*
    Cabeçalhos do CORS,MIDDLEWARE que informa ao browser 
    as permições de acessar algum tipo de serviço.
    Não precisa decorar, tem no google
    */
    resp.header('Access-Control-Allow-Origin', '*')
    resp.header('Access-Control-Allow-Methods', 'GET','POST','OPTIONS','PUT','PATCH','DELETE')
    resp.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept')

    next()
    //AULA 40
}