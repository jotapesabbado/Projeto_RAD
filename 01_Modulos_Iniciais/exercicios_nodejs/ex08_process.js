/*
Voce é capaz de pegar as informações que foram passadas
diretamente ao arquivo pelo terminal com:

console.log(process.argv)
*/

function temParam(param){
    return process.argv.indexOf(param) !== -1
}

if (temParam('--producao')) {
    console.log('BATATA')
} else{
    console.log('CENOURA')
}

