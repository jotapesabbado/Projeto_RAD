/*
Entrada e saida padrão do terminal ataves do
node
*/

process.stdout.write('Qual seu legume favorito:')
process.stdin.on('data',function(data){
    process.stdout.write(`Sua resposta foi
    ${data.toString()} Obrigado! \n`)
    process.exit()
})

