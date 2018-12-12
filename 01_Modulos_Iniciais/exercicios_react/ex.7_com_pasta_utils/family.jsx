import React from 'react'
import {childrenWhithProps} from '../utils/react_utils'

export default (props)=>(
    <div>
        {/*
        cloneElement é ma função do react 
        que clona as propriedades do elemento
        
        então tudo que ta dentro de props
        e passado para props.children

        Assim:
        {React.cloneElement(props.children, ...props)}

        Porem passar informações pro filho diretamente do pai
        não é uma boa pratica de programação

        O que se deve fazer é passar uma copia do pai
        
        PARA FAZER UTILIZE O SPREAD(Faz uma copia do elementeo sem
            ter que copiar todos os parametros, representados 
            por 3 pontos): ...
        AULA 15
        
        A utilização deste operador gera uma 
        dependencia que precisa ser baixada 

        {React.cloneElement(props.children, {...props})}

        Porem dessa forma só ira funcionar para o um unico filho

        Para fazer com que funcione para todos os filios é necessario
        utilizar a função map aplicado para Children

        Essa função passa por todos os valores(de um vetor por exemplo)
        tranformando em alguma outra, extraindo valores por exemplo,
        recebendo 2 parametros, 1 os filho que foram passados e um
        call back, e gerando como resposta m novo array do mesmo tamanho
        porem com as transformações aplicadas

        Neste caso o map ira retornar a o mesmo elemento porem com
        as propriedades da familia junto

        {React.Children.map(props.children,
            child => React.cloneElement(child,{...props})
        )}

        porem para que essa possa ser reutilizada para varios
        componentes é intereçante passar para outro arquivo js
        e importar ele aqui

        agora funciona para uma quantidade indefinida de membros
        */}
        
        <h1>FAMILIA</h1>
        {childrenWhithProps(props.children, props)}

    </div>
)