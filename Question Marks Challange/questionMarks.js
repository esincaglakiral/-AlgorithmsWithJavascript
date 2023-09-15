export const questionMark = (str) => {
  // 1. olarak str >= 5 kontrol edelim

  if (str.length < 5) {
    return false;
  }

  // 2. olarak ? işareti ve rakam olmayan tüm değerleri temizeyelim

  const newStr = str.replace(/[^0-9?]/g, "");

  // 3. olarak forEach için string  -> array'a çevir

  const arr = newStr.split("");

  // 4. olarak forEach içerisinde kullanılacak değişkenleri (sums, sum, iterator) tanımlanması

  let sums = [];
  let sum = 0;
  let iterator = 0;

  // 5. olarak forEach döngüsü ile her bir rakam ve kendisinden sonraki 4. karakterin toplanarak sum değişkenine eşitlenmesi ve sonrada bu değerin sums array'ine eklenmesi

  arr.forEach((item) => {
    if (item != "?") {
      sum = parseInt(item) + parseInt(arr[iterator + 4]);
      sums.push(sum);
    }
    iterator += 1;
  });

  console.log(str);
  console.log(newStr);
  console.log(sums);

  // 6. olarak sums array'i içerisinde 10 değeri varsa true, yoksa false değerin dönülmesi

  return sums.includes(10) ? true : false;
};

// Verilen bir karakter dizisinde herhangi iki rakam arasında tam olarak üç soru işareti ("?") olup olmadığını kontrol etmek.
// Eğer bu koşul sağlanıyorsa, bu iki rakam arasındaki rakamların toplamının 10 olduğunu da kontrol etmek.
// Bu koşulların tümü sağlanıyorsa, sonuç "true" olmalı, aksi takdirde "false" olmalı.
