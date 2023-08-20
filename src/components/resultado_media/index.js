import { View, Text } from "react-native";
import React from "react"

export default function ResultadoMedia(props) {
    return (
        <View>
            <Text>{props.messageResultMedia} {props.resultMedia}</Text>
        </View>
    )
}

