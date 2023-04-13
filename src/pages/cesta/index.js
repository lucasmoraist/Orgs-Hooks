import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Topo from './Components/Topo';
import Detalhes from './Components/Detalhes';
import Itens from './Components/Itens';

export default function Index({topo, detalhes, itens}){
    return <ScrollView>
        {/*Aqui eu estou passando os valores do topo e detalhes*/}
        <Topo {...topo}/> 
        <View style={estilos.cesta}>
            <Detalhes {...detalhes}/>
            <Itens {...itens}/>
        </View>
    </ScrollView>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})


