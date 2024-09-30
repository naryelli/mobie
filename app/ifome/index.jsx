import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, FlatList, Image, Button, Alert} from 'react-native';
import { Link } from 'expo-router';
import { AppContext } from '../../scripts/AppContext';

const Comidas = () => {
    const comida = [
        { id: 1, titulo: 'Combo Barbie', descricao: 'Delicioso combo caracteristico da Barbie.', Image: require('./img/pao.jpg') },
        { id: 2, titulo: 'Pão de Queijo', descricao: 'Pão de queijo quentinho que nem de vó.', Image: require('./img/queijo.jpg') },
        { id: 3, titulo: 'Bolo Red Velvet', descricao: 'Bolo aveludado com cream cheese.', Image: require('./img/bolo.jpg') },
        { id: 4, titulo: 'Sonho de Morango', descricao: 'Sonho recheado com morango fresco.', Image: require('./img/sonho.jpg') },
        { id: 5, titulo: 'Espetinho de Brownie', descricao: 'Delicioso brownie no palito.', Image: require('./img/espetinho.jpg') },
        { id: 6, titulo: 'Amor de Panqueca', descricao: 'Panquecas feitas com amor.', Image: require('./img/panqueca.jpg') },
    ];
    const {carrinho, setCarrinho} = useContext(AppContext)

    return (
        <View style={styles.container}>
            <Link href="ifome/carrinho" style={styles.link}>carrinho</Link>
            <FlatList
                data={comida}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.caixa}>
                        <Image source={item.Image} style={styles.imagem} />
                        <Text style={styles.titulo}>{item.titulo}</Text>
                        <Text style={styles.descricao}>{item.descricao}</Text>
                        <Button 
                        title='Adicionar ao Carrinho'
                        color={'#FF69B4'}
                        onPress={() => setCarrinho([...carrinho, item])}
                        />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 10,
    },
    caixa: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        marginBottom: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        overflow: 'hidden',
        paddingBottom: 10,
    },
    imagem: {
        width: '100%',
        height: 160,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 12,
        color: '#333',
        textAlign: 'center',
    },
    descricao: {
        fontSize: 14,
        color: '#666',
        paddingHorizontal: 12,
        paddingBottom: 12,
        textAlign: 'center',
    },
    botao: {
        backgroundColor: '#FF69B4',
        borderRadius: 8,
        paddingVertical: 10,
        marginHorizontal: 12,
        marginBottom: 12,
        alignItems: 'center',
    },
    textoBotao: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Comidas;
