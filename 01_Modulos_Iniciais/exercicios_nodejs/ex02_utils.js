function upper(text){
    return text.toUpperCase()
}

/*
permite com que essa função seja exportada 
para todos os outro arquivos como um objeto


objeto upper recebe a função upper

forma reduzida:
module.exports = {upper}
*/
module.exports = {upper:upper}