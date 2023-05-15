import React, { useEffect, useState } from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';

import Produtor from './Produtor';
import useProdutores from '../../../hooks/useProdutores';

export default function Produtores({ topo: Topo }){

    const [titulo, lista] = useProdutores();

    const header = ()=>{
        return <>
            <Topo/>
            <Text style={estilos.h1}>{ titulo }</Text>
        </>
    }

    return <FlatList 
        data={lista}
        renderItem={({ item }) => <Produtor {...item}/>}
        keyExtractor={({id})=>id}
        ListHeaderComponent={header}/>
}

const estilos = StyleSheet.create({
    h1:{
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: "bold",
        color: "#464646"
    }
})