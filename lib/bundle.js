/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(1);


let convenient = document.getElementById('convenient');
let lists = document.getElementsByTagName('LI');
let ul = document.getElementsByTagName('UL');

document.addEventListener('DOMContentLoaded', function () {
  selectDefault();
});

for (let i = 0; i < lists.length; i++) {
  onMouse(lists[i]);
  offMouse(lists[i]);
}

function onMouse(list) {
  list.onmouseover = function (e) {
    let id = e.currentTarget.id;
    if (id === 'convenient') {
      setDafaultColorAndBackground();
    } else {
      setSprint('convenient');
      removeDafaultColorAndBackground();
    }
    changeSprint(id);
    insertPicAndComments(id);
  };
}

function offMouse(list) {
  list.onmouseleave = function (e) {
    let id = e.currentTarget.id;
    if (id === 'convenient') {
      removeDafaultColorAndBackground();
    }
    setSprint(id);
  };
}

function insertPicAndComments(id) {
  let category = __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* comments */][id];
  let left = document.getElementsByClassName('left')[0];
  let right = document.getElementsByClassName('right')[0];

  clearContent(left, right);
  createImage(category, left);
  createComments(category, right);
}

function selectDefault() {
  changeSprint('convenient');
  setDafaultColorAndBackground();
  insertPicAndComments('convenient');
}

function setDafaultColorAndBackground() {
  convenient.style.backgroundColor = '#25BDBE';
  convenient.style.color = 'white';
}

function removeDafaultColorAndBackground() {
  convenient.style.backgroundColor = 'white';
  convenient.style.color = '#25BDBE';
}

function changeSprint(id) {
  let className = `icon-${id}`;
  let div = document.getElementsByClassName(className)[0];
  let originalX = div.style['background-position-x'];
  let originalY = div.style['background-position-y'];
  div.style.backgroundPosition = `${originalX} -20px`;
}

function setSprint(id) {
  let className = `icon-${id}`;
  let div = document.getElementsByClassName(className)[0];
  let originalX = div.style['background-position-x'];
  let originalY = div.style['background-position-y'];
  div.style.backgroundPosition = `${originalX} 5px`;
}

function clearContent(left, right) {
  left.innerHTML = '';
  right.innerHTML = '';
}

function createImage(category, left) {
  let imgUrl = category[2];
  let image = document.createElement('img');
  image.alt = 'a great image is coming';
  image.src = imgUrl;
  left.appendChild(image);
}

function findBoldIdx(boldWords, comment) {
  let boldIdx = [];
  for (let i = 0; i < boldWords.length; i++) {
    let boldword = boldWords[i];
    let start = comment.indexOf(boldword);
    let end = start + boldword.length;
    boldIdx.push([start, end]);
  }
  return boldIdx;
}

function createComments(category, right) {
  let comment = category[0];
  let user = category[1];
  let boldWords = category[3];
  let boldIdx = findBoldIdx(boldWords, comment);

  let quote = document.createElement('q');
  let nextBeforeIdx = 0; // track next index that does not needs to be bold

  // look for index of each bolded words in the comments;
  for (let i = 0; i < boldIdx.length; i++) {
    let strongIdx = boldIdx[i];
    let before = comment.slice(nextBeforeIdx, strongIdx[0]);
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

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// comments hash uses category as keyword and an array of related information as value;
// array[0] stores user comments;
// array[1] stores user name;
// array[2] stores image url if any;
// array[3] stores words needs to be bolded for style.


const comments = {
  convenient: ["I enjoy crafting with my daughter, but don't have the time to research the activities and buy all the supplies. I like that everything comes to my door and we can start an activity right away.", "Jane X, Koala Crate subscriber since 2016", "http://icdn.kiwicrate.com/site/home/why-kiwico-convenient.png", []],
  creativity: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ligula cursus nulla pellentesque rutrum. Aliquam mattis fermentum quam, vel auctor metus pulvinar et.", "", "", []],
  educational: ["My daughter is a sponge for STEM projects​ and this is the perfect solution to constantly searching for new things to keep her engaged.", "", "http://icdn.kiwicrate.com/site/home/why-kiwico-educational.jpg", ["sponge for STEM projects​"]],
  family: ["Mauris sodales ex vel ornare fermentum. Nulla luctus erat magna, eget efficitur mauris iaculis sed. Donec suscipit condimentum turpis, eget consectetur ipsum congue a. Suspendisse faucibus tincidunt nisl at porta. Aenean tempus rutrum ligula eu scelerisque.​ Cras elementum nisi vel felis lacinia, et volutpat leo scelerisque.", "", "", ["Mauris sodales ex vel ornare fermentum.", "rutrum ligula eu scelerisque."]],
  fun: ["Maecenas aliquam pellentesque velit et egestas. Aliquam ac tortor et nibh pretium pharetra!", "", "", []],
  alternative: ["Nam sodales nunc non gravida ornare. Sed in tincidunt urna. Nam fringilla, purus non commodo pretium, ex neque interdum lectus, ac egestas magna nisl sed arcu. Morbi elit enim, accumsan sed nunc non.", "Mattis mollis nisl", "", []]
};
/* harmony export (immutable) */ __webpack_exports__["a"] = comments;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map