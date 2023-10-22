import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import * as SMS from 'expo-sms';
import foto1 from "../assets/foto1.jpeg";
import foto2 from "../assets/foto2.jpeg";
import foto3 from "../assets/foto3.jpeg";
import foto4 from "../assets/foto4.jpeg";
import foto5 from "../assets/foto5.jpeg";

const Addcont = ({ contacti, agregarContacto }) => {

    const [contacts, setContacts] = useState(contacti); // Define y proporciona tus datos de contactos
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [imagemos, setimagemos] = useState(true);

    const images = [
        foto1, foto2, foto3, foto4, foto5
    ];

    const sendSMS = async () => {
        const isAvailable = true;

        if (isAvailable) {
            // Define el mensaje y los destinatarios
            const message = 'Hola, este es un mensaje de prueba , Tu codigo es: 01234.';
            const recipients = phoneNumber; // Agrega los números de teléfono de los destinatarios

            // Envía el SMS
            const { result } = await SMS.sendSMSAsync(recipients, message);
        }
    };


    const handleNameChange = (text) => {
        setName(text);
    };

    const handlePhoneNumberChange = (text) => {
        setPhoneNumber(text);
    };

    const handleSaveContact = () => {
        sendSMS();
        // Aquí puedes realizar la lógica para guardar el contacto con el nombre y número de teléfono ingresados.
        agregarContenedor();

        // Luego, puedes limpiar los campos o realizar otras acciones según tus necesidades.
        setName('');
        setPhoneNumber('');
    };

    const cambiarpanta = () => {
        setimagemos(false);
    }
    const activarphoto = () => {
        setimagemos(true);
    }

    const agregarContenedor = () => {
        // Genera tus contactos y agrégalos al estado de 'contacts' según sea necesario
        // Por ejemplo:
        const nuevoContacto = {
            id: Math.random().toString(36),
            namee: name,
            phoneNumberr: phoneNumber,
        };
        agregarContacto(nuevoContacto);
        setContacts([...contacts, nuevoContacto]);
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior='height'>
            <Image source={require('../assets/Examfy_logo.png')} style={styles.Logo} />
            {!imagemos && <View style={styles.info}>
                <View style={styles.plus} />
                <TextInput
                    style={styles.contacto_An_mod}
                    placeholder="Ingresa el nombre"
                    value={name}
                    onChangeText={handleNameChange}
                    textAlign='center'
                />
                <TextInput
                    style={styles.contacto_An_mod}
                    placeholder="Ingresa el número de teléfono"
                    value={phoneNumber}
                    onChangeText={handlePhoneNumberChange}
                    keyboardType="phone-pad" // Esto muestra un teclado numérico en la mayoría de los dispositivos.
                    textAlign='center'
                />
                <View style={styles.plus} >
                    <Image source={require('../assets/phone.png')} style={styles.phone} />
                </View>
                <View style={styles.plus2}>
                    <Image source={require('../assets/person.png')} style={styles.person} />
                </View>
                <TouchableOpacity style={styles.boton} onPress={handleSaveContact}>
                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Añadir</Text>
                </TouchableOpacity>
            </View>}

            {!imagemos && <View style={styles.Contactos}>
                <Text style={styles.TextContact}>Contactos</Text>
            </View>}
            {!imagemos && <View style={{ position: 'absolute', bottom: windowHeight * 0.15, width: windowWidth, height: windowHeight * 0.35, justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                    data={contacts}
                    keyExtractor={(contact) => contact.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.contacto_An}>
                            <Text style={{ fontWeight: 'bold' }}>{item.namee}</Text>
                            <Text style={{ fontWeight: 'bold' }}>{item.phoneNumberr}</Text>
                        </View>
                    )}
                />
            </View>}
            {imagemos && <View style={styles.containerlist}>
                <FlatList
                    data={images}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.imageContainer}>
                            <Image source={item} style={styles.imagelist} />
                        </View>
                    )}
                />
            </View>}

            <View style={styles.navigator}>
                <TouchableOpacity style={styles.screen1} onPress={activarphoto}>
                    <Image source={require('../assets/multiple_photo.png')} style={styles.multiplepho} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.screen2}>
                    <Image source={require('../assets/camera.png')} style={styles.multiplepho} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.screen3}>
                    <Image source={require('../assets/home.png')} style={styles.multiplepho} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.screen4} onPress={cambiarpanta}>
                    <Image source={require('../assets/plane.png')} style={styles.multiplepho} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.screen5}>
                    <Image source={require('../assets/settings.png')} style={styles.multiplepho} />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView >
    );
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    imageContainer: {
        marginBottom: 20, // Agrega el padding deseado aquí
    },
    imagelist: {
        width: windowWidth,
        height: windowHeight * 0.2
    },
    containerlist: {
        position: 'absolute',
        bottom: windowHeight * 0.15,
        height: windowHeight * 0.68,
        width: windowWidth,
    },

    screen1: {
        position: 'absolute',
        left: windowWidth * 0.015,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignContent: 'center',
    },
    screen2: {
        position: 'absolute',
        left: windowWidth * 0.1825,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignContent: 'center',
    },
    screen3: {
        position: 'absolute',
        left: windowWidth * 0.36,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignContent: 'center',
    },
    screen4: {
        position: 'absolute',
        left: windowWidth * 0.52,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignContent: 'center',
    },
    screen5: {
        position: 'absolute',
        left: windowWidth * 0.68,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignContent: 'center',
    },
    navigator: {
        borderWidth: 3,
        width: windowWidth * 0.9,
        height: 80,
        borderRadius: 15,
        position: 'absolute',
        bottom: windowHeight * 0.03,
        borderColor: '#d8d8d8',
        backgroundColor: '#f4f4f4',

    },
    multiplepho: {
        width: 50,
        height: 50,
        tintColor: 'black',
        alignSelf: 'center',
    },
    phone: {
        width: 20,
        height: 20,
        tintColor: '#d8d8df',
        alignSelf: 'center',
    },
    person: {
        width: 20,
        height: 20,
        alignSelf: 'center',
    },
    boton: {
        borderWidth: 3,
        width: windowWidth * 0.2,
        alignSelf: 'center',
        backgroundColor: '#f4f4f4',
        borderRadius: 5,
        borderColor: '#d8d8d8',
    },
    info: {
        alignContent: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: windowHeight * 0.225,
        width: windowWidth * 0.8,
        height: windowHeight * 0.16,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    plus: {
        position: 'absolute',
        width: 45,
        height: 45,
        top: windowHeight * 0.065,
        borderWidth: 3,
        borderRadius: 1000,
        alignSelf: 'flex-start',
        justifyContent: 'center',
        alignContent: 'center',
        borderColor: '#d8d8d8',
    },
    plus2: {
        position: 'absolute',
        width: 45,
        height: 45,
        bottom: windowHeight * 0.119,
        borderWidth: 3,
        borderRadius: 1000,
        alignSelf: 'flex-start',
        justifyContent: 'center',
        alignContent: 'center',
        borderColor: '#d8d8d8',
    },
    Contactos: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        top: windowHeight * 0.45,
        marginLeft: windowWidth * 0.05,
    },
    TextContact: {
        color: '#56b1b2',
        fontWeight: 'bold',
        fontSize: 25,
    },
    Logo: {
        position: 'absolute',
        width: windowWidth * 0.35,
        height: windowHeight * 0.09,
        top: 50,
    },
    contacto_An: {
        width: windowWidth * 0.9,
        marginBottom: 20,
        height: 45,
        backgroundColor: '#f4f4f4',
        borderWidth: 3,
        borderTopLeftRadius: 1250,
        borderBottomLeftRadius: 1100,
        borderTopRightRadius: 500,
        borderBottomRightRadius: 500,
        borderColor: '#d8d8d8',
        alignItems: 'center',
    },
    ana: {
        position: 'absolute',
        top: windowWidth * 0.5,

    },
    contacto_An_mod: {
        width: windowWidth * 0.8,
        marginBottom: 20,
        height: 45,
        backgroundColor: '#f4f4f4',
        borderWidth: 3,
        borderTopLeftRadius: 1250,
        borderBottomLeftRadius: 1100,
        borderTopRightRadius: 500,
        borderBottomRightRadius: 500,
        borderColor: '#d8d8d8',
        alignItems: 'center',
    },
    image: {
        width: windowWidth * 0.715,
        height: windowHeight * 0.046,
    },
});

export default Addcont;
