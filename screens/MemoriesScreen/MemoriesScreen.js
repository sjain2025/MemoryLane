import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Image } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'
import Image1 from '../../assets/images/image1.png';
import Image2 from '../../assets/images/image2.png';
import Image3 from '../../assets/images/image3.png';
import audio from '../../assets/audio.m4a';

const MemoriesScreen = () => {
  const [currentDate, setCurrentDate] = useState('')
  const [image, setImage] = useState(null)
  const navigation = useNavigation()
  var rand = Math.floor(Math.random() * 2) + 1
  var a = new Audio(audio)

  useEffect(() => {
    var date = new Date().getDate()
    var month = new Date().getMonth() + 1
    var year = new Date().getFullYear()
    setCurrentDate(
      month + '/' + date
    )
    return () => {}
  }, [])

  const handlePrevious = () => {
    navigation.navigate('PreviousScheduleScreen')
  }

  const handleToday = () => {
    navigation.navigate('TodayScheduleScreen')
  }

  const handleBack = async () => {
    try {
      await recording.current.stopAndUnloadAsync();
      console.log('Recording stopped');
    } catch (error) {
      console.log('Failed to stop recording', error);
    }
    navigation.navigate('ChooseUser')
  }

  return (
    <View style={styles.root}>
      <br/>
      <Text style={styles.title}>A Memory A Day</Text>
      <br/><br/><br/>
      <Image source={Image2} style={{width: 350, height: 275}} />
      <Text style={styles.text}>Date: July 19, 2017</Text>
      <CustomButton text={"Listen to Audio"} onPress={() => a.play()} type="PRIMARY"/>
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
    height: '100%',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    marginTop: "20px",
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  text2: {
    marginTop: "10px",
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MemoriesScreen;