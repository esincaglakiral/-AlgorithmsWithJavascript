// bir diğer alternatif çözüm:

export const questionMark2 = (str) => {
  // Bu işlemde kullanacağımız iki sayıyı ve toplamı sıfırla
  let num1 = 0;
  let num2 = 0;
  let sum = 0;

  // Dizeyi dolaş
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // Eğer karakter bir rakam ise
    if (!isNaN(char)) {
      // Eğer num2 0 ise, num1'i güncelle
      if (num2 === 0) {
        num1 = parseInt(char);
      } else {
        // Eğer num2 zaten dolu ise, num1 ve num2'yi güncelle ve toplamı hesapla
        num1 = num2;
        num2 = parseInt(char);
        sum = num1 + num2;

        // Eğer toplam 10 ise ve arada 3 soru işareti varsa, true dön
        if (sum === 10 && str.slice(i - 4, i).includes("???")) {
          return true;
        }
      }
    }
  }

  // Eğer hiçbir eşleşme yoksa, false dön
  return false;
};

// Örnek kullanım
console.log(questionMark2("acc?7??sss?3rr1??????5")); // true
console.log(questionMark2("aa6?9")); // false
