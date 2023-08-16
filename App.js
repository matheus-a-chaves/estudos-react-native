import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/title';
import Main from './src/components/main';

export default function App() {
  return (
    <View style={styles.container}>
      <Title texto="Titulo do App" />
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
});
