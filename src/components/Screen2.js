import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// Importa las imágenes desde la carpeta local
import Stalin from '../images/personajes/autoretrato_stalin.jpg';
import Nadie from '../images/personajes/autoretrato_nadie.jpg';

function Nombres() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Image 
            source={Stalin} 
            style={styles.photo} 
          />
          <Text style={styles.name}>Stalin Jafet Dubón Lemus</Text>
          <Text style={styles.id}>20220075</Text>
        </View>
        <View style={styles.card}>
          <Image 
            source={Nadie} 
            style={styles.photo} 
          />
          <Text style={styles.name}>Nadie Profe, perdón pero ya estoy estresado de estar luchando con gente que no hace nada para que entreguen sus ondas uwu</Text>
        </View>
      </View>
    );
}

export default Nombres; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20
    },
    card: {
      backgroundColor: 'yellow',
      padding: 10,
      width: '70%',
    },
    photo: {
      width: "100%",
      height: 150,
      marginBottom: 10,

    }
});
