import topo from "../../assets/topo.png"
import nodeMcu from "../../assets/Itens/nodeMcu.png"
import antenaWifi from "../../assets/Itens/antenaWifi.png"
import antena2g3g from "../../assets/Itens/antena2g3g.png"
import modem from "../../assets/Itens/modem.png"
import ImagemLogo from "../../assets/logo.png"
import Monitor from "../../assets/Itens/Monitor.png"
import Teclado from "../../assets/Itens/TecladoGaming.png"
import Mouse from "../../assets/Itens/GamingMouse.png"
import Filtro from "../../assets/Itens/FiltroDeLinha.png"

const Carrinho={
    Topo:{
        titulo: "CARRINHO",
        subtitulo: "Obrigado por comprar na nossa loja!",
        imagemTopo: topo,
    },
    Detalhes:{
        titulo: "Detalhes do Carrinho",
        subtitulo: "Kit IoT",
        Logo: ImagemLogo,
        textoLogo: "Nome do vendedor",
        descricao: "Um kit que revoluciona a vida dos estudantes",
        preco: "R$ 101,00"
    },
    Itens:{
        titulo:"Itens do carrinho",
        lista:[
            {
                nome: "Antena 2G3G",
                imagem: antena2g3g, 
            },
            {
                nome: "Antena Wi-Fi",
                imagem: antenaWifi,
            },
            {
                nome: "Modem",
                imagem: modem,
            },
            {
                nome: "Node MCu",
                imagem: nodeMcu,
            }
        ]
    },
    Itens2:{
        titulo:"Itens que você pode ter interesse",
        lista:[
            {
                nome: "Mouse Gamer",
                imagem: Mouse
            },
            {
                nome: "Teclado Gamer",
                imagem: Teclado
            },
            {
                nome: "Filtro de Linha Branco",
                imagem: Filtro
            },
            {
                nome: "Monitor Acer",
                imagem: Monitor
            },
        ] 
    }
}

export default Carrinho;