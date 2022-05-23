import * as React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert } from 'react-native';

const Profile = () => {
  return (
    <SafeAreaView style={styles.center}>
      <Text style={styles.edit}>Ubah</Text>
      <Image source={require("../assets/profile.png")} style={styles.image} />
      <View style={styles.info}>
        <View style={styles.subinfo}>
          <Text style={styles.upper}>Nama</Text>
          <Text style={styles.lower}>Warren Gabriel</Text>
        </View>
        <View style={styles.subinfo}>
          <Text style={styles.upper}>Nomor Telepon</Text>
          <Text style={styles.lower}>08123456789</Text>
        </View>
        <View style={styles.subinfo}>
          <Text style={styles.upper}>Alamat</Text>
          <Text style={styles.lower}>Jln. Wayang, Jakarta Barat</Text>
        </View>
        <View style={styles.subinfo}>
          <Text style={styles.upper}>Email</Text>
          <Text style={styles.lower}>warren21@gmail.com</Text>
        </View>
        <View style={styles.subinfo}>
          <Text style={styles.upper}>Password</Text>
          <Text style={styles.lower}>***********</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: '#E2EFFC'
  },
  edit: {
    textAlign: "right",
    lineHeight: 25,
    fontWeight: "bold",
    fontSize: 20,
    margin: 10
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10
  },
  info: {
    lineHeight: 25
  },
  subinfo: {
    lineHeight: 25,
    marginVertical: 4
  },
  upper: {
    fontSize: 16,
    color: "grey",
    lineHeight: 25
  },
  lower: {
    fontSize: 20,
    lineHeight: 25
  }
});

export default Profile;