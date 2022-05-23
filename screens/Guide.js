import * as React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert } from 'react-native';
import GuideBox from '../components/GuideBox'

const Guide = () => {
    return(
      <SafeAreaView style = {styles.container}>
        <View style={styles.guideWrapper}>
          <Text style={styles.sectionTitle}>Guide Page</Text>
          <View style={styles.guide}>
            <GuideBox text='Cara Merawat Anjing' />
            <GuideBox text='Cara Merawat Anjing' />
          </View>
        </View>
      </SafeAreaView>
    )
  }
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E2EFFC'
    },
    guideWrapper: {
      paddingTop: 20,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    guide: {
      marginTop: 30,
    }
});

export default Guide;