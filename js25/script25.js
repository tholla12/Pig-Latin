// business logic
function pigLatin(word) {
  let myVowel = /^[^aeiou]+/;
  let myConsonants = str.match(myVowel);
  return myConsonants !== null
    ? word
      .replace(myVowel, "")
      .concat(myConsonants)
      .concat("ay")
    : word.concat("way");

}
