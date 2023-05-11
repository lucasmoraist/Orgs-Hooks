import React from "react";
import { Text, View, Image, StyleSheet } from 'react-native';


import Logo from '../../../assets/logo.png';

export default function Topo(){
    return (
        <View style={estilos.header}>
            <Image style={estilos.img} source={Logo}/>
            <Text style={estilos.h1}>Olá Lucas</Text>
            <Text style={estilos.desc}>Encontre os melhores produtores</Text>
        </View>
    )
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
        fontWeight:"bold"
    },
    desc:{
        fontSize: 16,
        lineHeight: 26
    }
})