import {comments} from './util.js';

let convenient = document.getElementById('convenient');
let lists = document.getElementsByTagName('LI');
let ul = document.getElementsByTagName('UL');

document.addEventListener('DOMContentLoaded', function(){
  selectDefault();
});


for(let i=0;i<lists.length;i++){
  onMouse(lists[i]);
  offMouse(lists[i]);
}

function onMouse(list){
  list.onmouseover = function(e){
    let id = e.currentTarget.id;
    if(id === 'convenient'){
      setDafaultColorAndBackground();
    } else {
      setSprint('convenient');
      removeDafaultColorAndBackground();
    }
    changeSprint(id);
    insertPicAndComments(id);
  };
}

function offMouse(list){
  list.onmouseleave = function(e){
    let id = e.currentTarget.id;
    if(id === 'convenient'){
      removeDafaultColorAndBackground();
    }
    setSprint(id);
  };
}

function insertPicAndComments(id){
  let category = comments[id];
  let left = document.getElementsByClassName('left')[0];
  let right = document.getElementsByClassName('right')[0];

  clearContent(left,right);
  createImage(category, left);
  createComments(category, right);
}

function selectDefault(){
  changeSprint('convenient');
  setDafaultColorAndBackground();
  insertPicAndComments('convenient');
}

function setDafaultColorAndBackground(){
  convenient.style.backgroundColor = '#25BDBE';
  convenient.style.color = 'white';
}

function removeDafaultColorAndBackground(){
  convenient.style.backgroundColor = 'white';
  convenient.style.color = '#25BDBE';
}


function changeSprint(id){
  let className = `icon-${id}`;
  let div = document.getElementsByClassName(className)[0];
  let originalX = div.style['background-position-x'];
  let originalY = div.style['background-position-y'];
  div.style.backgroundPosition = `${originalX} -20px`;
}

function setSprint(id){
  let className = `icon-${id}`;
  let div = document.getElementsByClassName(className)[0];
  let originalX = div.style['background-position-x'];
  let originalY = div.style['background-position-y'];
  div.style.backgroundPosition = `${originalX} 5px`;
}

function clearContent(left, right){
  left.innerHTML = '';
  right.innerHTML = '';
}

function createImage(category,left){
  let imgUrl = category[2];
  let image = document.createElement('img');
  image.alt = 'a great image is coming';
  image.src = imgUrl;
  left.appendChild(image);
}

function findBoldIdx(boldWords,comment){
  let boldIdx = [];
  for(let i = 0; i < boldWords.length; i++) {
    let boldword = boldWords[i];
    let start = comment.indexOf(boldword);
    let end = start + boldword.length;
    boldIdx.push([start,end]);
  }
  return boldIdx;
}

function createComments(category, right){
  let comment = category[0];
  let user = category[1];
  let boldWords = category[3];
  let boldIdx = findBoldIdx(boldWords,comment);

  let quote = document.createElement('q');
  let nextBeforeIdx = 0; // track next index that does not needs to be bold

  // look for index of each bolded words in the comments;
  for(let i = 0; i < boldIdx.length;i++){
    let strongIdx= boldIdx[i];
    let before = comment.slice(nextBeforeIdx,strongIdx[0]);
    let boldparts = comment.slice(strongIdx[0], strongIdx[1]);
    nextBeforeIdx = strongIdx[1];

  // create bold inline style for bolded words
   quote.appendChild(document.createTextNode(before));
   let s = document.createElement('strong');
   s.appendChild(document.createTextNode(boldparts));
   quote.appendChild(s);
   }

  let last = comment.slice(nextBeforeIdx);
  quote.appendChild(document.createTextNode(last));

  let name = document.createElement('p');
  name.appendChild(document.createTextNode(user));

  right.appendChild(quote);
  right.appendChild(name);
}
