const produto = {
    nome:'Caneta',
    preco:1.90,
    desconto:0.05
}
{/*EXERCICIO DE FUNCIONAMENTO DO SPREAD
return { ...objeto}

QUE É QUANDO VOCÊ CHAMA UM OBJETO E 
AUTOMATICAMENTE JÁ TRAZ TODAS AS 
CARACTERISTICAS DELE

O QUE FAZER:
INSTALAR PLUGIN DE TRANFERENCIA

AULA 15 INTERPRETANDO OPERADOR SPREAD
*/}
function clone(objeto) {
    return { ...objeto}
}

const novoProduto = clone(produto)
novoProduto.nome = 'caneta legal'

console.log(produto,novoProduto)

