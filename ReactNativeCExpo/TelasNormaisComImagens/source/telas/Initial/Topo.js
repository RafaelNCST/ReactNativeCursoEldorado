import React from 'react'
import {Text, Dimensions, StyleSheet, Image} from 'react-native';

import topo from '../../../assets/topo.png'

const width = Dimensions.get('screen').width

export default function Topo(){
    return <>
        <Image style={styles.TopoImg} source={topo}/>
        <Text style={styles.textTitulo}> Flower Obscurium Club </Text>
        <Text style={styles.textFlores}> Venha conhecer as melhores flores da Região! </Text>
    </>
    ;
}

const styles = StyleSheet.create({
    TopoImg: {
        width: "100%",
        height: 497/884 * width,
    },
    textTitulo: {
        position: 'absolute',
        fontWeight: 'bold',
        lineHeight: 50,
        fontSize: 25,
        width: '100%',
        textAlign: 'center',
        paddingVertical: 70,
        color: '#A9A9A9'
    },
    textFlores:{
        position: 'absolute',
        fontSize: 15 ,
        width: '100%',
        textAlign: 'center',
        paddingVertical: 160,
        color: '#A9A9A9'
    }
})
