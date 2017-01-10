$(document).ready(function() {
  $("button#bark").click(function() {
    $("ul#dogDialogue").append("<li>BAARK!!!</li>");
  });

  $("button#meow").click(function() {
    $("ul#catDialogue").append("<li>MEEOOOWW!!!</li>");
  });

  $("button#barking").click(function() {
    $("ul#dog-barking").append("<li><img src=\"img/dog-bark.jpg\"></li>");

    $("ul#dog-barking").children("li").last().click(function() {
      $(this).remove();
    });
  });


});
