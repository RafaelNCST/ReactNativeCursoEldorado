import React from "react"
import { StyleSheet, Text} from "react-native"

export default function Titulo({children, style}){
    return <Text style={[style,styles.titulo]}> {children} </Text>
}

const styles = StyleSheet.create({
    titulo:{
        width: "100%",
        textAlign: "center",
        fontSize: 20,
        lineHeight: 50,
        fontFamily: "Inter_900Black"
    }
})