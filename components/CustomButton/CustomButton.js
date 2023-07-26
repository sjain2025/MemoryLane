import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type = "PRIMARY", bgColor, fgColor}) => {
  return (
    <Pressable
        onPress={onPress}
        style={[
            styles.container,
            styles['container_' + type],
            bgColor ? {backgroundColor: bgColor} : {},
        ]}>
      <Text
        style={[
            styles.text,
            styles['text_' + type],
            fgColor ? {color : fgColor} : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    container_PRIMARY: {
        backgroundColor: '#ae9dbd',
        borderColor: "black",
        borderWidth: 1,
        marginTop: "15px",
    },
    container_SECONDARY: {
      borderColor: 'white',
      borderWidth: 2,
      width: "50%",
    },
    container_TERTIARY: {
      paddingBottom: "15px",
      paddingTop: "5px",
    },
    container_EXTRA: {
      borderColor: 'black',
      borderWidth: 1,
      backgroundColor: 'white',
      marginTop: "5px",
      paddingTop: "18px",
      paddingBottom: "22px",
      marginBottom: "15px",
      borderRadius: 25,
    },
    container_EXTRATWO: {
      borderColor: 'black',
      borderWidth: 1,
      backgroundColor: 'white',
      paddingTop: "10px",
      paddingBottom: "10px",
      marginBottom: "15px",
      width: "60%",
    },
    container_EXTRATHREE: {
      borderColor: 'white',
      borderWidth: 1,
      backgroundColor: '#1d3b80',
      paddingTop: "15px",
      paddingBottom: "15px",
      marginBottom: "15px",
      borderRadius: 25,
      width: "80%",
    },
    container_SCHEDULES: {
      borderColor: 'black',
      borderWidth: 1,
      backgroundColor: 'white',
      marginTop: "15px",
      paddingTop: "25px",
      paddingBottom: "25px",
      marginBottom: "15px",
      borderRadius: 25,
    },
    container_START: {
      backgroundColor: '#3871F3',
      borderColor: "black",
      borderWidth: 1,
      display: 'inline',
      padding: '30px',
      paddingTop: '15px',
      paddingBottom: '15px',
    },
    container_STOP: {
      backgroundColor: 'yellow',
      borderColor: "black",
      borderWidth: 1,
      display: 'inline',
      padding: '30px',
      paddingTop: '15px',
      paddingBottom: '15px',
    },
    container_SUBMIT: {
      backgroundColor: 'red',
      borderColor: "black",
      borderWidth: 1,
      paddingTop: '15px',
      paddingBottom: '15px',
      width: '45%'
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    text_PRIMARY: {
      fontSize: '18px',
      color: 'black',
    },
    text_SECONDARY: {
      color: 'white',
    },
    text_TERTIARY: {
        color: 'white',
        fontSize: '16px'
    },
    text_EXTRA: {
      color: 'black',
      fontSize: '27px',
    },
    text_EXTRATWO: {
      color: 'black',
      fontSize: '22px',
    },
    text_EXTRATHREE: {
      color: 'white',
      fontSize: '22px',
    },
    text_SCHEDULES: {
      color: 'black',
      fontSize: '22px',
    },
    text_START: {
      color: 'white',
      fontSize: '18px',
    },
    text_STOP: {
      color: 'black',
      fontSize: '18px',
    },
    text_SUBMIT: {
      color: 'black',
      fontSize: '18px',
    }
})

export default CustomButton