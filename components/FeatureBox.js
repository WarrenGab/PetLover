import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const FeatureBox = (props) => {
    return (
        <View style={styles.box}>
            <View style={styles.item}>
            <Image source={props.img} style={styles.image} />
            <Pressable style={styles.button} onPress={props.navigate}>
                <Text styles={styles.text}>{props.txt}</Text>
            </Pressable>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    box:{
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    item: {
        flexDirection: 'column',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: 5
    },
    image:{
        width: 90,
        height: 90,
    },
    button: {
        backgroundColor: "#FFF",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 26,
        borderRadius: 4,
        elevation: 3,
        margin: 10
    }
});

export default FeatureBox;

