var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('free-zipcode-database.csv')
});

// you need to supply CA zip codes to test validation. current list only validate US zip codes
lineReader.on('line', function (line) {
    var zipcode = line.replace(/\"/g, '').split(',')[1];
    var pattern = /(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$)/g;
    if(!pattern.test(zipcode)) {
        console.log('Line from file:', zipcode);
    }
});