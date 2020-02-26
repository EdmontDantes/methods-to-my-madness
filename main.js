/******************
 * YOUR CODE HERE *
 ******************/
function slice (str, returnStrfromThatIndexNum, returnStrEmptyBeyondlengthOfStrNum) {
  if (str !== undefined && typeof returnStrfromThatIndexNum === 'undefined' && typeof returnStrEmptyBeyondlengthOfStrNum === 'undefined') {
    return str;
  } else if (str && typeof returnStrfromThatIndexNum === 'number' && typeof returnStrEmptyBeyondlengthOfStrNum === 'undefined') {
    return str.substring(returnStrfromThatIndexNum); 
  } else if (str && typeof returnStrfromThatIndexNum === 'number' && typeof returnStrEmptyBeyondlengthOfStrNum === 'number') {
    return str.substring(returnStrfromThatIndexNum, returnStrEmptyBeyondlengthOfStrNum);
  } else {
    return str;
  }
  }
/*

function includes (arr, hold){
  for (let i = 0; i < arr.length; i ++){
    if(arr[i] === hold){
      return true;}
  }
return false;
} 
*/
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
    } else if (firstGivenStr.charAt(0) === secondGivenStr.charAt(0)
    && secondGivenStr.length === 1) {
      return true;
    } else if (firstGivenStr.charAt(0) === secondGivenStr.charAt(0)
    && secondGivenStr.length > 1
    && firstGivenStr.charAt(1) === secondGivenStr.charAt(1)) {
        return true;
    } else {
      return false;
    }
}



function endsWith (firstGivenStr, secondGivenStr) {
  for (let i =  0; i < secondGivenStr.length - 1; i++) {
    if (firstGivenStr.charAt(i) === secondGivenStr.charAt(i)
    && firstGivenStr.charAt(firstGivenStr.length - 1) === secondGivenStr.charAt(secondGivenStr.length - 1)) {
      return true;
    } else {
      return false;
    }
  }  
  if (firstGivenStr === secondGivenStr) {
      return true;
    } else if (firstGivenStr.charAt(firstGivenStr.length-1) === secondGivenStr.charAt(0) 
    && secondGivenStr.length === 1) {
      return true;
    // } else if (firstGivenStr.charAt(firstGivenStr.length-1) === secondGivenStr.charAt(firstGivenStr.length-1)
    // && firstGivenStr.charAt(firstGivenStr.length-2) === secondGivenStr.charAt(firstGivenStr.length-2) 
    // && firstGivenStr.charAt(firstGivenStr.length-3) === secondGivenStr.charAt(firstGivenStr.length-3)
    // && secondGivenStr.length > 1) {
    //   return true;
    } else {
      return false;
    }
    }
    


function includes (array, GivenItem) {
for (let i = 0; i < array.length; i++) {
  if (array[i] === GivenItem) {
    return true;
  }
} return false;
}

function join (strArray, mightySeparator) {
  let emptyStr = '';
  for (let i = 0; i < strArray.length; i++) {
    if (mightySeparator && i !== strArray.length-1) {
      emptyStr += strArray[i] + mightySeparator;
    } else {
      emptyStr += strArray[i];
    }
  }
  return emptyStr;
}


function split (str, mightySeparator) {
  const emptyArray = [];
  if (str !== undefined && mightySeparator === undefined) {
    emptyArray.push(str);

    return emptyArray;
  }

  for (let i = 0; i < str.length; i++) {
  }

  return emptyArray;
}

split('hello')


function trimStart (str) {

}

function trimEnd (str) {

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
