$(document).ready(function() {
  $("button#bark").click(function() {
    $("ul#dogDialogue").append("<li>BAARK!!!</li>");
  });

  $("button#meow").click(function() {
    $("ul#catDialogue").append("<li>MEEOWWW!!!</li>");
  });

});
