import React, { useState } from "react";
import { View, Button, FlatList } from "react-native";

const ColorList = () => {
    const [colors, setColors] = useState([]);

    function addColor() {
        const r = Math.floor(Math.random() * 255)
        const g = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
        setColors(prevColors => [...prevColors, `rgb(${r},${g},${b})`])
    }

    return (
        <>
            <Button
                title="Adiciona cor"
                onPress={() => addColor()}
            />
            <FlatList
                data={colors}
                keyExtractor={item => item}
                renderItem={({ item }) =>
                    <View
                        style={
                            {
                                backgroundColor: item,
                                with: 50,
                                height: 50
                            }
                        }
                    />
                }
            />
        </>
    );
}

export default ColorList; 
