const input = document.getElementById('text_input');
const wordResult = document.getElementById('words');
const sentenceResult = document.getElementById('sentences');

function count(){
  let wordCount = input.value.split(' ').length;
  let sentenceCount = input.value.split('.').length;
  wordResult.innerText = 'Words: ' + wordCount;
  sentenceResult.innerText = 'Sentences: ' + (sentenceCount-1);
}
