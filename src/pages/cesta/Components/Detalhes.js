import React from "react";
import { Image, StyleSheet, View } from 'react-native';

import Texto from '../../../components/Texto';

export default function Detalhes({nome, logoFazenda,  fazenda, descricao, preco}){
    return<>
        <View style>
            <Texto style={estilos.nome}>{nome}</Texto>
            <View style={estilos.fazenda}>
                <Image source={logoFazenda} style={estilos.logoFazenda}/>
                <Texto style={estilos.nomeFazenda}>{fazenda}</Texto>
            </View>
            <Texto style={estilos.descricao}>{descricao}</Texto>
            <Texto style={estilos.preco}>{preco}</Texto>
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