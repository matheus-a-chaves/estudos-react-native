import { View, Text } from "react-native";

export default function Title(props) {
    return (
        <View>
            <Text style={props.style}>{props.texto}</Text>
        </View>
    )
}