import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert } from 'react-native';

const ConsultBox = (props) => {
    return(
        <View style={styles.consult}>
            <View style={styles.item}>
                <Image source={require("../assets/doctor.png")} style = {styles.image}/>
                <Text>{props.text}</Text>
            </View>
            <View style={styles.contact}>
                <Button 
                    title='Hubungi'>
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    consult: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    image: {
        width: 90,
        height: 100,
        borderRadius: 5,
        marginRight: 15,
    },
    contact: {
        backgroundColor: '#E2EFFC',
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 50,
    },
});

export default ConsultBox;