// bir diğer alternatif çözüm:

export const findIntersection2 = (array) => {
  // 1. olarak yeni bir array tipinde değişken tanımlayalım
  let intersection = [];

  // 2. olarak split(), replace()
  const kume1 = array[0].replace(/\s/g, "").split(",");
  const kume2 = array[1].replace(/\s/g, "").split(",");

  // 3. olarak forEach() kullanarak bütün array içerisindeki karakterlerin diğer array içerisinde olup olmadığını kontrol edicez. Varsa tanımladığımız  yeni array değişkeni içerisine bu değeri koyucaz

  kume2.forEach((item) => {
    if (kume1.includes(item)) {
      intersection.push(item);
    }
  });

  // 4. olarak tanımlamış olduğumuz array boşsa return false boş değilse de arry içindeki değerleri string halinde döner

  if (intersection.length != 0) {
    return intersection.toString();
  } else {
    return false;
  }
};
