export const longestWord = (str) => {
  const array = str.replace(/[^a-zA-Z]/g, "").split(" ");
  array.sort((a, b) => {
    return b.length - a.length;
  });
  return array[0];

  // 1. adım: noktalama işaretlerini kaldır:
  // 2. adım: cümleyi boşluklardan bölüp, kelimelerle bir array oluştur
  // 3. adım: kelimelerle oluşturduğumuz arrayi, kelimelerin karakter sayılarına göre azalan bir şekilde sıralamak
  // 4. adım: en başta yani 0. indekste yer alan kelimeyi return etmek
};

/* 
Longest Word

- Using the JavaScript language, have the function LongestWord(str) take the str
parameter being passed and return the largest word in the string.

- If there are two or more words that are the same length, return the first word 
from the string with that lenght.

- Ignore punctuation and assume str will not be empty.

*/
