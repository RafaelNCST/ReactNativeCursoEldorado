import {StyleSheet, View, Image} from "react-native"
import Texto from "../../Components/Texto"


export default function Item({item:{nome, imagem}}){
    return <View style={style.Item} key={nome}>
        <Texto style={style.nome}> {nome} </Texto>
        <Image style={style.imagem} source={imagem} />
    </View>

}

const style = StyleSheet.create({
    Item:{
        alignItems: "center",
        flexDirection: "row",
        borderBottomColor: "#ececec",
        borderBottomWidth: 2,
        paddingVertical: 15,
        justifyContent: "space-between"
    },
    nome:{
        fontWeight: "bold",
        marginLeft: 20
    },
    imagem:{
        height: 100,
        width: 100, 
        marginRight: 20
    }
})

