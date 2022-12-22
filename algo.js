function WordCount(str) {
  var character = 0;

  for (i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      character += 1;
    }
  }

  // const character = str.match(/[a-z$&+,:;=?@#|'<>.-^*()%!_]/gi).length; - anotherway to solve character problem

  const numOfVowels = str.match(/[aeiou]/gi).length;

  const numOfWords = str.split(" ").length;

  return (
    "There are " +
    numOfVowels +
    " numbers of vowels, " +
    character +
    " numbers of character, and " +
    numOfWords +
    " numbers of words in this sentence"
  );
}

console.log(WordCount("Are You Good enough in Algorithms? Prove it!"));
