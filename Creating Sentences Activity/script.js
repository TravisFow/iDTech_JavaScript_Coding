let words = ['This', 'Is', 'Javascript', 'Coding'];
let sentence = '';
let createSentence = (array) => {
  for(let i = 0; i <= array.length - 1; i++){
    sentence += ' ' + array[i]
  }
  return sentence
}
console.log(createSentence(words))