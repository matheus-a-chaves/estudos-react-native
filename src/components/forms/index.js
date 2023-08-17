import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "../resultado_imc"
import React, { useState } from "react"
import styles from "./styles";
import Title from '../title';

export default function Form(props) {
    const [altura, setAltura] = useState(null)
    const [peso, setPeso] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha os dados")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    return (
        <View>
            <View style={styles.forms}>
                <Text style={styles.texto}>Altura: </Text>
                <TextInput
                    style={styles.inputText}
                    onChangeText={setAltura}
                    value={altura}
                    placeholder="Ex. 1.70"
                    keyboardType="numeric"
                />
                <Text style={styles.texto}>Peso: </Text>
                <TextInput
                    style={styles.inputText}
                    onChangeText={setPeso}
                    value={peso}
                    placeholder="Ex. 70.10"
                    keyboardType="numeric"
                />
                <Button
                    title={textButton}
                    onPress={() => validationImc()} />
                <ResultImc
                    messageResultImc={messageImc}
                    resultImc={imc} />
            </View>
        </View>
    )

    function validationImc() {
        if (peso != null && altura != null) {
            imcCalculator()
            setMessageImc("Seu IMC é igual a: ")
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("preencha os dados")
    }

    function imcCalculator() {
        return setImc((peso / (altura * altura)).toFixed(2))
    }
}

