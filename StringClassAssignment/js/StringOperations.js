
var findLengthBtn = document.getElementById("findLengthBtn");
findLengthBtn.onclick = function () {

    var inputString = document.getElementById("inputStringForLength");

    var result = document.getElementById("length");

    result.innerText ="Result : " +
    new StringExtention(inputString.value).length();
};


var concatinateBtn = document.getElementById("concatinateBtn");
concatinateBtn.onclick = function () {

    var firstValueForConcat = document.getElementById("firstValueForConcat");

    var secondValueForConcat = document.getElementById("secondValueForConcat");

    var concatinatedValue = document.getElementById("concatinatedValue");

    concatinatedValue.innerText =  "Result : " +
    new StringExtention(firstValueForConcat.value).concat(secondValueForConcat.value);
};

var charAtBtn = document.getElementById("charAtBtn");
charAtBtn.onclick = function () {
    var inputStringForCharAt = document.getElementById("inputStringForCharAt");

    var indexValueForCharAt = document.getElementById("indexValueForCharAt");

    var character = document.getElementById("character");
    
    character.innerText =  "Result : " + 
    new StringExtention(inputStringForCharAt.value).charAt(parseInt(indexValueForCharAt.value));
};

var indexOfBtn = document.getElementById("indexOfBtn");
indexOfBtn.onclick = function () {

    var firstValueForIndexOf = document.getElementById("firstValueForIndexOf");

    var secondValueForIndexOf = document.getElementById("secondValueForIndexOf");

    var firstIndex = document.getElementById("firstIndex");

    firstIndex.innerText =  "Result : " + 
    new StringExtention(firstValueForIndexOf.value).indexOf(secondValueForIndexOf.value);
};

var lastIndexOfBtn = document.getElementById("lastIndexOfBtn");
lastIndexOfBtn.onclick = function () {

    var firstValueForLastIndexOf = document.getElementById("firstValueForLastIndexOf");

    var secondValueForLastIndexOf = document.getElementById("secondValueForLastIndexOf");

    var lastFirstIndex = document.getElementById("lastFirstIndex");

    lastFirstIndex.innerText =  "Result : " + 
    new StringExtention(firstValueForLastIndexOf.value)
    .lastIndexOf(secondValueForLastIndexOf.value);
};

var subStringBtn = document.getElementById("subStringBtn");
subStringBtn.onclick = function () {

    var inputStringForSubstring = document.getElementById("inputStringForSubstring");

    var startIndexValueForSubstring = document.getElementById("startIndexValueForSubstring");
    var lastIndexValueForSubstring = document.getElementById("lastIndexValueForSubstring");

    var subString = document.getElementById("subString");

    subString.innerText =  "Result : " + 
    new StringExtention(inputStringForSubstring.value)
        .subString(parseInt(startIndexValueForSubstring.value), 
            parseInt(lastIndexValueForSubstring.value));
};

var replaceBtn = document.getElementById("replaceBtn");
replaceBtn.onclick = function () {
    var inputStringForReplaceString = document.getElementById("inputStringForReplaceString");

    var stringValueTobeReplaced = document.getElementById("stringValueTobeReplaced");
    var stringValueToReplace = document.getElementById("stringValueToReplace");

    var replacedString = document.getElementById("replacedString");

    replacedString.innerText =  "Result : " + 
    new StringExtention(inputStringForReplaceString.value)
        .replace(stringValueTobeReplaced.value, stringValueToReplace.value);
};