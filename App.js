import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/title';
import Main from './src/components/main';

export default function App() {
  return (
    <View style={styles.container}>
      <Title style={styles.title} texto="CALCULO IMC" />
      <Main />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    padding: 10,
    color: '#333',
    fontWeight: '700'
  }
});
