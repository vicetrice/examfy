import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AddPhoto = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Add Photo</Text>
            <Button
                title='Click here'
                onPress={() => alert("Clicked")}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AddPhoto;