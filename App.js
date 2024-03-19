import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Exemplo_0 from './compenents/exemplo_1';

import Atividade_1 from './compenents/atividade_1';

import Exemplo_2 from './compenents/exemplo_2';

export default function App() {
  return (
    <View style={styles.container}>
     <Exemplo_2 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
