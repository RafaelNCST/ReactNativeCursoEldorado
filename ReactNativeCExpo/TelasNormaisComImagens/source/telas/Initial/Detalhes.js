import React from 'react'
import {Text, StyleSheet, Image, View} from 'react-native';

import redFlower from '../../../assets/redFlower.png'
import rosa from '../../../assets/rosa.png'
import sol from '../../../assets/sol.png'

export default function Detalhes(){
    return <>
        <View style={styles.viewFundo}>
            <View style={styles.viewFlores}>
                <Image style={styles.redFlowerImg} source={redFlower}/>
                <Image style={styles.rosaImg} source={rosa}/>
                <Image style={styles.solImg} source={sol}/>
            </View>
            <View style={styles.ViewTextos}>
                <Text style={styles.redFlowerText}> Flor vermelha </Text>
                <Text style={styles.rosaText}> Rosa </Text>
                <Text style={styles.solText}> Girassol </Text>
            </View>
            <Text style={styles.textFinal}> Fale Conosco Agora! Num: 6666-6666 </Text>
        </View>
    </>
    ;
}

const styles = StyleSheet.create({ 
    viewFlores:{
        width: '100%',
        paddingVertical: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#000',
        paddingBottom: 10
    },
    redFlowerImg: {
        width: 120,
        height: 120,
    },
    rosaImg: {
        width: 120,
        height: 120
    },
    solImg: {
        width: 120,
        height: 120
    },
    ViewTextos: {
        width: '100%',

        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    redFlowerText: {
        color: '#A9A9A9',
        marginLeft: 20
    },  
    rosaText:{
        color: '#A9A9A9',
        marginRight: 20
    },
    solText: {
        color: '#A9A9A9',
        marginRight: 40
    },
    textFinal: {
        lineHeight: 50,
        fontSize: 15,
        width: '100%',
        paddingVertical: 150,
        textAlign: 'center',
        color: '#A9A9A9',
    },
    viewFundo: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%'

    }
})