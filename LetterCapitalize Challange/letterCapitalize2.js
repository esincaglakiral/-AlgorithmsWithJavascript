function capitalizeSentence(sentence) {
  const words = sentence.split(" "); // Cümleyi boşluklara göre ayırdım
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  ); // Her kelimenin ilk harfini büyüttüm
  const result = capitalizedWords.join(" "); // Büyütülmüş kelimeleri birleştirdim ve boşlukla ayırdım

  return result;
}

const exampleSentence = "merhaba dünya! javascript çok eğlenceli";
const result = capitalizeSentence(exampleSentence);
console.log(result);
