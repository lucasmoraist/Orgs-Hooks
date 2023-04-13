import React from "react";
import { Image, StyleSheet, View } from 'react-native';

import Texto from '../../../components/Texto'

import logo from '../../../../assets/logo.png'

export default function Detalhes(){
    return<>
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
        //fontFamily: "MontserratRegular"
    },

    preco: {
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
  });