import React from 'react';
import { View, StyleSheet, Image, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    options: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },

    botao: {
        backgroundColor: '#487047',
        padding: 5,
        color: '#FFF',
        width: 150,
        margin: 10,
        borderRadius: 15,
        alignSelf: 'center'

    },
    foto: {
        width: 100,
        height: 100,
        marginBottom: 20,
        borderRadius: 50,
        alignSelf: 'center'

    },
    nome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 5,
        fontFamily: 'Open Sans',
        fontWeight: '800',
    },
    titulo: {
        fontSize: 40,
        textAlign: 'center',
        margin: 20,
        fontFamily: 'Open Sans',
        fontWeight: '800',

    },
    box: {
        shadowOpacity: 0.25,
        shadowRadius: 8.84,
        padding: 50,
        borderRadius: 15
    },
    texto:{
        fontSize: 17,
        textAlign: 'center',
        margin: 20,
        fontFamily: 'Open Sans',
    
    }
});

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.titulo}>Sobre Mim</Text>
                <Image
                    style={styles.foto}
                    source={require('./img/nary.jpg')}
                /><Text style={styles.nome}>Naryelli Julia</Text>
                <Text style={styles.texto}>Olá! Meu nome é Naryelli. Nos meus momentos<br></br> de lazer, adoro me perder em um bom livro.<br></br> Além disso, sou apaixonada por cuidar dos cabelos<br></br> e sempre estou testando novos produtos</Text>
                
                <View style={styles.options}>
                    <Link href="/produtos" style={styles.link}>
                        <Pressable><Text style={styles.botao}>Livros</Text></Pressable>
                    </Link>
                    <Link href="/produtos" style={styles.link}>
                        <Pressable><Text style={styles.botao}>Produtos</Text></Pressable>
                    </Link>
                </View>
            </View>
        </View>
    );
}
