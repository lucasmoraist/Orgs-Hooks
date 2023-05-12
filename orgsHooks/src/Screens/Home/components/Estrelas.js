import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

import Estrela from '../../../assets/estrela.png';
import EstrelaCinza from '../../../assets/estrelaCinza.png';

export default function Estrelas({
    quantidade: quantidadeAntiga,
    editavel = true,
    grande = true
}){

    const [quantidade, setQuantidade] = useState(quantidadeAntiga);
    const estilos = estilosFuncao(grande);

    const getImage = (index)=>{
        if(index < quantidade){
            return Estrela;
        }
        return EstrelaCinza;
    }

    const RenderEstrelas = ()=>{
        const listaEstrelas = [];
        for(let i = 0; i<5; i++){
            listaEstrelas.push(
                <TouchableOpacity
                    key={i}
                    onPress={()=>setQuantidade(i+1)}
                    disabled={!editavel}
                    >
                    <Image style={estilos.estrela} source={getImage(i)}/>
                </TouchableOpacity>
            );
        }
        return listaEstrelas;
    }

    return<View style={{flexDirection: "row"}}>
            <RenderEstrelas/>
        </View>
}

const estilosFuncao = (grande) => StyleSheet.create({
    estrela:{
        width: grande ? 36 : 12,
        height: grande ? 36 : 12
    }
})