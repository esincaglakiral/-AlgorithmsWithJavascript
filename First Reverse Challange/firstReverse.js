export const firstReverse = (str) => {
  const array = str.split("");
  const reverseArray = array.reverse();
  const newStr = reverseArray.join("");

  return newStr;

  // return str.split("").reverse().join("")   ==> kısa çözüm
};

// Bu kod, firstReverse adlı bir işlev tanımlar. Bu işlev, bir dizeyi ters çevirmek için split, reverse ve join dizge yöntemlerini kullanır. İşte bu işlemlerin adımları:

// str.split(''): İlk olarak, gelen dizeyi karakter dizgesi (string) içindeki her karakteri ayırmak için split('') kullanır. Bu, her karakteri bir diziye ayırır.

// reverse(): Ardından, bu oluşturulan diziyi tersine çevirmek için reverse() yöntemini kullanır. Bu, diziyi ters sıraya dizer.

// join(''): Son olarak, ters çevrilmiş karakterleri tekrar birleştirmek için join('') kullanır. Bu, karakter dizisini birleştirip tersine çevrilmiş dizgeyi oluşturur.
