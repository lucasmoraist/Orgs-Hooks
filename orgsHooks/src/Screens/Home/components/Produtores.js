import React, { useEffect, useState } from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';

import { carregaProdutores } from '../../../service/CarregaDados';
import Produtor from './Produtor';

export default function Produtores({ topo: Topo }){

    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([])

    useEffect(()=>{
        const retorno = carregaProdutores();
        //console.log(retorno)
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    }, []);

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