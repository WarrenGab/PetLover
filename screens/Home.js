import * as React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert } from 'react-native';
import FeatureBox from '../components/FeatureBox'
 

const Home = ({ navigation }) => {
    return (
      <SafeAreaView style = {styles.container}>
        <View>
          <Text style = {styles.title}>PET LOVER</Text>
        </View>
        <View style={styles.features}>
          <FeatureBox img={require("../assets/konsultasi.png")} navigate={() => navigation.navigate('Consultation Page')} txt="Konsultasi" />
          <FeatureBox img={require("../assets/panduan.png")} navigate={() => navigation.navigate('Guide Page')} txt="Panduan"/>
        </View>
        <View style={styles.features}>
          <FeatureBox img={require("../assets/adopsi.png")} navigate={() => navigation.navigate('Adoption Page')} txt="Adopsi" />
          <FeatureBox img={require("../assets/tespti.png")} navigate={() => navigation.navigate('PTI Test Start')} txt="Tes PTI"/>
        </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E2EFFC',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    title:{
      fontSize: 38,
      fontWeight: 'bold'
    },
    features:{
      flexDirection: "row",
      justifyContent: "space-evenly",
    }
  });

export default Home;