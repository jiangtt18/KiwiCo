import {comments} from './util.js';


let lists = document.getElementsByTagName('LI');
let ul = document.getElementsByTagName('UL');

ul[0].onclick = function(e){
  let id = e.target.id;
  insertPicAndComments(id);
};

function insertPicAndComments(id){
  let category = comments[id];
  let comment = category[0];
  let user = category[1];
  let imgUrl = category[2];
  let left = document.getElementsByClassName('left')[0];
  let right = document.getElementsByClassName('right')[0];

  left.innerHTML = '';
  right.innerHTML = '';

  let image = document.createElement('img');
  image.src = imgUrl;
  left.appendChild(image);

  let quote = document.createElement('q');
  quote.appendChild(document.createTextNode(comment));
  let name = document.createElement('p');
  name.appendChild(document.createTextNode(user));

  right.appendChild(quote);
  right.appendChild(name);
}
