import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    forms: {
        width: '80%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7FFFD4',
        margin: 12,
        padding: 12,
        borderRadius: 20,
    },
    inputText: {
        height: 50,
        width: '90%',
        borderRadius: 5,
        fontSize: 15,
        marginBottom: 6,
        padding: 10,
        backgroundColor: '#fafafa',
    },
    texto: {
        color: "#6A5ACD",
        fontWeight: '500',
        fontSize: 20,
        marginBottom: 5
    },
    button: {
        backgroundColor: '#7B68EE',
        borderRadius: 5,
        width: '90%',
        height: 50,
        justifyContent: 'center',
    },
    textoBotao: {
        fontSize: 15,
        fontWeight: '500',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: '#fff',
    }
});

export default styles;