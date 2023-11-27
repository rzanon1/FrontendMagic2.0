import styles from '../style';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { fetchEventos } from '../../../../service/eventoService';
import { Title } from 'react-native-paper';

function ListaEventos({ navigation }) {
  const [eventos, setEventos] = useState([]);
  const CORES = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFC6FF'];

  useEffect(() => {
    const carregarEventos = async () => {
      const data = await fetchEventos();
      setEventos(data);
    };
    carregarEventos();
  }, []);

  const editarEvento = (evento) => {
    // Lógica para editar o evento
    console.log('Editar evento:', evento);
  };

  return (
    <View style={styles.container}>
      {/* Título da Página */}
      <Title style={styles.tituloPagina}>Eventos</Title>

      {/* Lista de Eventos */}
      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => {
          const corItem = CORES[index % CORES.length];
          return (
            <TouchableOpacity onPress={() => editarEvento(item)}>
              <View style={{ ...styles.itemContainer, backgroundColor: corItem }}>
                <Text style={styles.itemDate}>{item.data}</Text>
                <Text style={styles.itemTitle}>{item.nome}</Text>
                <Text style={styles.itemDescription}>{item.descricao}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

export default ListaEventos;
