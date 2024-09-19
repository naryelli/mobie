import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Link } from 'expo-router';

const styles = StyleSheet.create({
    imagem: {
        height: 100,
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
