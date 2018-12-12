/*
NPM SIGNIFICA NODE PACKEGE MANAGER
 
Exportando modulos internos(do core) do node
e externos

quando o caminho é um modulo do node não é necessario
caminho rativo

para o lodash é comum usar o _ como nome da constante

no caso do loadash não é um modulo do core do node
então é preciso instalar

npm i loadash
*/


const _ = require('lodash')

const legumes = [{
    nome:'Batata',
    nota:7.6
},{
    nome:'Cenoura',
    nota:6.6
},
{
    nome:'Berinjela',
    nota:8.1
}
]

/*_.sumBy função do loadash, soma o atributo definido de todos
os indices de um vetor*/
const media = _.sumBy(legumes,'nota') / legumes.length


console.log(media)