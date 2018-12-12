const s1 = require('./ex03_silgleton')
const s2 = require('./ex03_silgleton')
 


s1.exibirProx()
s2.exibirProx()

s1.exibirProx()
s2.exibirProx()

/*
a cada requisição do objeto a mesma instancia 
é utilizada, o que é chamado de singleton, um 
comportamento de nodejs

Não é bom nem ruim!!

TESTAR:
node ex03_test
*/