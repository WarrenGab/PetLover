import * as React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert } from 'react-native';
import ConsultBox from '../components/ConsultBox'

const Consult = () => {
  return(
    <SafeAreaView style = {styles.container}>
      <View style={styles.consultWrapper}>
        <Text style={styles.sectionTitle}>Consultation Page</Text>
        <View style={styles.consult}>
          <ConsultBox text='drh. Anindha' />
          <ConsultBox text='drh. Anindha' />
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
    consultWrapper: {
      paddingTop: 20,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    consult: {
      marginTop: 30,
    }
});

export default Consult;