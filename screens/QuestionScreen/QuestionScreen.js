import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Play from '../../assets/images/playaudio.png';
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import audio from '../../assets/questionAnswer.m4a';
import Image1 from '../../assets/images/hacktjpic.jpg';

const QuestionScreen = () => {
  const navigation = useNavigation()
  var a = new Audio(audio)

  const handleBack = () => {
    navigation.navigate('StudentScreen')
  }

  return (
    <View style={styles.root}>
      <br/>
      <Text style={styles.title}>Ask a Question</Text>
      <br/><br/>
      <Text style={styles.text2}>Q: "can you tell me about the time I went to hack TJ"</Text>
      <br/>
      <Text style={styles.text2}>Key Phrase: hack TJ</Text>
      <br/>
      <img src={Image1} height="300" width="400"/>
      <br/>
      <img width="300" height="280" src={Play} onClick={() => a.play()}/>
      <br/><br/>
      <CustomButton text={"Go Back"} onPress={handleBack} type="SECONDARY"/>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2B2D42',
    height: '150%',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    marginTop: "10px",
    fontSize: 20,
    color: 'white',
  },
  text2: {
    marginTop: "10px",
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 60,
    paddingRight: 60
  },
});

export default QuestionScreen;