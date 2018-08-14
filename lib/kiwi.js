import {comments} from './util.js';


let c = document.getElementById('convenient');
click(c);

function click(button){
  button.onclick = function(){
    console.log(comments)
  };
}
function insertPicAndComments(){
  console.log('comments');
}
