export const findIntersection = (strArr) => {
  // İlk adım olarak, strArr dizisini boşluk karakterine göre bölelim ve iki dizi elde edelim.
  const arr1 = strArr[0].split(", ");
  const arr2 = strArr[1].split(", ");

  // Ortak değerleri bulmak için bir döngü kullanalım.
  const intersection = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        intersection.push(arr1[i]);
        break; // Ortak bir değer bulduğumuzda, bir sonraki değeri kontrol etmeye gerek yok.
      }
    }
  }

  // Eğer ortak değerler bulunmamışsa -1 döndürelim, aksi takdirde ortak değerleri virgülle birleştirip döndürelim.
  return intersection.length > 0 ? intersection.join(",") : -1;

};

// Fonksiyonu test edelim:
// console.log(findIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"])); // Sonucu "1,4,13" olarak döndürecek.
// console.log(findIntersection(["1, 2, 3, 4, 5", "6, 7, 8, 9, 10"])); // Sonucu -1 olarak döndürecek.
