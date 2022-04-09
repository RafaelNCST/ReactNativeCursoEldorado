import {StatusBar, StyleSheet, SafeAreaView} from 'react-native';

import Topo from './source/telas/Initial/Topo.js'
import Detalhes from './source/telas/Initial/Detalhes.js'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Topo/>
      <Detalhes/>
      <StatusBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
