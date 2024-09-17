import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const styles = StyleSheet.create({
    imagem: {
        height: 500,
        padding: 20,
        alignSelf: 'center'
    },
    titulo: {
        fontSize: 20,
        textAlign: 'center',
        margin: 5,
        fontFamily: 'Open Sans',
        fontWeight: '800',
    },
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',


    },
    caixa: {


    }
}

);

export default livros = () => {
    const produto = [
        { id: 1, titulo: 'Loréal paris profissional', Image: require('../img/loreal.jpg') },
        { id: 2, titulo: 'Morte Subita', Image: require('../img/lola.jpg') },
        { id: 2, titulo: 'Sabonete Facial', Image: require('../img/sabonete.jpg') },
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={produto}
                renderItem={({ item }) => (
                    <View style={styles.caixa}>
                        <Text style={styles.titulo}>{item.titulo}</Text>
                        <Image source={item.Image} style={styles.imagem} />
                    </View>

                )}

            />


        </View>
    )
};
