import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "../resultado_imc"
import React, { useState } from "react"

export default function Form(props) {
    const [altura, setAltura] = useState(null)
    const [peso, setPeso] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha os dados")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    return (
        <View>
            <View>
                <Text>Altura: </Text>
                <TextInput
                    onChangeText={setAltura}
                    value={altura}
                    placeholder="Ex. 1.70"
                    keyboardType="numeric"
                />
                <Text>Peso: </Text>
                <TextInput
                    onChangeText={setPeso}
                    value={peso}
                    placeholder="Ex. 70.10"
                    keyboardType="numeric"
                />
                <Button title={textButton} onPress={() => validationImc()} />
                <ResultImc
                    messageResultImc={messageImc}
                    resultImc={imc} />
            </View>
        </View>
    )

    function validationImc() {
        if (peso != null && altura != null) {

            imcCalculator()
            setMessageImc("seu IMC eh igual: ")
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

