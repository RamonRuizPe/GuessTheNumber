import React from 'react'
import StartGameScreen from './StartGameScreen'
import GameScreen from './GameScreen'
import { View, Text, Button, StyleSheet, Alert} from 'react-native';

const GameOverScreen = ({rounds, onRestartGame}) => {
  return (
    <View style={styles.selectedContainer}>
        <Text>The game is over: </Text>
        <Text>It took you only {rounds} rounds            
        </Text>
        <Button title='Restart game' onPress={() => onRestartGame}></Button>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
    selectedContainer:{
        marginTop:20,
        alignItems: 'center',
        justifyContent:'center'
    },
    screen:{
        flex:1,
        padding: 10,
        alignItems: 'center',
    },
    title:{
        fontSize:20,
        marginVertical: 10,
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        shadowOpacity:.3,
        shadowRadius:6
    },
    button:{
        width:100
    },
    buttonContainer:{
        width:'100%',
        flexDirection:'row',
        marginVertical:10,
        justifyContent:'space-between',
        paddingHorizontal:15,
    },
    input:{
        height: 30,
        borderBottomColor:'grey',
        marginVertical:10,
        borderBottomWidth:1,
    }

});