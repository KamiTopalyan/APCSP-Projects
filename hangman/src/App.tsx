import React, { useEffect } from 'react';
import './App.css';
import { limb, torso, head } from './assets/hangman';


function App() {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  const wordToGuess = 'HANGMAN';
  const [incorrectGuesses, setIncorrectGuesses] = React.useState<number>(0);
  const [guessedLetters, setGuessedLetters] = React.useState<string[]>([]);
  const [guessedWord, setGuessedWord] = React.useState<string>("_".repeat(wordToGuess.length));
  const [endState, setEndState] = React.useState<null | string>(null);

  useEffect(() => {
    if(incorrectGuesses >= 6) {
      setEndState("You Lose!");
    }
    if(guessedWord === wordToGuess) {
      setEndState("You Win!");
    }
  }, [incorrectGuesses, guessedLetters])
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (endState != null) return;
    if(guessedLetters.includes(e.currentTarget.value)) {
      console.log('already guessed')
      return;
    }
    if(wordToGuess.includes(e.currentTarget.value)) {
      e.currentTarget.style.backgroundColor = 'green';
      const newGuessedWord = guessedWord.split('');
      for(let i = 0; i < wordToGuess.length; i++) {
        if(wordToGuess[i] === e.currentTarget.value && newGuessedWord[i] === "_") {
          newGuessedWord[i] = e.currentTarget.value;
        }
      }
      setGuessedWord(newGuessedWord.join(''));
    } else {
      setIncorrectGuesses(incorrectGuesses + 1);
      e.currentTarget.style.backgroundColor = "red";
    }
    let newGuessedLetters = [...guessedLetters];
    newGuessedLetters.push(e.currentTarget.value);
    setGuessedLetters(newGuessedLetters);
  }

  return (
    <div className="App">
      <div className="hangman">
        <div style={{opacity: incorrectGuesses >= 1 ? 1 : 0}}className="hangman head">{head}</div>
        <div style={{opacity: incorrectGuesses >= 2 ? 1 : 0}}className="hangman torso">{torso}</div>
        <div style={{opacity: incorrectGuesses >= 3 ? 1 : 0}}className="hangman limbLeftArm">{limb}</div>
        <div style={{opacity: incorrectGuesses >= 4 ? 1 : 0}}className="hangman limbRightArm">{limb}</div>
        <div style={{opacity: incorrectGuesses >= 5 ? 1 : 0}}className="hangman limbLeftLeg">{limb}</div>
        <div style={{opacity: incorrectGuesses >= 6 ? 1 : 0}}className="hangman limbRightLeg">{limb}</div>
      </div>
      <div className='seperator'></div>
      <h1>{endState}</h1>
      <h1 style={{letterSpacing: "10px"}}>{guessedWord}</h1>
      <div className='keys'>
        {letters.map(letter => (
          <button onClick={handleClick} className='key' value={letter} key={letter}>{letter}</button>
        ))}
      </div>
      
    </div>
  );
}

export default App;
