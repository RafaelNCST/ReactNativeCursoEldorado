import {StatusBar, StyleSheet, SafeAreaView, View, FlatList} from "react-native";
import Topo from "./source/telas/Carrinho/Topo.js"
import Detalhes from "./source/telas/Carrinho/Detalhes.js"
import { useFonts, Inter_900Black, Inter_200ExtraLight } from "@expo-google-fonts/inter";
import Mocks from "./source/Mocks/Carrinho.js"
import Item from "./source/telas/Carrinho/Item.js"
import Texto from "./source/Components/Texto.js"

export default function App(){
  let [fontsLoaded] = useFonts({
    Inter_900Black, Inter_200ExtraLight
  });

  if (!fontsLoaded){
    return <View></View>
  } 

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Mocks.Itens.lista}
        renderItem={Item}
        keyExtractor={({nome}) => nome}
        ListHeaderComponent={ () => { 
          return <> 
            <Topo {...Mocks.Topo}/>
            <Detalhes {...Mocks.Detalhes}/>
            <View style={styles.viewTitulo}>
              <Texto style={styles.titulo}> {Mocks.Itens.titulo} </Texto>
            </View>
          </>
          }
        }
        ListFooterComponent={ () => {
            return <>
            <View style={styles.viewFinalizacao}>
              <Texto> Cancelar </Texto>
              <Texto> Comprar </Texto>
            </View>
            <View style={styles.viewEspaco}>
            </View>
            <View style={styles.viewTitulo}>
              <Texto style={styles.titulo}> {Mocks.Itens2.titulo} </Texto>
            </View>
              <FlatList
              data={Mocks.Itens2.lista}
              renderItem={Item}
              keyExtractor={({nome}) => nome}
              />
            </>
          }
        }
      />
      <StatusBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    backgroundColor: "#fff"
  },
  titulo:{
    textAlign: "center",
    fontWeight: "bold",
  },
  viewTitulo:{
    backgroundColor: "#ffa07a",
  },
  viewFinalizacao:{
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    padding: 20,
    width: "100%",
    borderRadius: 1,
    borderWidth: 2,
    borderColor: "#ffa07a"
  },
  viewEspaco:{
    padding: 10,
  }
});
