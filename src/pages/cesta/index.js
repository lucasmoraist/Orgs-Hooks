import React from 'react';
import { StyleSheet } from 'react-native';

import Topo from './Components/Topo';
import Detalhes from './Components/Detalhes';

export default function Index({topo, detalhes}){
    return <>
        <Topo {...topo}/> {/*Aqui eu estou passando o */}
        <Detalhes/>
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})


