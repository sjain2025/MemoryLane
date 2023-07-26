import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button } from 'react-native';
import Logo from '../../assets/images/PersonIcon.png';
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'

const ParentScreen = () => {
  const [currentDate, setCurrentDate] = useState('')
  const navigation = useNavigation()
  const [image, setImage] = useState(null)

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

  const handleBack = () => {
    navigation.navigate('ChooseUser')
  }

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
      <Text style={styles.title}>Entries</Text>
      <br/>
      {image && <Image source={{uri: image}} style={{width: 300, height: 300}} />}
      <Button title="Images" onPress={pickImage}/>
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
    marginTop: "10px",
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

export default ParentScreen;