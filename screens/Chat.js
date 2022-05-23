import React, {useState, useEffect, useCallback} from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert, FlatList } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { ScrollView } from 'react-native-gesture-handler';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../styles/MessageStyles';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Messages = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../assets/userprof.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, how are you doing today?',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../assets/userprof.jpg'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, wanna meetup this weekend?',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../assets/userprof.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, my brother.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../assets/userprof.jpg'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, do you see the news today?',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../assets/userprof.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there,	Mobile Platform & Application Development is the best course in ITB.',
  },
];

const Stack = createStackNavigator();

const ChatStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false,}}>
      <Stack.Screen name="Message Page" component={MessagesScreen} />
      <Stack.Screen name="Chat Page" component={ChatScreen} />
    </Stack.Navigator>
  );
}

const MessagesScreen = ({navigation}) => {
  return (
    <Container>
      <FlatList 
        data={Messages}
        keyExtractor={item=>item.id}
        renderItem={({item}) => (
          <Card onPress={() => navigation.navigate('Chat Page')}>
            <UserInfo>
              <UserImgWrapper>
                <UserImg source={item.userImg} />
              </UserImgWrapper>
              <TextSection>
                <UserInfoText>
                  <UserName>{item.userName}</UserName>
                  <PostTime>{item.messageTime}</PostTime>
                </UserInfoText>
                <MessageText>{item.messageText}</MessageText>
              </TextSection>
            </UserInfo>
          </Card>
        )}
      />
    </Container>
  );
};

const ChatScreen = (navigation) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'I am fine thankyou, how about you?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hello, how are you today?',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color="#2e64e5"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#2e64e5',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
    />
  )
};

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
});

export default ChatStack;