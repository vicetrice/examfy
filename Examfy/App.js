import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Platform } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState(''); // Estado para almacenar el texto ingresado

  const handleInputChange = (nuevoTexto) => {
    setTexto(nuevoTexto);
  };


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.backcontain} />

      <View style={styles.circle1} />
      <View style={styles.circle2} />

      <Image source={require('./assets/Examfy_logo.png')} style={styles.image} />
      <TouchableOpacity>
        <View style={styles.button1}>
          <Text style={styles.buttontext}> Crear Cuenta</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.button2}>
          <Text style={styles.buttontext}> Iniciar Sesión</Text>
        </View>
      </TouchableOpacity>


    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    width: 120,
    height: 50,
    top: 80,
  },
  backcontain: {
    width: windowWidth,
    height: windowHeight * 0.35,
    top: 0,
    position: 'absolute',
    backgroundColor: '#d4f4f6',
  },
  circle2: {
    width: 220,
    height: 220,
    right: -50,
    bottom: 450,
    borderRadius: 1000,
    position: 'absolute',
    backgroundColor: '#d4f4f6',
  },
  button1: {
    width: 300,
    height: 50,
    top: 125,
    borderColor: '#00bac2',
    backgroundColor: '#aceaed',
    borderWidth: 2,
    borderRadius: 10000,
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),

  },
  buttontext: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold', // Aplicar negrita
  },
  button2: {
    width: 300,
    height: 50,
    borderColor: '#00bac2',
    backgroundColor: '#aceaed',
    borderWidth: 2,
    borderRadius: 10000,
    justifyContent: 'center',
    bottom: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),

  },
  circle1: {
    width: windowWidth * 1.2,
    height: windowHeight * 0.6,
    borderRadius: windowWidth * 1000,
    top: windowHeight * 0.30,
    left: -101,
    position: 'absolute',
    backgroundColor: '#fff',
  }
});
