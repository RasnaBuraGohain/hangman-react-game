Finish this hangman game



- figure out what to put in the state object
    - whats the word?
    - what have i guessed already?
    - how many guesses left?

- in the render method, add a button which add a guess
  (eg `<button onClick={???}>A</button>`)

- move this button into a renderInputButton(letter) {} method

```
  class App ... {
    ...
    renderInputButton(letter) {
      return <button onClick=...>{letter}</button>
    } 
  }
```

- in the map render() function, render a button for every
  letter of the alphabet:

```
  class App ... {
    ...
    render() {
      ...
      'abcdefghijklmnopqrstuvwxyz'.split('').map(this.renderInputButton)
      ...
    }
  }
```

- when you have won, display a congratulatory message

- when you are dead, don't render the buttons, but render the solution.
