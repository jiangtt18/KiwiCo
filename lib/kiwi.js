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

  let quote = document.createElement('q');
  quote.appendChild(document.createTextNode(comment));
  let name = document.createElement('p');
  name.appendChild(document.createTextNode(user));

  right.appendChild(quote);
  right.appendChild(name);
}
