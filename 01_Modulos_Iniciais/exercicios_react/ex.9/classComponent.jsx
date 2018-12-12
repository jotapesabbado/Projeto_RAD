import React,{Component} from 'react'
/*
Valores que estão dentro do componente(vem pelo props)
são apenas para leitura.

Quando tem THIS qer dizer qe e esto acessando o componente Component
que veio de dentro da classe React

Todo componente possue uma variavel padrao chamada 'STATE'

utilizar o setState altera a variavel padrão do componente 
'state', é possivel alterar a variavel diretamente ao invez
de usar a função, porem utilizar a função é uma boa pratica
de programação, alterar a variavel state diretamente só na
primaiera incerção de valor 

Utilizar a chamada assim:
<button onClick={this.sum(1)}></button>

não ira funcionar,por qe voce não estara chamando a função em si
e sim o resultado dela, que no caso é indefinido

Para invocar a fnção todavez que o evento onclick ocorre:
<button onClick={()=>this.sum(-1)}></button>

utilizando uma função arrow que chama a função sum 

*/ 


export default class ClassComponent extends Component{
    constructor(props){
        super(props)

        this.state={value: props.initialValue}
    }
    //METODO DE SOMA
    sum(incremento){
        this.setState({ value: this.state.value + incremento})
    }
    
    render(){
        return(
           <div>
               <h1>{this.props.label}</h1>
               <h2>{this.state.value}</h2>
               <button onClick={()=>this.sum(-1)}>DEC</button>
               <button onClick={()=>this.sum(1)}>INC</button>
           </div>
        )
    }
}