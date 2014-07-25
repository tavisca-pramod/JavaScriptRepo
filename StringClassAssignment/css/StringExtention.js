function StringExtention(value) {
    this.value = value;

    this.length = function () {
        var charCount = 0;
        for (i = 0; this.value[i] != undefined; i++) {
            charCount++;
        }

        return charCount;
    };

    this.concat = function (stringValueToConcat) {

        if (stringValueToConcat instanceof StringExtention) {
            return this.value + stringValueToConcat.value;
        }
        else {
            return this.value + stringValueToConcat;
        }
    };

    this.charAt = function (index) {

        index = isNaN(index) ? 1 : index;
        var result = this.value[index - 1];

        if (result === undefined) {
            result = "";
        }

        return result;
    };

    this.findFirstOrLastIndex = function (inputChar, last) {
        var result = -1;
        if (!(inputChar instanceof StringExtention)) {
            inputChar = new StringExtention(inputChar);
        }

        for (var i = 0; this.value[i] != undefined; i++) {
            if (inputChar.value[0] === this.value[i]) {
                result = i + 1;
                for (var j = 1; j < inputChar.length() ; j++) {
                    if (!(inputChar.value[j] === this.value[i + j])) {
                        result = -1;
                        break;
                    }
                }

                if ((result != -1) && !last) {
                    return result;
                }
            }

        }

        return result;
    }

    this.indexOf = function (inputChar) {

        return this.findFirstOrLastIndex(inputChar, false);
    };

    this.lastIndexOf = function (inputChar) {
        return this.findFirstOrLastIndex(inputChar, true);
    };


    this.subString = function (startIndex, toIndex) {
        var result = "";

        if (isNaN(startIndex)) {
            return this.value;
        }

        if (startIndex > toIndex) {
            startIndex = startIndex + toIndex;
            toIndex = startIndex - toIndex;
            startIndex = startIndex - toIndex;
        }

        toIndex = isNaN(toIndex) ? this.length() : toIndex;

        toIndex = (toIndex > this.length() ? this.length() : toIndex);

        while (startIndex < toIndex) {
            result = result + this.value[startIndex];
            startIndex++;
        }

        return result;
    };

    this.replace = function (subStringToBeReplaced, subStringToReplace) {
        var result = this.value;

        if (subStringToBeReplaced instanceof StringExtention) {
            subStringToBeReplaced = subStringToBeReplaced.value;
        }

        if (subStringToReplace instanceof StringExtention) {
            subStringToReplace = subStringToReplace.value;
        }


        var destinationStringFound = false;

        if (subStringToBeReplaced === "") {
            return result;
        }

        var oldStringExtention = new StringExtention(subStringToBeReplaced);

        var startIndexOfStringToBeReplaced = this.indexOf(oldStringExtention.value[0]);
        var lastIndexOfStringToBeReplaced = startIndexOfStringToBeReplaced
                                                + oldStringExtention.length() - 1;

        while (!destinationStringFound && (startIndexOfStringToBeReplaced != -1)) {
            var originalString = this.subString(startIndexOfStringToBeReplaced - 1, lastIndexOfStringToBeReplaced);

            if (originalString === subStringToBeReplaced) {
                result = this.subString(0, startIndexOfStringToBeReplaced - 1)
                        + subStringToReplace
                        + this.subString(lastIndexOfStringToBeReplaced, this.length());

                destinationStringFound = true;
            }

            var remainingString = new StringExtention(this.subString(startIndexOfStringToBeReplaced, this.length()));

            startIndexOfStringToBeReplaced = startIndexOfStringToBeReplaced
                                            + remainingString.indexOf(oldStringExtention.value[0]);
            lastIndexOfStringToBeReplaced = startIndexOfStringToBeReplaced
                                               + oldStringExtention.length() - 1;
        }

        return result;
    }

}


