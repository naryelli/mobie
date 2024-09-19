import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

const styles = StyleSheet.create({
    image:{
        height: 100,
        padding: 20,
        alignSelf: 'center'
    },
    titulo:{
        fontSize: 40,
        textAlign: 'center',
        margin: 20,
        fontFamily: 'Open Sans',
        fontWeight: '800',
    },
    card:{
      justifyContent:'center'
    }
})

const detalhe = () =>{
    const {livro} = useLocalSearchParams();
    const livroObject = JSON.parse(livro);

    return(
        <View style={StyleSheet.card}>
            <Image source={{uri: livroObject.Image}} style= {styles.image}></Image>
            <Text style={styles.titulo}>{livroObject.titulo}</Text>
        </View>
    );
}

export default detalhe