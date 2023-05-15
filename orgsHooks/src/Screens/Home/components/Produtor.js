import React, { useReducer, useMemo } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Estrelas from "../../../components/Estrelas";

const distanciaMetros = (distancia) => {
    return `${distancia}m`
}

export default function Produtor({ nome, imagem, distancia, estrelas }){
    const [selecionado, inverterSelecionado] = useReducer(
        (selecionado) => !selecionado,
        false
    );

    const distanciaTexto = useMemo(() => distanciaMetros(distancia), 
    [distancia]);

    return<TouchableOpacity 
            style={estilos.cartao}
            onPress={inverterSelecionado}
        >
        <Image style={estilos.img} source={imagem} accessibilityLabel={nome}/>

        <View style={estilos.info}>
            <View>
                <Text style={estilos.nome}>{ nome }</Text>
                <Estrelas 
                    quantidade={estrelas}
                    editavel={selecionado}
                    grande={selecionado}
                />
            </View>
            <Text style={estilos.dist}>{ distanciaTexto }</Text>
        </View>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    cartao:{
        backgroundColor: "#F6F6F6",
        marginVertical: 8,
        marginHorizontal: 8,
        borderRadius: 6,
        flexDirection: "row",

        //Adicionando sombra no iOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        //Adicionando sombra no Android
        elevation: 4,
    }, 
    img:{
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },
    info:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 8,
        marginRight: 16,
        marginVertical: 16
    },
    nome:{
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "bold"
    },
    dist:{
        fontSize: 12,
        lineHeight: 19
    }
})