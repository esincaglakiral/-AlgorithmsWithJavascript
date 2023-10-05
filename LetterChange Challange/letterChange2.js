function LetterChanges(str) {
  // Fonksiyonun başında kullanılacak değişkenleri tanımlayalım
  let result = "";
  let vowels = "aeiou";

  // String üzerinde dönerek her bir karakteri işleyelim
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // Eğer karakter bir harf ise işleme başlayalım
    if (char.match(/[a-z]/i)) {
      // Harfin ASCII kodunu alalım
      let charCode = char.charCodeAt(0);

      // Eğer harf z ise a'ya dönelim, aksi takdirde bir sonraki harfe geçelim
      char = charCode === 122 ? "a" : String.fromCharCode(charCode + 1);

      // Eğer yeni harf bir sesli harf ise büyük harfe çevirelim
      if (vowels.includes(char)) {
        char = char.toUpperCase();
      }
    }

    // Sonuç string'ine karakteri ekleyelim
    result += char;
  }

  return result;
}

console.log(LetterChanges("Hello World"));
