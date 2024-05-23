import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView, Image } from 'react-native';

function ListaComidas({ navigation }) {
  const [comidaSeleccionada, setComidaSeleccionada] = useState('');
  const opcionesComidas = [
    { comidauwu: 'Suchi', desc: 'Ps ta rico', imagen: require('../images/comiditauwu/suchi.jpg') },
    { comidauwu: 'KFC', desc: 'mmm pollito', imagen: require('../images/comiditauwu/kfc.jpg') },
    { comidauwu: 'Chinawok', desc: 'mmm gatito', imagen: require('../images/comiditauwu/chinawok.jpg') },
    { comidauwu: 'Picsa', desc: 'cheddar chipottle', imagen: require('../images/comiditauwu/picsa.jpg') }
  ];

  return (
    <SafeAreaView style={styles.contenedor}>
      <FlatList
        data={opcionesComidas}
        renderItem={({ item }) => (

          <View
            style={[styles.contenedorComida, item.nombre === comidaSeleccionada ? styles.comidaSeleccionada : null]}
            onPress={() => setComidaSeleccionada(item.nombre)}>
            <Image source={item.imagen} style={styles.imagenComida} />
            <View>
              <Text style={styles.comidauwu}>{item.comidauwu}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
            </View>
          </View>
          
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

export default ListaComidas;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: 'yellow',
    paddingTop: 30,
    paddingLeft: 20
  },
  contenedorComida: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  imagenComida: {
    width: 120,
    height: 120,
    marginRight: 10
  },
});
