import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const AdoptBox = (props) => {
    return (
        <View style={styles.adopt}>
            <View style={styles.item}>
                <Text style={styles.title}>{props.text}</Text>
                <Image source={require("../assets/dog.png")} style={styles.image} />
                <Pressable style={styles.button} onPress={props.navigate}>
                    <Text styles={styles.text}>Detail</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    adopt: {
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    item: {
        flexDirection: 'column',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    title: {
        marginLeft: 8,
        fontSize: 16,
        lineHeight: 25,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        marginBottom: 6
    },
    image: {
        width: 90,
        height: 100,
        borderRadius: 5,
        marginRight: 15,
    },
    button: {
        backgroundColor: "#E2EFFC",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 26,
        borderRadius: 4,
        elevation: 3,
        margin: 8
    }
});

export default AdoptBox;