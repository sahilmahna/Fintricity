var Roman = {
    4000: 'MMMM',
    3000: 'MMM',
    2000: 'MM',
    1000: 'M',
    900: 'CM',
    800: 'DCCC',
    700: 'DCC',
    600: 'DC',
    500: 'D',
    400: 'CD',
    300: 'CCC',
    200: 'CC',
    100: 'C',
    90: 'XC',
    80: 'LXXX',
    70: 'LXX',
    60: 'LX',
    50: 'L',
    40: 'XL',
    30: 'XXX',
    20: 'XX',
    10: 'X',
    9: 'IX',
    8: 'VIII',
    7: 'VII',
    6: 'VI',
    5: 'V',
    4: 'IV',
    3: 'III',
    2: 'II',
    1: 'I',
}


var input = process.argv[2];
if (isNaN(input)) {
    console.log("Enter a valid number")
} else
    numToRoman(input);

function numToRoman(input) {
    var temp = parseInt(input);
    var romen = "";
    var keys = Object.keys(Roman);
    for (var i = Object.keys(Roman).length - 1; i >= 0; i--) {
        while (temp >= keys[i]) {
            temp -= keys[i];
            romen = romen + Roman[keys[i]];
        }
    }
    console.log("Romen form of " + input + " is => " + romen);
}