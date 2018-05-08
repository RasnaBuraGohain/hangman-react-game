import React, { PureComponent } from 'react';
import Hangman from './Hangman';
import { done, randomWord, renderWord } from './words';

// This shows you how to use the functions in words.js:
/*
const word = randomWord()
const guesses = ['a', 'e', 'i', 'o', 'u', 't', 'n']
console.log(word, guesses, renderWord(word, guesses), done(word, guesses))
*/

class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      progress: 0,
    }
  }

  render() {
    const {
      progress,
    } = this.state

    return (
      <div>
        <div>
          {/* This is how we render the hanging man */}
          <Hangman progress={progress} />
        </div>

        <button onClick={() => this.setState({ progress: progress + 1 })}>
          Hang The Man !
        </button>
      </div>
    )
  }
}

export default App;
