import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';


const CrearCuenta = ({ salid }) => {
    const [smsCode, setSMSCode] = useState('');
    const handleVerification = () => {
        if (smsCode == '01234') {
            salid(true);

        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/Examfy_logo.png')} style={styles.Logo} />
            <TextInput
                style={styles.input}
                placeholder="Introduce el código SMS"
                value={smsCode}
                onChangeText={text => setSMSCode(text)}
                textAlign='center'
            />
            <TouchableOpacity style={styles.boton} onPress={handleVerification}>
                <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Verificar</Text>
            </TouchableOpacity>
        </View>
    );
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: windowWidth * 0.6,
        marginBottom: 20,
        height: 45,
        backgroundColor: '#f4f4f4',
        borderWidth: 3,
        borderTopLeftRadius: 1000,
        borderBottomLeftRadius: 1000,
        borderTopRightRadius: 1000,
        borderBottomRightRadius: 1000,
        borderColor: '#d8d8d8',
        alignItems: 'center',
    },
    Logo: {
        position: 'absolute',
        width: windowWidth * 0.35,
        height: windowHeight * 0.09,
        top: 50,
    },
    boton: {
        borderWidth: 3,
        width: windowWidth * 0.2,
        alignSelf: 'center',
        backgroundColor: '#f4f4f4',
        borderRadius: 5,
        borderColor: '#d8d8d8',
    },
});

<<<<<<< HEAD
export default CrearCuenta;
=======
export default CrearCuenta;
>>>>>>> 4ade925791fe4b3e06b81154ff37a9f505697eb6
