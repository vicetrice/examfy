import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AddPhoto = ({ navigation }) => {
    return (
        <View style={StyleSheet.container}>
            <Text>Add Photo</Text>
            <Button
                title='Click here'
                onPress={() => alert("Clicked")}
            />
        </View>

    );
}