/*
Verificando funcionamento do this no node 
AULA 191

*/ 
console.log(global===this)

console.log(module===this)

console.log(module.exports===this)


this.digaBatata = function(){
    console.log('batata')
}