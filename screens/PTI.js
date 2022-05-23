import * as React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Pressable } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { SectionList } from 'react-native-web';

const Stack = createStackNavigator();

const PTIStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false,}}>
      <Stack.Screen name="PTI Test Page 1" component={PTIStart} />
      <Stack.Screen name="PTI Test Page 2" component={PTI2} />
      <Stack.Screen name="PTI Test Page 3" component={PTI3} />
      <Stack.Screen name="PTI Test Page 4" component={PTI4} />
    </Stack.Navigator>
  );
}

const PTIStart = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          Ayo cari tau binatang peliharaan yang cocok untuk kamu!
        </Text>
        <View style={styles.fixToText}>
          <Pressable style={({pressed})=>[{backgroundColor: pressed ? 'gray' : 'white'}, styles.button]}
            onPress={() =>
              navigation.navigate('PTI Test Page 2')
            }
          >
            <Text>
              Lanjut
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const PTI2 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          Apa film tentang binatang favoritmu?
        </Text>
        <View>
          <Pressable style={({pressed})=>[{backgroundColor: pressed ? 'gray' : 'white'}, styles.button]}>
            <Text styles={styles.text}>Finding Nemo</Text>
          </Pressable>
          <Pressable style={({pressed})=>[{backgroundColor: pressed ? 'gray' : 'white'}, styles.button]}>
            <Text styles={styles.text}>Ratatouille</Text>
          </Pressable>
          <Pressable style={({pressed})=>[{backgroundColor: pressed ? 'gray' : 'white'}, styles.button]}>
            <Text styles={styles.text}>101 Dalmations</Text>
          </Pressable>
          <Pressable style={({pressed})=>[{backgroundColor: pressed ? 'gray' : 'white'}, styles.button]}>
            <Text styles={styles.text}>Airbud</Text>
          </Pressable>
          <Pressable style={({pressed})=>[{backgroundColor: pressed ? 'gray' : 'white'}, styles.button]}>
            <Text styles={styles.text}>The Secret Life of Pets</Text>
          </Pressable>
        </View>
        <View style={styles.fixToText}>
          <Pressable style={({pressed})=>[{backgroundColor: pressed ? 'gray' : 'white'}, styles.button]}
            onPress={() =>
              navigation.navigate('PTI Test Page 3')
            }
          >
            <Text>
              Lanjut
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const PTI3 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          Seberapa sering kamu berolahraga?
        </Text>
        <View style={styles.number}>
          <Pressable style={({pressed})=>[{backgroundColor: pressed ? 'gray' : 'white'}, styles.button2]}>
            <Text styles={styles.text}>1</Text>
          </Pressable>
          <Pressable style={({pressed})=>[{backgroundColor: pressed ? 'gray' : 'white'}, styles.button2]}>
            <Text styles={styles.text}>2</Text>
          </Pressable>
          <Pressable style={({pressed})=>[{backgroundColor: pressed ? 'gray' : 'white'}, styles.button2]}>
            <Text styles={styles.text}>3</Text>
          </Pressable>
          <Pressable style={({pressed})=>[{backgroundColor: pressed ? 'gray' : 'white'}, styles.button2]}>
            <Text styles={styles.text}>4</Text>
          </Pressable>
          <Pressable style={({pressed})=>[{backgroundColor: pressed ? 'gray' : 'white'}, styles.button2]}>
            <Text styles={styles.text}>5</Text>
          </Pressable>
        </View>
        <View >
          <Pressable style={({pressed})=>[{backgroundColor: pressed ? 'gray' : 'white'}, styles.button2]}
            onPress={() =>
              navigation.navigate('PTI Test Page 4')
            }
          >
            <Text>
              Lanjut
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const PTI4 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.result}>
          Yay!! 🎉🎉🎉 Hewan yang cocok dengan kamu adalah...
        </Text>
        <Text style={styles.result}>
          Anjing Puddle!!!
        </Text>
        <Image source={require("../assets/dog.png")} style={styles.image} />
        <View style={styles.result}>
          <Pressable style={({pressed})=>[{backgroundColor: pressed ? 'gray' : 'white'}, styles.button3]}
            onPress={() =>
              navigation.navigate('Home Page')
            }
          >
            <Text>
              Kembali ke Home
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2EFFC',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    display:'flex',
    flexDirection: 'row',
  },
  logo: {
    width: 200,
    height: 200,
  },
  feature: {
    width: 50,
    height: 50,
    justifyContent: 'space-evenly',
  },
  title: {
    textAlign: 'left',
    marginVertical: 8,
    fontSize: 20
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: "60%",
    height: undefined,
    aspectRatio: 96 / 87,
    alignSelf: 'center'
  },
  result: {
    textAlign: 'center', 
    marginVertical: 8,
    fontSize: 20
  },
  button: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 4,
    elevation: 3,
    margin: 10,
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
    margin: 10,
    alignSelf: 'flex-start',
  },
  button3: {
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 4,
    elevation: 3,
    margin: 10,
    alignSelf: 'center',
  },
});


export default PTIStack;