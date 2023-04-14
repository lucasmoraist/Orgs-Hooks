import React from 'react';

import Texto from '../../../components/Texto';
import { Image, StyleSheet, View } from 'react-native';

export default function Item({ item: { nome, imagem } }){
    return (
        <View style={estilos.item}>
            <Image style={estilos.imagem} source={imagem}/>
            <Texto style={estilos.texto}>{nome}</Texto>
        </View> 
    );
}

const estilos = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center"
    },

    imagem: {
        width: 46,
        height: 46
    },

    texto: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }

})