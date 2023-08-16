import { View, Text } from "react-native";
import React, { useState } from "react"

export default function ResultadoImc(props) {
    return (
        <View>
            <Text>{props.resultImc}</Text>
            <Text>{props.messageResultImc}</Text>
        </View>
    )
}

