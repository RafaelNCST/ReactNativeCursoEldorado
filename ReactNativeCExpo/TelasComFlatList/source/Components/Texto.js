import React from "react"
import { StyleSheet, Text} from "react-native"

export default function texto({children, style}){
    let estilo = estilos.texto

    if(style?.fontWeight === "bold"){
      estilo = estilos.textoNegrito
    }
    return <Text style={[style, estilo]}> {children} </Text>
}

const estilos = StyleSheet.create({
    textoNegrito:{
      fontFamily: "Inter_900Black",
      fontWeight: "normal"
    },
    texto:{
      fontFamily: "Inter_200ExtraLight",
      fontWeight: "normal"
    },
})