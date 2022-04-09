import { StyleSheet, Dimensions } from "react-native"

const width = Dimensions.get("screen").width;

export const style = StyleSheet.create({
    topo: {
      width: "100%",
      height: 582/772 * width,
    },
    tituloCarrinho: {
      position: "absolute",
      paddingVertical: 100,   
    },
    viewTextoCarrinho: {
      backgroundColor: "#ff8c00",
      position: "absolute",
      width: "100%",
      alignItems: "center",
      marginTop: "40%",
      justifyContent: "center",
    },
    textoCarrinho:{
      fontWeight: "bold"
    },
})