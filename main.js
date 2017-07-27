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
  // note: This will only work on IDs, Ill show change classes next.
  // Syntax: idName.innerHTML = "string or numbers"
  addText.innerHTML = "This String will be added to id addText";
});

// #3
// This is just like above but using Classes instead of ID's
// Telling jQuery to find a class is no different than telling it to find an ID
$(".addSomethingToClass").click(function() {
  // Now, you need to tell jQuery to find classes in a document.
  // this is done by using: "document.getElementsByClassName('classNameHere')[index#]"
  // notice that this time there is a spot for index numbers. since you can have more
  // than one thing with a class, it has to target which one you want.
  document.getElementsByClassName("addTextClass")[2].innerHTML = "This will be added to the third addTextClass";
});


// #4
// The limitation with above is that you can only target one class item...
// What if you want to change all text in a class?
$(".addToAllClasses").click(function() {
  // Tell jQuery to find all classes named changeAllClasses in html and add something to it!
  // Syntax: $(".classNameHere").html("Text you want to add here ");
  $(".changeAllClasses").html("This will be added to all Classes called changeAllClasses");
});




let submittedText = document.getElementById("textinput").value;
youpicked.innerHTML= "Rock";
