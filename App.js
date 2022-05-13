import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameOverScreen from './screen/GameOverScreen';
import GameScreen from './screen/GameScreen';
import StartGameScreen from './screen/StartGameScreen';

export default function App() {

// //Promise
// const MyPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('2 seconds later.....')
//     resolve();
//   }, 2000);
// })

// MyPromise.then(() =>{
//   console.log('Promise has been resolved')
// }).catch(()=>{
//   //some error stuff
// })

// const endpoint = fetch('https://pokeapi.co/api/v2/pokemon/123')
// .then(response => response.json())
// .then(data => console.log('data', data))
// .then((response) => {
//   // console.log('response', response)
//   response.json().then(data =>{
//     console.log('data', data)
//     console.log('first', data.name)
//   })
// })

// const getSome = () =>{
//   return 'Yei'
// }
// const getSome2 = async () => {
//   return 'dope'
// }

// let a = getSome()
// let b = await getSome2()

const [selectedNumber, setselectedNumber] = useState(undefined)
const [numberOfGuesses, setnumberOfGuesses] = useState(0)

const gameOverHandler = (rounds) =>{
  setnumberOfGuesses(rounds)
}

const startGameHandler = (number) => {
  setselectedNumber(number);
}

const restartGame = () =>{
  setnumberOfGuesses(0)
  setselectedNumber(undefined)
}

let content = <StartGameScreen onStartGame={startGameHandler}></StartGameScreen>
    
    if(selectedNumber && numberOfGuesses === 0){
        content = <GameScreen
        selectedNumber={selectedNumber}
        onGameOver={gameOverHandler}></GameScreen>
    }else if(selectedNumber && numberOfGuesses > 0){
      content = <GameOverScreen rounds={numberOfGuesses} onRestartGame={restartGame}></GameOverScreen>
    }

// let content = <StartGameScreen onStartGame={startGameHandler}></StartGameScreen>
// if(selectedNumber){
//   content = <GameScreen></GameScreen>
// }

  return (
    <View style={styles.container}>
      <Header title={"Hello there"}></Header>
      {/* {selectedNumber === undefined && <StartGameScreen></StartGameScreen>}
      {selectedNumber !== undefined && <GameScreen></GameScreen>} */}
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
