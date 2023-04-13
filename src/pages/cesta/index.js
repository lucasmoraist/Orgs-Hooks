import React from 'react';
import { StyleSheet, View } from 'react-native';

import Topo from './Components/Topo';
import Detalhes from './Components/Detalhes';

export default function Index({topo, detalhes}){
    return <>
        {/*Aqui eu estou passando os valores do topo e detalhes*/}
        <Topo {...topo}/> 
        <View style={estilos.cesta}>
            <Detalhes {...detalhes}/>
        </View>
        
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})


