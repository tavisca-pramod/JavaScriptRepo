function findLength() {
    var inputString = document.getElementById("stringToOperate");

    var resultLabel = document.getElementById("result");

    resultLabel.value = new StringExtention(inputString.value).length();
};

function getConcatinatedString() {

    var originalString = document.getElementById("stringToOperate");

    var stringToConcat = document.getElementById("firstInput");

    var resultLabel = document.getElementById("result");

    resultLabel.value = new StringExtention(originalString.value).concat(stringToConcat.value);
};

function getCharacterByIndex() {

    var originalString = document.getElementById("stringToOperate");

    var indexPosition = document.getElementById("firstInput");

    var resultLabel = document.getElementById("result");

    resultLabel.value = new StringExtention(originalString.value).charAt(parseInt(indexPosition.value));
};

function getIndexOf() {

    var originalString = document.getElementById("stringToOperate");

    var inputCharacter = document.getElementById("firstInput");

    var resultLabel = document.getElementById("result");

    resultLabel.value = new StringExtention(originalString.value).indexOf(inputCharacter.value);
};

function getLastIndexOf() {

    var originalString = document.getElementById("stringToOperate");

    var inputCharacter = document.getElementById("firstInput");

    var resultLabel = document.getElementById("result");

    resultLabel.value = new StringExtention(originalString.value)
        .lastIndexOf(inputCharacter.value);
};

function getSubString() {

    var originalString = document.getElementById("stringToOperate");

    var startIndex = document.getElementById("firstInput");
    var toIndex = document.getElementById("secondInput");

    var resultLabel = document.getElementById("result");

    resultLabel.value = new StringExtention(originalString.value)
        .subString(parseInt(startIndex.value), parseInt(toIndex.value));
};

function getReplacedString() {

    var originalString = document.getElementById("stringToOperate");

    var stringTobeReplaced = document.getElementById("firstInput");
    var stringToReplace = document.getElementById("secondInput");

    var resultLabel = document.getElementById("result");

    resultLabel.value = new StringExtention(originalString.value)
        .replace(stringTobeReplaced.value, stringToReplace.value);
};

function clearAll() {
    document.getElementById("stringToOperate").value = "";
    document.getElementById("firstInput").value = "";
    document.getElementById("secondInput").value = "";
    document.getElementById("result").value = "";
}