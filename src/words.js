import words from './longwords.json'

// you don't need to edit this file.

export const randomWord = () => {
  const idx = Math.floor(Math.random() * words.length)
  return words[idx]
}

export const renderWord = (word, guesses) => {
  return word
    .split('')
    .map(letter => guesses.indexOf(letter) > -1 ? letter : '_')
    .join('')
}

export const done = (word, guesses) => {
  return word === renderWord(word, guesses)
}
