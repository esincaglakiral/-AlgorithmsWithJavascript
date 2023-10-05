export const runLength = (str) => {
  let object = {};
  let newString = "";

  for (let i = 0; i < str.length; i++) {
    str[i] in object
      ? (object[str[i]] = object[str[i]] + 1)
      : (object[str[i]] = 1);
  }

  for (let i = 0; i < Object.keys(object).length; i++) {
    newString += Object.values(object)[i];
    newString += Object.keys(object)[i];
  }

  return newString;
};

/*
    For this challange you will determine the Run Length Encoding of a string. Have the function RunLength(str)
    take the str parameter being passed and return a compressed version of the string using the Run-Length encoding 
    algortihm. This algorithm works by taking the occurrance of each repeating character and outputting that number
    along with a single character of the repeating sequence.

    For example : "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.

*/
