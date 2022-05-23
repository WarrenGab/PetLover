import * as React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import AdoptBox from '../components/AdoptBox'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { ScrollView } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const AdoptStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false,}}>
      <Stack.Screen name="Adopt Page" component={Adopt} />
      <Stack.Screen name="Adopt Detail Page" component={AdoptDetail} />
    </Stack.Navigator>
  );
}

const Adopt = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.adoptWrapper}>
        <Text style={styles.sectionTitle}>Adoption Page</Text>
        <View style={styles.adopt}>
          <AdoptBox text='Pudel' navigate={() => navigation.navigate('Adopt Detail Page')} />
          <AdoptBox text='Pudel' navigate={() => navigation.navigate('Adopt Detail Page')} />
        </View>
      </View>
    </SafeAreaView>
  )
}

const AdoptDetail = ({ navigation }) => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.detailContainer}>
        <Text style={styles.detailTitle}>Boo</Text>
        <Image source={require("../assets/dog.png")} style={styles.image} />
        <View style={styles.detailBox}>
          <Text style={styles.text}>Pudel</Text>
          <Text style={styles.text}>Bandung</Text>
          <Text style={styles.text}>2 tahun</Text>
          <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac mollis ante. In lacinia scelerisque enim, laoreet euismod nulla dapibus vel. In malesuada, urna non sagittis posuere, nibh ligula vulputate enim, in egestas ipsum velit ornare felis. Mauris auctor cursus risus, sed euismod sapien ultricies et.</Text>
        </View>
        <View>
          <Pressable style={styles.button} onPress={() => Alert.alert('Boo telah diadopsi!')}>
            <Text styles={styles.text}>Adopsi</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => Alert.alert('Ditambahkan ke Wishlist!')}>
            <Text styles={styles.text}>Tambah Wishlist</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2EFFC'
  },
  adoptWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  adopt: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  detailContainer: {
    width: "80%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10
  },
  detailBox: {
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid"
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: "#E2EFFC",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    margin: 4
  },
  text: {
    marginLeft: 8,
    fontSize: 16,
    lineHeight: 25,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  desc: {
    margin: 8,
    fontSize: 12,
    lineHeight: 21,
    letterSpacing: 0.25,
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 96 / 87
  }
});

export default AdoptStack;