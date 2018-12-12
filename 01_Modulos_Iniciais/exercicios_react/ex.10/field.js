import React,{Component} from 'react'
/*
Quando o onchange chama o this.handleChange naquele contexto
o react não consege definir de onde esse this vem

por isso é necessario criar um bind no contrutor garantindo o
caminho do this

AULA 32 EXPLICA BEM UMA PARTE TEORICA
*/ 
class Field extends Component{
    constructor(props){
        super(props)
        this.state = {value: props.initialValue}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    render(){
        return(
            <div>
                <label>{this.state.value}</label><br/>
                <input onChange={this.handleChange} value={this.state.value}></input>

            </div>
        )
    }
}

export default Field