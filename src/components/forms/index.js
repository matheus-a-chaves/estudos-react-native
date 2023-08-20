import { View, Text, TextInput, Button } from "react-native";
import ResultadoMedia from "../resultado_media"
import React, { useState } from "react"
import styles from "./styles";

export default function Form(props) {
    const [nota1, setNota1] = useState(null)
    const [nota2, setNota2] = useState(null)
    const [messageMedia, setMessageMedia] = useState("preencha os dados")
    const [media, setMedia] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    return (
        <View>
            <View style={styles.forms}>
                <Text style={styles.texto}>Nota 1: </Text>
                <TextInput
                    style={styles.inputText}
                    onChangeText={setNota1}
                    value={nota1}
                    placeholder="Ex. 10"
                    keyboardType="numeric"
                />
                <Text style={styles.texto}>Nota 2: </Text>
                <TextInput
                    style={styles.inputText}
                    onChangeText={setNota2}
                    value={nota2}
                    placeholder="Ex. 20"
                    keyboardType="numeric"
                />
                <Button
                    title={textButton}
                    onPress={() => validationImc()} />
                <ResultadoMedia
                    messageResultMedia={messageMedia}
                    resultMedia={media} />
            </View>
        </View>
    )

    function validationMedia() {
        if (nota2 != null && nota1 != null) {
            imcCalculator()
            setMessageMedia("Seu media é igual a: ")
            setTextButton("Calcular Novamente")
            return
        }
        setMedia(null)
        setTextButton("Calcular")
        setMessageMedia("preencha os dados")
    }

    function mediaCalculator() {
        return setMedia((parseInt(nota1) + parseInt(nota2)) / 2)
    }
}

