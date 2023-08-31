import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Image,
    StatusBar,
} from 'react-native';

import DATA from '../../data/photos.json';


const Item = ({ url }) => (
    <View>
        <Image style={styles.image}
            source={{ uri: url }} />
    </View>
)

const GalleryScreen = () => {
    return (
        <SafeAreaView>
            <FlatList
                contentContainerStyle={styles.contentContainerStyle}
                numColumns={2}
                style={styles.flatList}
                data={DATA}
                renderItem={({ item }) => <Item url={item.url} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    image: {
        width: 150,
        height: 80,
        backgroundColor: '#f9c2ff',
        margin: 10
    },
    flatList: {
        display: 'flex',
        width: "100%",
        height: "100%",
    },
    contentContainerStyle: {
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }

});

export default GalleryScreen;