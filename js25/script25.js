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

// UI LOGIC
$(document).ready(function () {
  $("#form-one").submit(function (event) {
    event.preventDefault();

    const passage = $("#passage").val()
    $("#sentence-one").text(passage);
    $("#sentence-two").text(pigLatin(passage));
    $(".result").show();
    console.log(passage)
  })
})
