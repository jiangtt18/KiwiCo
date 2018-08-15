import {comments} from './util.js';


let lists = document.getElementsByTagName('LI');
let ul = document.getElementsByTagName('UL');

for(let i=0;i<lists.length;i++){
  lists[i].onmouseover = function(e){
    let id = e.currentTarget.id;
    changeSprint(id);
    insertPicAndComments(id);
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


function changeSprint(id){
  let className = `icon-${id}`;
  let div = document.getElementsByClassName(className)[0];


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

function createComments(category, right){
  let comment = category[0];
  let user = category[1];
  let boldWords = category[3];
  let boldIdx = [];

   for(let i = 0; i < boldWords.length; i++) {
     let boldword = boldWords[i];
     let start = comment.indexOf(boldword);
     let end = start + boldword.length;
     boldIdx.push([start,end]);
   }

  let quote = document.createElement('q');
  let nextBeforeIdx = 0;
   for(let i = 0; i < boldIdx.length;i++){
     let strongIdx= boldIdx[i];
     let before = comment.slice(nextBeforeIdx,strongIdx[0]);
     let boldparts = comment.slice(strongIdx[0], strongIdx[1]);
     nextBeforeIdx = strongIdx[1];

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
