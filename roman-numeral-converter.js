'use strict';

/* Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
*/
 let dictionary = {
     1: 'I',
     2: 'II',
     3: 'III',
     4: 'IV',
     5: 'V',
     6: 'VI',
     7: 'VII',
     8: 'VIII',
     9: 'IX',
     10: 'X',
     20: 'XX',
     30: 'XXX',
     40: 'XL',
     50: 'L',
     60: 'LX',
     70: 'LXX',
     80: 'LXXX',
     90: 'XC',
     100: 'C',
     200: 'CC',
     300: 'CCC',
     400: 'CD',
     500: 'D',
     600: 'DC',
     700: 'DCC',
     800: 'DCCC',
     900: 'CM',
     1000: 'M',
     2000: 'MM',
     3000: 'MMM',
     4000: 'MMMM',
  };
  
  
function convertToRoman(num) {
 let result;

 
 let numberToString = num.toString();
  
  switch (numberToString.length) {
    case 1:
      result = dictionary[numberToString];
      break;
    case 2:
      result = dictionary[numberToString[0] +'0'];
      if (numberToString[1] === '0') {
        console.log('zero found!');
        break;
      } else {
        result = result + dictionary[numberToString[1]];
      }
      break;
    case 3:
      result = dictionary[numberToString[0] +'0'+'0'];
      if (numberToString[1] === '0' && numberToString[2] === '0') {
        break;
      } else if (numberToString[1] !== '0' && numberToString[2] === '0') {
        result = result + dictionary[numberToString[1] + '0'];
        break;
      } else if (numberToString[1] === '0' && numberToString[2] !== '0') {
        result = result + dictionary[numberToString[2]];
        break;
      } else {
        result = result + dictionary[numberToString[1] + '0'] + dictionary[numberToString[2]];
      }
    case 4:
      //X000
      result = dictionary[numberToString[0] + '0' + '0' + '0'];
      if (numberToString[1] === '0' && numberToString[2] === '0' &&
      numberToString[3] === '0') {
        break;
      //X00X
      } else if (numberToString[0] !== '0' && numberToString[1] === '0' &&
      numberToString[2] === '0' && numberToString[3] !== '0') {
        result = result + dictionary[numberToString[3]];
        break;
      //XX00  
      } else if (numberToString[0] !== '0' && numberToString[1] !== '0' &&
      numberToString[2] === '0' && numberToString[3] === '0') {
        result = result + dictionary[numberToString[1] + '0' +'0'];
        break;
      
      //XXX0  
      } else if (numberToString[0] !== '0' && numberToString[1] !== '0' &&
      numberToString[2] !== '0' && numberToString[3] === '0') {
        result = result + dictionary[numberToString[1] +'0'+'0'] + 
        dictionary[numberToString[2] +'0'];
        break;
      //XX0X
      } else if (numberToString[0] !== '0' && numberToString[1] !== '0' &&
      numberToString[2] === '0' && numberToString[3] !== '0') {
        result = result + dictionary[numberToString[1] + '0' +'0'] + 
        dictionary[numberToString[3]];
        break;
      //X0X0
      } else if (numberToString[0] !== '0' && numberToString [1] === '0' &&
      numberToString[2] !== '0' && numberToString[3] === '0') {
        result = result + dictionary[numberToString[2] + '0'];
        break;
      //X0XX  
      } else if (numberToString[0] !== '0' && numberToString[1] === '0' &&
      numberToString[2] !== '0' && numberToString[3] !== '0') { 
        result = result + dictionary[numberToString[2] +'0'] + 
        dictionary[numberToString[3]];
        break;
      // XXXX
      } else {
        result = result + dictionary[numberToString[1] + '0' +'0'] + 
        dictionary[numberToString[2] + '0'] + dictionary[numberToString[3]];
        
      }
      break;
    default:
      console.log('unsupported input');
  }  

return console.log(result);
}

convertToRoman(1023);
