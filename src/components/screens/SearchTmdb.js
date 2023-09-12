import React, { useState } from "react"
import tmdb from '../../api/tmdb';
import {
    View,
    StyleSheet,
    Button,
    SafeAreaView,
    FlatList,
    Text,
    TextInput,
    Pressable
} from "react-native";
import { Ionicons } from '@expo/vector-icons';


const SearchTmdb = () => {
    const [buscaNome, setBusca] = useState("")
    const [DATA, setData] = useState("")

    async function searchTmdb(query) {
        const { data } = await tmdb.get('/search/movie', {
            params: {
                query,
                include_adult: false,
            }
        })
        setData(data.results);

    }

    const Item = ({ item }) => (
        <View>
            <Text style={styles.item}>{item.title}</Text>
        </View>
    )

    return (
        <View>
            <View style={styles.pesquisa}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Digite o filme"
                    onChangeText={setBusca}
                />
                <Pressable style={styles.button} onPress={() => searchTmdb(buscaNome)}>
                    <Ionicons name="search" size={24} color="black" />
                </Pressable>
            </View>
            <SafeAreaView>
                <FlatList
                    contentContainerStyle={styles.contentContainerStyle}
                    numColumns={1}
                    style={styles.flatList}
                    data={DATA}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    inputText: {
        width: "80%",
        padding: 7,
        backgroundColor: '#fafafa',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#A3A3A3",
    },
    flatList: {
        display: 'flex',
        width: "95%",
        height: "100%",
    },
    item: {
        width: "100%",
        padding: 20,
        backgroundColor: '#f9c2ff',
        margin: 10,
        marginLeft: 20,
    },
    pesquisa: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: "center",
        height: 60,
    }

});

export default SearchTmdb;