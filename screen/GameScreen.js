import {React, useState, useRef, useEffect} from 'react'
import { View, Text, Button, StyleSheet, Alert} from 'react-native';
import NumberContainer from '../components/numberContainer';

import Card from '../components/Card';
import {direction} from '../constants/constants';

const generateRandomBetween = (min, max, exclude) => {
    //El exclude es para que no le atinen en el primer turno
    min = Math.ceil(min);
    max = Math.floor(max);

    const randNum = Math.random() * (max - min) + min;
    const randNumFloored = Math.floor(randNum);

    if(randNumFloored === exclude){
        return generateRandomBetween(min, max, exclude);
    }
    else{
        randNumFloored;
    }
    return randNumFloored
}

const GameScreen = ({selectedNumber,onGameOver}) => {
    let currentRounds = 0
    const currentLow = useRef(1)
    const currentHigh = useRef(100)
    const [CurrentGuess, setCurrentGuess] = useState(generateRandomBetween(currentLow.current,currentHigh.current,selectedNumber))
    //currentHigh.current = 3 // Así se accede al valor de useRef.)

    const [rounds, setRounds] = useState(0)

    useEffect(() => {
      if(CurrentGuess === selectedNumber){
          onGameOver(rounds)
      }
    }, [CurrentGuess])
    

    const nextGuess = direction =>{
        console.log(selectedNumber, direction)
        if((direction === direction.higher && CurrentGuess > selectedNumber) ||
        (direction === direction.lower && CurrentGuess < selectedNumber)){
        //Alert('Pls don\t lie', 'You know that\'s wrond ', [{text: 'Sorry', style: 'cancel'}])
        alert('Pls don\'t lie')
        return
        }

        if(direction === direction.lower){
            currentHigh.current = CurrentGuess
        }
        else{
            currentLow.current = CurrentGuess;
        }
        
    const nextNum = generateRandomBetween(currentLow.current, currentHigh.current, CurrentGuess)
    setRounds(currentRounds => currentRounds + 1)
    setCurrentGuess(nextNum)

    if(CurrentGuess === selectedNumber){
        alert('You won!')
    }

    }

  return (
    <View style={styles.screen}>
        <Text>Computer Guess:</Text>
        <NumberContainer>{CurrentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
            <Button title='Lower' onPress={() => {nextGuess(direction.lower)}} />
            <Button title='Higher' onPress={() => {nextGuess(direction.higher)}} />
        </Card>
    </View>
  )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent: 'space-around',
        marginTop:20,
    }
})

export default GameScreen