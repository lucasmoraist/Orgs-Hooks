import React from 'react';
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';

import Texto from '../components/Texto'

import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>Detalhe da cesta</Texto>

        <View style>
            <Texto style={estilos.nome}>Cesta de Verduras</Texto>
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.logoFazenda}/>
                <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
            </View>
            <Texto style={estilos.descricao}>
                Uma cesta com produtos selecionados
                cuidadosamente da fazenda direto para
                sua cozinha
            </Texto>
            <Texto style={estilos.preco}>R$40,00</Texto>
        </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
      width: "100%",
      height: 578 / 768 * width
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "#fff",
        fontWeight: "bold",
        padding: 16
    },

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },

    nome: {
        fontSize: 26,
        lineHeight: 42, //Tamanho da linha
        color: "#464646",
        //fontWeight: "bold",
        //fontFamily: "MontserratBold"
        fontWeight: "bold"
    },

    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },

    logoFazenda:{
        width: 32,
        height: 32
    },

    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        //fontFamily: "MontserratRegular"
    },

    descricao: {
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26,
        fontFamily: "MontserratRegular"
    },

    preco: {
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
  });
