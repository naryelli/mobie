import { useContext } from "react";
import { AppContext } from "../../../scripts/AppContext";
import { FlatList, View, StyleSheet, Text, Image } from "react-native";

export default Cart = () => {
  const { carrinho, setCarrinho } = useContext(AppContext)
  console.log(carrinho)

  return (
    <View style={styles.container}>
      <FlatList
        data={carrinho}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.caixa}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Image source={item.Image} style={styles.imagem} />
          </View>
        )}
      />
    </View>
  )
}

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
})

