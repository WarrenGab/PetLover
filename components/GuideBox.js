import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert } from 'react-native';

const GuideBox = (props) => {
    return(
        <View style={styles.guide}>
            <View style={styles.item}>
            <Image source={require("../assets/dog.png")} style = {styles.image}/>
            <Button 
                title={props.text}> 
            </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    guide: {
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
        flexWrap: 'wrap'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 15,
      },
});

export default GuideBox;