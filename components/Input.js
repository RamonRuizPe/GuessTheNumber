import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const Input = (props) => {
  return <TextInput
  {...props} 
  style={[styles.input, props.style]}></TextInput>
}

const styles = StyleSheet.create({
    input:{
        height: 30,
        alignItems:'center',
        borderBottomColor:'grey',
        marginVertical:10,
        borderBottomWidth:1,
    }
})

export default Input

