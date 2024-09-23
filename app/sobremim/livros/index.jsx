import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Link } from 'expo-router';

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
    const livro = [
        { id: 1, titulo: 'Hatty Potter', Image: require('../img/harrypotter.jpg') },
        { id: 2, titulo: 'Povo de Ar', Image: require('../img/povodoar.jpg') },
        { id: 3, titulo: 'Fourth Wing', Image: require('../img/FourthWing.jpg') },
        { id: 4, titulo: 'Lendarios', Image: require('../img/lendarios.jpg') },
        { id: 5, titulo: 'A guerra da papoula', Image: require('../img/guerra.jpg') },
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={livro}
                renderItem={({ item }) => (
                    <View style={styles.caixa}>
                        <Text style={styles.titulo}>{item.titulo}</Text>
                        <Link
                        href={{
                            pathname: `sobremim/detalhe/${item.id}`,
                            params: {'livro':JSON.stringify(item)},
                        }}>
                        <Image source={item.Image} style={styles.imagem} />
                        </Link>
                    </View>

                )}

            />


        </View>
    )
};
