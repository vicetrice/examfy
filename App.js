import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';


export default function App() {
  const [texto, setTexto] = useState(""); // Estado para almacenar el valor del input

  const handlePress = () => {
    alert("Hola Mundo!");
  }

  const handleTextInputSubmit = () => {
    Keyboard.dismiss();
    alert(`Escribiste: ${texto}`);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.circle}>
        </View>
      </TouchableOpacity>
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
      <TextInput
        style={styles.inputT}
        placeholder='Buscar "Excursión"'
        onChangeText={setTexto} // Actualiza el estado 'texto' con el valor del input
        onSubmitEditing={handleTextInputSubmit}
        value={texto} // Asigna el valor del estado 'texto' al input
      />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  circle: {
    borderWidth: 2,
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  inputT: {
    position: 'absolute',
    top: 50,
    width: 350,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 40,
    borderRadius: 10,
  }
});
