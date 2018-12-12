import React from 'react'

/*
ARROW FUNCTION É UMA FUNÇÃO COM 
RETURN IMPLICITO

ISSO () =>()

É IGUAL A ISSO
function(){

}

props são as propriedades do seu componente,
basicamente os atributos que sao postos durante 
a instanciação do componente:
<Componente atributo=""/>
*/

export default (props) =>(
     <h1>{props.value}</h1>
    )