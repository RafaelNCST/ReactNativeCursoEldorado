import {Image, View} from "react-native"
import {style} from "./StylesCarrinho/StyleTopo.js"
import Texto from "../../Components/Texto.js"
import Titulo from "../../Components/Titulo.js"

export default function Topo({titulo,subtitulo, imagemTopo}){
    return <>
      <Image style={style.topo}source={imagemTopo}/>
      <Titulo style={style.tituloCarrinho}>{titulo}</Titulo>
      <View style={style.viewTextoCarrinho}>
        <Texto style={style.textoCarrinho}> {subtitulo} </Texto>
      </View>
    </>;
  }



