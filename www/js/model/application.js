"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var boardBgLetterValue = [1, 2, 3, 1, 1, 1];
var boardBgWordValue = [1, 1, 1, 2, 3, 2];
var boardBg = [2, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 2, 0, 1, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 1, 0, 4, 0, 2, 0, 0, 0, 1, 0, 1, 0, 0, 0, 2, 0, 4, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 3, 0, 1, 0, 0, 5, 0, 0, 1, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 4, 0, 2, 0, 0, 0, 1, 0, 1, 0, 0, 0, 2, 0, 4, 0, 1, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 1, 0, 2, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 2];
var letterValues = window.letterValues;

var Application =

//0= normal tile, 1=doule letter, 2=triple letter, 3=double word, 4=triple word
//5= star
function Application() {
  _classCallCheck(this, Application);

  this.games = [];
};
