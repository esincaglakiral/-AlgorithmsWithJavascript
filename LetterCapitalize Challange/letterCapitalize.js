export const letterCapitalize = (str) => {
  let newString = [];
  str.split(" ").forEach((word) => {
    newString.push(word.charAt(0).toUpperCase() + word.slice(1, word.length));
  });

  return newString.join(" ");
};

// Soruda istenen; verilen bir string içerisindeki kelimelerin sadece ilk harflerinin büyütülmesi ve cümleyi bu şekilde return etmem gerek. Ayrıca soruda string oluşturan kelimeler arasında sadece 1 adet boşluk olacaSoruyu çözerken izlediğim adımlar;
// 1 - String'i split metodu kullanarak bir array haline dnüştür ve tanımlanmış olan bir değişkene ata.
// 2 -Array tipinde boş bir değişken tanımla,
// 3 - split() metodu bir array döner. Bu yüzden array içerisinde sırayla gezinebilmemiz için forEach metodu uygula,
// 4 - forEach metodu ile beraber array içerisindeki her kelime üzerinde sırasıyla charAt(), toUpperCase() ve slice() metodlarını uygulayarak, kelimenin önce ilk harfini büyüt sonra ise slice ile 1. index'ten itibaren oluşturulmuş kelimenin geri kalanı ile '+' operator kullanarak birleştir ve ilk başta tanımlanmış olan array tipindeki değişkene push() et.
// 5 - İçi ilk harfleri büyütülmüş kelimelerle doldurulmuş olan array'i join metodu kullanarak aralarında bir adet boşluk kalacak şekilde string'e çevir  ve bu string'i de return et.
