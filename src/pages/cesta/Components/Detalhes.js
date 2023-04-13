import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';

import Texto from '../../../components/Texto';

export default function Detalhes({nome, logoFazenda,  fazenda, descricao, preco, botao}){
    return<>
        <View>
            <Texto style={estilos.nome}>{nome}</Texto>
            <View style={estilos.fazenda}>
                <Image source={logoFazenda} style={estilos.logoFazenda}/>
                <Texto style={estilos.nomeFazenda}>{fazenda}</Texto>
            </View>
            <Texto style={estilos.descricao}>{descricao}</Texto>
            <Texto style={estilos.preco}>{preco}</Texto>

            <TouchableOpacity style={estilos.botao} onPress={() => {}}>
                <Texto style={estilos.txtBotao}>{ botao }</Texto>
            </TouchableOpacity>
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
    },

    botao:{
        marginTop: 16,
        backgroundColor: "#2a9f85",
        paddingVertical:16,
        borderRadius: 10
    },

    txtBotao:{
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 26
    }
  });