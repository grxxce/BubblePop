// This is the line that is causing the error "Uncaught SyntaxError: Cannot use import statement outside a module"
// import { doc, setDoc } from "@firebase/firestore"; 
// import config from './config.js';
// database = config.firebaseApp.getDatabase;

const bias = document.getElementById('bias');
const position = document.getElementById('position');
const article = document.getElementById('article');
const button = document.getElementById('button');

const div = document.querySelector('.moji');
const mojis = ['😄', '🙂', '😐', '😑', '🙁', '😩', '😤', '😠', '😡', '🤢', '💩'];

var biasVal = 0;
var posVal = 0;
var url = '';

bias.addEventListener('input', (e) => {
  biasVal = e.target.value;
  div.textContent = mojis[biasVal];
});

position.addEventListener('input', (e) => {
  posVal = e.target.value;
});

article.addEventListener('input', (e) => {
  url = e.target.value;
});

button.addEventListener('click', (e) => {
  console.log(biasVal, posVal, url);
  document.location.href = './main.html';

  // Submit bias, position, and urls to database
  // await setDoc(doc(db, biasVal, posVal, url), {
  //   bias: biasVal,
  //   position: posVal,
  //   article: url
  // });
});
