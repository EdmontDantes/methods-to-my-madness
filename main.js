/******************
 * YOUR CODE HERE *
 ******************/
function slice (str, returnStrfromThatIndexNum, returnStrEmptyBeyondlengthOfStrNum) {
  if (str === true && typeof returnStrfromThatIndexNum === 'undefined' && typeof returnStrEmptyBeyondlengthOfStrNum === 'undefined') {
    return str;
  } else if (str && typeof returnStrfromThatIndexNum === 'number' && typeof returnStrEmptyBeyondlengthOfStrNum === 'undefined') {
    return str.substring(returnStrfromThatIndexNum); 
  } else if (str && typeof returnStrfromThatIndexNum === 'number' && typeof returnStrEmptyBeyondlengthOfStrNum === 'number') {
    return str.substring(returnStrfromThatIndexNum, returnStrEmptyBeyondlengthOfStrNum);
  } else {
    return str;
  }
  }

function repeat (str, repeatStrNum) {
let intermediateEmptyStr = '';
for (i = 0; i < repeatStrNum; i++) {
  intermediateEmptyStr = intermediateEmptyStr + str;
}
return intermediateEmptyStr;
}

function startsWith (firstGivenStr, secondGivenStr) {
//can tell whether the first given string starts with the second single-character string
//can tell whether the first given string starts with the second milti-character string
//can tell whether the first given string starts with the second given string when the strings are identical
    if (firstGivenStr === secondGivenStr) {
      return true;
    } else if (firstGivenStr.charAt(0) === secondGivenStr.charAt(0) && secondGivenStr.length === 1) {
      return true;
    } else if (firstGivenStr.charAt(0) === secondGivenStr.charAt(0) && secondGivenStr.length > 1 && firstGivenStr.charAt(1) === secondGivenStr.charAt(1)) {
        return true;
    } else {
      return false;
    }
}



function endsWith () {

}

function includes () {

}

function join () {

}

function split () {

}

function trimStart () {

}

function trimEnd () {

}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof slice === 'undefined') {
  slice = undefined;
}

if (typeof repeat === 'undefined') {
  repeat = undefined;
}

if (typeof startsWith === 'undefined') {
  startsWith = undefined;
}

if (typeof endsWith === 'undefined') {
  endsWith = undefined;
}

if (typeof includes === 'undefined') {
  includes = undefined;
}

if (typeof join === 'undefined') {
  join = undefined;
}

if (typeof split === 'undefined') {
  split = undefined;
}

if (typeof trimStart === 'undefined') {
  trimStart = undefined;
}

if (typeof trimEnd === 'undefined') {
  trimEnd = undefined;
}



module.exports = {
  slice,
  repeat,
  startsWith,
  endsWith,
  includes,
  join,
  split,
  trimStart,
  trimEnd,
}
