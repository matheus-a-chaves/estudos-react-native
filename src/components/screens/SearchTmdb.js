import React, { useState } from "react"
import {
    View,
    StyleSheet,
    TextInput
} from 'react-native';
import tmdb from '../../api/tmdb';
import { Button } from 'react-native-web';


async function searchTmdb(query) {
    const response = await tmdb.get('/search/movie', {
        params: {
            query,
            include_adult: false,
        }
    })
    console.log(response)
}



const SearchTmdb = () => {
    const [filme, setFilme] = useState("")
    return (
        <View>
            <TextInput
                style={styles.inputText}
                placeholder="Digite o filme"
                onChangeText={setFilme}
            />
            <Button title="Buscar" onPress={() => searchTmdb(filme)} />
        </View>
    );
}

const styles = StyleSheet.create({
    flatList: {
        display: 'flex',
        width: "100%",
        height: "100%",
    }

});

export default SearchTmdb;