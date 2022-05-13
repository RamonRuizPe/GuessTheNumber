import {React, useState} from 'react'
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native'

import Card from '../components/Card';
import colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/numberContainer';
import { useFetchPokemon } from '../hooks/useFetchPokemon';

import {globalIndex as limit} from '../constants/constants'


const StartGameScreen = ({onStartGame}) => {
    const [EnteredValue, setEnteredValue] = useState('');
    const [Confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setselectedNumber] = useState(undefined);
    const [Name, setName] = useState('')
    const [Img, setImg] = useState('')
    const [Types, setTypes] = useState([])

    const numberInputHandler = input =>{
        setEnteredValue(input.replace(/[^0-9]/g,''))
    }

    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)    
    }

    const ConfirmInputHandler = () => {
        const chosenNumber = parseInt(EnteredValue)
        if(isNaN(chosenNumber) || chosenNumber <= limit.MIN_INDEX || chosenNumber > limit.MAX_INDEX) return
        setConfirmed(true)
        setselectedNumber(chosenNumber)
        setEnteredValue('')
        setPokemon()
    }

    const setPokemon = async () =>{
        const [name, img, types] = await useFetchPokemon(EnteredValue);
        setName(name)
        setImg(img)
        setTypes(types)
        console.log(img)
        console.log(types)
    }
    let confirmedOutput;

    if(Confirmed){
        confirmedOutput = (
        <Card style={styles.selectedContainer}>
            {/* <Text>You selected:</Text>
            <NumberContainer>{selectedNumber}</NumberContainer> */}
            <Text style={styles.pokemon}>{Name}</Text>
            <Image 
            style={styles.img}
            source={{
                uri: `${Img}`,
            }}></Image>
            <Text style={styles.pokemon}>{(Types.length > 1) ? Types[0] + " " + Types[1] : Types[0]}</Text>
            <Button
                title='Ready to start game?'
                onPress={() => onStartGame(selectedNumber)}
            ></Button>
        </Card>
        )
    }
  return (
      <View style={styles.screen}>
          <Card>
          <Text style={styles.title}>Select a Number</Text>
            <Input
            style={styles.input}
            blurOnSubmit//android
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={3}
            onChangeText={numberInputHandler}
            value={EnteredValue}
            >
            </Input>
          <View style={styles.buttonContainer}>
            <Button style={styles.button}
             title="Reset"
             color={colors.secundary}
             onPress={resetInputHandler}></Button>
            <Button style={styles.button}
             title="Confirm"
             color={colors.primary}
             onPress={ConfirmInputHandler}></Button>
          </View>
          </Card>
          {confirmedOutput}
      </View>
  )
}

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
    },
    img:{
        width: 100,
        height: 100
    },
    pokemon:{
        fontSize: 16,
    }

});

export default StartGameScreen