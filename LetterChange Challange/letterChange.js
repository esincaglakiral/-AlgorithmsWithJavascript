export const letterChange = (str) =>{


// 1. aşama: js charcode ve charcodeAt metotlarını kullanacağım için ilk önce
// string içerisindeki harfleri toLowerCase metodu ile küçük harfe çeviririz.
let newString = str.toLowerCase().replace(/[a-z]/gi, (char) => {
  if (char === "z") {
    return "a";
  } else {
    return String.fromCharCode(char.charCodeAt() + 1);
  }
});

// 2. aşama: replace metodu ile harfleri tarıyoruz ve ilk olarak eğer z varsa
// bu değeri hemen a ile değiştiriyoruz. Eğer harfimiz z değilse String.fromCharCode
// ve char.charcodeAt() kullanarak alfabedeki bir sonraki harf ile bu değeri değiştiriyoruz.

let vowelCapitalize = newString.replace(/a|e|i|o|u/gi, (char) =>
  char.toUpperCase()
);

return vowelCapitalize;
}


// Letter Changes
// JavaScript dilini kullanarak, LetterChanges fonksiyonunu yazın. Bu fonksiyon, verilen
// str parametresini alacak ve aşağıdaki algoritmayı kullanarak değiştirecek. Her bir
// harfi, alfabedeki sıradaki harfle değiştirin (örneğin c, d olur, z, a olur). Daha
// sonra bu yeni string içindeki her sesli harfi (a, e, i, o, u) büyük harfe çevirin
// ve nihayetinde bu değiştirilmiş string'i döndürün.
