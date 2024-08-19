import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({   

  container: {
    flex: 1,   

    padding: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default ListaTarefas = () => {
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: 'Hatty Potter', feito: false },
    { id: 2, titulo: 'Povo de Ar', feito: false },
    { id: 3, titulo: 'Fourth Wing', feito: false },
    { id: 4, titulo: 'Lendarios', feito: false },
  ]);

  const marcarComoFeito = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, feito: !tarefa.feito } : tarefa
      )
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => marcarComoFeito(item.id)}>
            <View style={styles.item}>
              <Text style={item.feito ? styles.completed : null}>{item.titulo}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};