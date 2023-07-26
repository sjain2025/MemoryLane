import React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, Button, useWindowDimensions, ScrollView, TextInput } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import Audio1 from '../../assets/images/audio1.png';
import Audio2 from '../../assets/images/audio2.png';
import useSpeechToText, { ResultType } from '../StudentScreen/Hooks';
import * as ImagePicker from 'expo-image-picker'

const TodayScheduleScreen = () => {
  const navigation = useNavigation();
  const {control, watch} = useForm();
  const [image, setImage] = useState(null)

  const handleBack = () => {
    navigation.navigate('ChooseUser')
  }

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText
  } = useSpeechToText({
    continuous: true,
    crossBrowser: true,
    timeout: 3000,
    googleApiKey: process.env.REACT_APP_API_KEY,
    speechRecognitionProperties: { interimResults: true },
    useLegacyResults: false
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes : ImagePicker.MediaTypeOptions.Images,
      allowsEditing : true
    })

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  return (
    <View style={styles.root}>
      <br/>
      <Text style={styles.title}>Add an Entry</Text>
      <br/><br/><br/>
      
      <img width="300" height="300" style={{marginTop: '-5%'}} src={isRecording ? Audio2 : Audio1} onClick={isRecording ? stopSpeechToText : startSpeechToText}/>
      <ul style={{color: "white", listStyle: "none", fontFamily: "sans-serif", fontWeight: "bold", fontSize: "18px", marginLeft: '-7%', marginTop: '-1%', marginBottom: '2%'}}>
        {(results).map((result) => (
          <li key={result.timestamp}>{result.transcript}</li>
        ))}
        {interimResult && <li>{interimResult}</li>}
      </ul>

      <input placeholder="Key Phrase" style={{borderRadius: 25, height: 45, fontSize: 18, width: 275, marginTop: 24, textAlign: 'center', marginBottom: '5%'}}></input>

      {image && <Image source={{uri: image}} style={{width: 300, height: 300, marginBottom: '4%'}} />}
      <CustomButton text={"Select an Image"} onPress={pickImage} type="EXTRATHREE"/>
      <br/><br/>

      <br/>
      <CustomButton text={"Save"} onPress={handleBack} type="EXTRATWO"/>
      <br/>
      <CustomButton text={"Go Back"} onPress={handleBack} type="SECONDARY"/>
      <br/><br/><br/><br/>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2B2D42',
    height: "max",
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  text2: {
    marginTop: "10px",
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TodayScheduleScreen;