import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 10,
    },
    caixa: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginBottom: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        overflow: 'hidden',
    },
    imagem: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        color: '#333',
    },
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
