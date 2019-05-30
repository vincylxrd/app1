// 0 import é para importar classes que vão ser utilizadas no codigo.

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

// O export default é igual ao export
export default class App extends Component {
  constructor(props){
    super(props);
    // O state serve para armezenar o estado da variavel naquele momento 
    this.state = {contador: 0};
  }

  //Criei um função Void  com o nome de onPress
  onPress = (acao) => {
    if(acao == '+')
    {
      
    // O this.state serve para atribiuir valor para as variaveis que foram criadas
    this.setState({
      contador: this.state.contador + 1
    })
  }else{
    this.setState({
      contador: this.state.contador == 0 ? 0 : this.state.contador - 1
    })
  }
}

  //O render é responsavel por exibir tdo conteudo na tela
  render() {
    return (
      <View >
        <TouchableOpacity style={estilo.botao} onPress={()=>{this.onPress('+')}}>
          <Text style={estilo.descricao}>+</Text>
        </TouchableOpacity>
        <Text style={estilo.contador}>
          {this.state.contador !== 0 ? this.state.contador : 0}
        </Text> 
        <TouchableOpacity style={estilo.botao} onPress={()=>{this.onPress('-')}}>
          <Text style={estilo.descricao}>-</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//Responsavel por criar os elementos de estilização
const estilo = StyleSheet.create({
  botao: {
    padding:20,
    backgroundColor: '#DDD',
  },
  descricao: {
    textAlign:'center',
    fontSize: 30
  },
  contador: {
    color: 'blue',
    fontSize: 30,
    textAlign:"center"
  }
})