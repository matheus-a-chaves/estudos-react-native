import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Media from './components/forms'
import Lista from './components/Lista'
import Contador from './components/screens/CounterScreen'
import ListaCor from './components/ColorList'
import Galeria from './components/screens/GalleryScreen'
import SearchTmdb from './components/screens/SearchTmdb'

import { Entypo, Ionicons, Foundation, FontAwesome5 } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
export default function App() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    height: 55,
                    backgroundColor: '#111d18',
                    paddingTop: 10
                },
                tabBarActiveTintColor: '#83e2f6',
                tabBarInactiveTintColor: '#fff'
            }}
            tabBarStyle={{}}
        >
            <Tab.Screen
                name="Media"
                component={Media}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="home" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Lista"
                component={Lista}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ size, color }) => (
                        <Foundation name="clipboard-notes" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Galeria"
                component={Galeria}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome5 name="photo-video" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Contador"
                component={Contador}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="circle-with-plus" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Lista de Cores"
                component={ListaCor}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="color-palette" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Movie"
                component={SearchTmdb}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="color-palette" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}