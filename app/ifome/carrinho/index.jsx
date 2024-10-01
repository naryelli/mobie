import { useContext } from "react";
import { AppContext } from "../../../scripts/AppContext";
import { FlatList, View, StyleSheet, Text, Image } from "react-native";
import { Link } from "expo-router";

export default Cart = () => {
  const { carrinho, setCarrinho } = useContext(AppContext);
  console.log(carrinho);

  return (
    <View style={styles.container}>
       <Link href="ifome" >
            <Image   style={styles.logo} source={require('../img/desfazer.png')} />
            </Link>
      <FlatList
        data={carrinho}
        renderItem={({ item }) => (
          <View style={styles.caixa}>
            <View style={styles.imagemContainer}>
              <Image source={item.Image} style={styles.imagem} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.titulo}>{item.titulo}</Text>
              <Text style={styles.preco}>{item.preco}</Text>
              <View style={styles.quantidadeContainer}>
                <View style={styles.icon}>
                  <Text style={styles.icons}>-</Text>
                </View>
                <Text style={styles.quantidade}>1</Text>
                <View style={styles.icon}>
                  <Text style={styles.icons}>+</Text>
                </View>
              </View>
            </View>

          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  caixa: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    overflow: 'hidden',
    padding: 10,
  },
  imagemContainer: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  infoContainer: {
    width: '55%',
    justifyContent: 'space-between',
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  preco: {
    fontSize: 18,
    color:  '#FF69B4', 
    fontWeight: 'bold',
    marginVertical: 5,
  },
  quantidadeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantidade: {
    fontSize: 18,
    marginHorizontal: 10,
    color: '#333',
  },
  icons: {
    fontSize: 18,
    color: '#333',
  },
  logo:{
    width: 30,
    height: 30,
    
}

});
