import { StatusBar } from 'expo-status-bar';
import { React, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Platform, BackHandler } from 'react-native';

import Addcont from './screens/Addcont';
import CrearCuenta from './screens/crear_cuenta';

export default function App() {
  const [inises, setInises] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [crear_c, setCrear] = useState(false);


  const ActivarInises = () => {
    setCrear(false);
    setInises(true);
  }

  const ActivarCrear = () => {
    setInises(false);
    setCrear(true);
  }

  const agregarContacto = (nuevoContacto) => {
    setContacts([...contacts, nuevoContacto]);
  }


  useEffect(() => {
    const backHandler = () => {
      if (inises || crear_c) {
        setInises(false);
        setCrear(false);
        return true;
      }
      return false;
    };

    const backHandlerSubscription = BackHandler.addEventListener('hardwareBackPress', backHandler);

    return () => {
      backHandlerSubscription.remove();
    };
  }, [inises, crear_c]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.backcontain} />

      <View style={styles.circle1} />
      <View style={styles.circle2} />

      <Image source={require('./assets/Examfy_logo.png')} style={styles.image} />
      <TouchableOpacity onPress={ActivarCrear}>
        <View style={styles.button1}>
          <Text style={styles.buttontext}> Crear Cuenta Invitado</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={ActivarInises}>
        <View style={styles.button2}>
          <Text style={styles.buttontext}> Iniciar Sesión</Text>
        </View>
      </TouchableOpacity>
      
      {inises && <View style={{ position: 'absolute', width: windowWidth, height: windowHeight, backgroundColor: 'white' }}>
        <Addcont contacti={contacts} agregarContacto={agregarContacto} />
      </View>}
      {crear_c && <View style={{ position: 'absolute', width: windowWidth, height: windowHeight, backgroundColor: 'white' }}>
        <CrearCuenta />
      </View>}
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
    width: windowWidth * 0.5,
    height: windowHeight * 0.11,
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
    width: windowWidth * 0.42,
    height: windowHeight * 0.8,
    right: -0.09 * windowWidth,
    bottom: windowHeight * 0.62,
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
    fontWeight: 'bold',
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
    width: windowWidth * 1.385,
    height: windowHeight * 0.7,
    borderRadius: windowWidth * 1000,
    top: windowHeight * 0.3,
    left: -0.325 * windowWidth,
    position: 'absolute',
    backgroundColor: '#fff',
  }
});
