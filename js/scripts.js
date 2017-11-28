$(document).ready(function() {
  $("button[name='Meow']").click(function() {
    $("ul#meow").prepend("<li id='cat'><img src='img/cat.jpg' alt='Picture of a ferocius Kitty.'></li>");
    // $("ul#meow").prepend("<li>Meeeeeeeooooooowwwwww!!!!!!!</li>");
    // alert("BORK!");
    $("ul#bork").prepend("<li id='dog'>BORK!</li>");
    $("li#cat").click(function() {
      $(this).remove();
    });
    $("li#dog").click(function() {
      $(this).remove();
    });
  });
  $("button[name='Bork']").click(function() {
    $("ul#bork").prepend("<li id='dog'><img src='img/dog.jpg' alt='Picture of  Doggo.'></li>")
    // $("ul#bork").prepend("<li>bork!</li>");
    // alert("Meeeeeeeooooooowwwwww!!!!!!!");
    $("ul#meow").prepend("<li id='cat'>MRAAAAAW!!!!</li>");
    $("li#cat").click(function() {
      $(this).remove();
    });
    $("li#dog").click(function() {
      $(this).remove();
    });
  });
});
