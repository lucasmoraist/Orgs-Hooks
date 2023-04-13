import React from 'react';
import { StyleSheet } from 'react-native';

import Topo from './Components/Topo';
import Detalhes from './Components/Detalhes';

export default function Cesta(){
    return <>
        <Topo/>
        <Detalhes/>
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})


