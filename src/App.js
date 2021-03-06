import React, { PureComponent } from 'react';
import Hangman from './Hangman';
import { done, randomWord, renderWord } from './words';
import './Style.css';
import Image from './Image.gif';
import Footer from './Footer.js';

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
      word: randomWord(),
      guesses: []
    }
  }


  render() {
    const {
      progress,
      word,
      guesses
    } = this.state

    if (done(word, guesses)) {
      return (
        <main>
          <h1>You Won!</h1>
          <div><img src={Image} title="Jim" alt="Jim Carrey Dancing" /></div>
          <div>
            <button className="donebutton" onClick={(done) => this.setState({
              progress: 0,
              word: randomWord(),
              guesses: [],
            })}>
              LET'S PLAY AGAIN
          </button>
          </div>
          <div>
            <Footer />
          </div>
        </main>
      )
    }

    return (
      <main>
        <h1>Hangman Game</h1>
        <div>
          <div className="word">
            {/* This is how we render the hanging man */}
            <Hangman progress={progress} />
          </div>

          <div>
            <input type='text' value={renderWord(word, guesses)} />
          </div>
          <div className="alphabets">
            {'abcdefghijklmnopqrstuvwxyz-'.split('').map(letter => this.renderInputButton(letter))}
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </main>
    )
  }
  renderInputButton(letter) {
    const {
      progress,
      guesses,
      word,

    } = this.state

    return (
      <button onClick={() => this.setState({
        guesses: [letter, ...guesses],
        progress: word.indexOf(letter) > -1 ? progress : progress + 1,
      })}>
        {letter}
      </button>
    )
  }

}

export default App;
