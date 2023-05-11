import React from "react";
import { Image, StyleSheet } from "react-native";

import Estrela from '../../../assets/estrela.png';
import EstrelaCinz from '../../../assets/estrelaCinza.png';

export default function Estrelas({
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false
}){
    const estilos = estilosFuncao();
    return <Image style={estilos.estrela} source={Estrela}/>
}

const estilosFuncao = (grande) => StyleSheet.create({
    estrela:{
        width: grande ? 36 : 12,
        height: grande ? 36 : 12
    }
})