import React from "react";
import { Text, View, Image, StyleSheet } from 'react-native';

import { carregaTopo } from '../../../service/CarregaDados';
import Logo from '../../../assets/logo.png';


class Topo extends React.Component{
    state ={
        topo:{
            boasVindas: '',
            desc: ''
        }
    }

    atualizaTopo(){
        const retorno = carregaTopo();
        this.setState({topo: retorno})
    }

    componentDidMount(){
        this.atualizaTopo();
    }

    render(){
        return (
            <View style={estilos.header}>
                <Image style={estilos.img} source={Logo}/>
                <Text style={estilos.h1}>{ this.state.topo.boasVindas }</Text>
                <Text style={estilos.desc}>{ this.state.topo.desc }</Text>
            </View>
        )
    }
}

const estilos = StyleSheet.create({
    header:{
        backgroundColor: "#F6F6F6",
        padding: 16,
    },
    img:{
        width: 70,
        height: 28
    },
    h1:{
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight:"bold",
        color: "#464646"
    },
    desc:{
        fontSize: 16,
        lineHeight: 26,
        color: "#A3A3A3"
    }
})

export default Topo;