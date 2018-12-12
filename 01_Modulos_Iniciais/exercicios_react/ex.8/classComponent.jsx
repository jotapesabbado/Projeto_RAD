import React,{Component} from 'react'

/*
Primeiro exemplo de componente baseado em classe

Um componente mais robusto em relação a função

Toda classe precisa ter o metodo render() e é no return
que o componente é montado, utilizado jsx

o props deste componente só podera ser acessado a 
partir do this
*/
export default class ClassComponent extends Component{
    render(){
        return(
            <h1>{this.props.value}</h1>
        )
    }
}