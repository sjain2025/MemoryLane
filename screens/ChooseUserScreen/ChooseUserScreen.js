import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton'
import CustomInput from '../../components/CustomInput/CustomInput';
import { auth } from '../../firebase'
import { useNavigation } from '@react-navigation/native'
import Logo from '../../assets/images/memory-lane-logo.png';

const ChooseUserScreen = () => {
  const navigation = useNavigation()
  const handleSignOut = () => {
      auth
        .signOut()
        .then(() => {
          location.reload()
        })
        .catch(error => alert(error.message))
  }

  const handleParent = () => {
    navigation.navigate('TodayScheduleScreen')
  }

  const handleMemories = () => {
    navigation.navigate('MemoriesScreen')
  }

  const handleStudent = () => {
    navigation.navigate('StudentScreen')
  }

  return (
      <View style = {styles.root}>
        <br/>
        <img width="345" height="122" src={Logo} />    
        <br/><br/><br/>
        <CustomButton text={"Add an Entry"} onPress={handleParent} type="EXTRA"/>
        <CustomButton text={"Ask a Question"} onPress={handleStudent} type="EXTRA"/>
        <CustomButton text={"A Memory a Day"} onPress={handleMemories} type="EXTRA"/>
        <br/>
        <CustomButton text="Sign Out" onPress={handleSignOut} type="SECONDARY"/>
      </View>
  );
};

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
});

export default ChooseUserScreen;