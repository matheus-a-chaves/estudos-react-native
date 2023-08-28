import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/HomeScreen';
import Lista from './src/components/Lista';
import Counter from './src/components/screens/CounterScreen'
import ColorList from './src/components/ColorList'
import Main from './src/components/main'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Media" component={Main} />
        <Stack.Screen name="Lista" component={Lista} />
        <Stack.Screen name="CounterScreen" component={Counter} />
        <Stack.Screen name="ColorList" component={ColorList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}