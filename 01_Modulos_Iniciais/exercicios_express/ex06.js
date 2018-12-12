/*
Testes de instancia (Singleton: nestecaso o express não usa esta dinamica)
*/ 

const express1 = require('express')
const express2 = require('express')

//mesmo reqisitando 2x ela representa a mesma instancia
console.log(express1===express2)


const server1 = express1()
const server2 = express1()

//porem ao utilizar instancias do express elas serão diferentes 
console.log(server1 === server2)


const router1 = express1.Router()
const router2 = express1.Router()

//porem ao utilizar instancias do express elas serão diferentes
console.log(router1===router2)