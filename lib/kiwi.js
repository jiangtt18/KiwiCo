import {comments} from './util.js';


let lists = document.getElementsByTagName('LI');
let ul = document.getElementsByTagName('UL');

ul[0].onclick = function(e){
  let id = e.target.id;
  insertPicAndComments(id);
};

function insertPicAndComments(id){
  let category = comments[id];
  let left = document.getElementsByClassName('left')[0];
  let right = document.getElementsByClassName('right')[0];

  clearContent(left,right);
  createImage(category, left);
  createComments(category, right);
}


function clearContent(left, right){
  left.innerHTML = '';
  right.innerHTML = '';
}

function createImage(category,left){
  let imgUrl = category[2];
  let image = document.createElement('img');
  image.src = imgUrl;
  left.appendChild(image);
}

function createComments(category, right){
  let comment = category[0];
  let user = category[1];

  let c = comment.indexOf('sponge for STEM projects');
  // console.log(c);
  let before = comment.slice(0,2);
  let mid = comment.slice(2,8);
  let after = comment.slice(8);

  let quote = document.createElement('q');

  // quote.appendChild(document.createTextNode(comment));
  quote.appendChild(document.createTextNode(before));
  let s = document.createElement('strong');
  s.appendChild(document.createTextNode(mid));
  quote.appendChild(s);
  quote.appendChild(document.createTextNode(after));

  // console.log(quote.innerHTML[0]);

  let name = document.createElement('p');
  name.appendChild(document.createTextNode(user));

  right.appendChild(quote);
  right.appendChild(name);
}
