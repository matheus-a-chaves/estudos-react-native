import { View, Text, TextInput, Pressable } from "react-native";
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
        <View style={{ alignItems: 'center' }}>
            <View style={styles.forms}>
                <Text style={styles.texto}>Nota 1</Text>
                <TextInput
                    style={styles.inputText}
                    onChangeText={setNota1}
                    value={nota1}
                    placeholder="Ex. 10"
                    keyboardType="numeric"
                />
                <Text style={styles.texto}>Nota 2 </Text>
                <TextInput
                    style={styles.inputText}
                    onChangeText={setNota2}
                    value={nota2}
                    placeholder="Ex. 20"
                    keyboardType="numeric"
                />
                <Pressable style={styles.button} onPress={() => validationMedia()}>
                    <Text style={styles.textoBotao}>{textButton}</Text>
                </Pressable>
                <ResultadoMedia
                    messageResultMedia={messageMedia}
                    resultMedia={media} />
            </View>
        </View>
    )

    function validationMedia() {
        if (nota2 != null && nota1 != null) {
            mediaCalculator()
            setMessageMedia("Sua media é igual a: ")
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

