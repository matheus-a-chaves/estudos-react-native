import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './src/routes'

const Stack = createStackNavigator();

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}