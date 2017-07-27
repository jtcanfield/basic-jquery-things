// Sorry if I am not thorough with explaining things, if you have any questions, please ask!

// #1
// So here I tell jQuery to find a class by using "$(".classNameHere")"
// Then, you can add any method you want after it. Here, I add .hide()
// to ".thehtmlclass" when the script loads, and right after that
// I make the class ".fadeIn();"" for 2000 milliseconds
// This is what causes the fade in when you load the page
// Syntax: $("classOrIdName").method();
$('.thehtmlclass').hide();
$(".thehtmlclass").fadeIn(2000);
// Remember, this only happens when the script is loaded, so if you have a
// lot of html and css to load before you load the script, you won't see the effects
// until the page has loaded.


// #2
// Below, i tell jquery to find an id called "#addSomethingButton" and I put
// the method ".click()" on it. Within that method I call a function.
$("#addSomethingButton").click(function() {
  // During this function, i use the ".innerHTML" method on an ID, and I add a
  // string of text to that id. ".innerHTML" can be added to any ID and
  // use = to put something to it, like a number or String
  // Syntax: idName.innerHTML = "string or numbers"
  addText.innerHTML = "This String will be added to id addText";
});



let submittedText = document.getElementById("textinput").value;
youpicked.innerHTML= "Rock";
