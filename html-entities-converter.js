'use strict'

//Convert the characters &, <, >, " (double quote), 
//and ' (apostrophe), in a string to their corresponding HTML entities.

//convertHTML("Hamburgers < Pizza < Tacos") should return 
//Hamburgers &lt; Pizza &lt; Tacos.

let re = /[<>"'&]/g;
let string = "Sixty > twelve";
    
function convert(str) {
  let newStr =  str.replace(re, function( e ) {
      // console.log(e);
      switch (e) {
          case '<':
              return '&lt;';
          case '>':
            return '&gt;'
          case '&':
            return '&amp;'
          case String.fromCharCode(39):
            return '&apos;'
          case '"':
            return '&quot;'
          default:
              return e;
    }
})
  return newStr;
}

console.log(convert(string));
