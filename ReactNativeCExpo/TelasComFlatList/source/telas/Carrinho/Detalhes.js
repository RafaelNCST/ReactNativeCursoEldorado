import {Image, View} from "react-native"
import { style } from "./StylesCarrinho/StyleDetalhes.js"
import Texto from "../../Components/Texto.js"
import Titulo from "../../Components/Titulo.js"

export default function Detalhes({titulo, subtitulo, Logo, textoLogo, descricao, preco}){
    return <>
        <Titulo>{titulo}</Titulo>
        <Texto style={style.textoDetalhes}>{subtitulo}</Texto>
        <View style={style.viewLogo}>
            <Image style={style.imagemLogo} source={Logo}/>
            <Texto style={style.textLogo}> {textoLogo} </Texto>
        </View>
        <Texto style={style.textDesc}> {descricao} </Texto>
        <Texto style={style.Preco}>{preco}</Texto>
    </>
}

