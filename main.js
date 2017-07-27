// Sorry if I am not thorough with explaining things, if you have any questions, please ask!

// #1: The Fade
// So here I tell jQuery to find a class by using "$(".classNameHere")"
// Then, you can add any method you want after it. Here, I add .hide()
// to ".thehtmlclass" when the script loads, and right after that
// I make the class ".fadeIn();"" for 2000 milliseconds
// This is what causes the fade in when you load the page
// Syntax: $(selector).method();
$('.thehtmlclass').hide();
$(".thehtmlclass").fadeIn(2000);
// Remember, this only happens when the script is loaded, so if you have a
// lot of html and css to load before you load the script, you won't see the effects
// until the page has loaded.


// #2: Adding Text
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

// #3: Adding Text To Class
// This is just like above but using Classes instead of ID's
// Telling jQuery to find a class is no different than telling it to find an ID
$(".addSomethingToClass").click(function() {
  // Now, you need to tell js to find classes in a document.
  // this is done by using: "document.getElementsByClassName('classNameHere')[index#]"
  // notice that this time there is a spot for index numbers. since you can have more
  // than one thing with a class, it has to target which one you want.
  document.getElementsByClassName("addTextClass")[2].innerHTML = "This will be added to the third addTextClass";
});


// #4 Adding To All Classes
// The limitation with above is that you can only target one class item...
// What if you want to change all text in a class?
$(".addToAllClasses").click(function() {
  // Tell jQuery to find all classes named changeAllClasses in html and add something to it!
  // Syntax: $(".classNameHere").html("Text you want to add here ");
  $(".changeAllClasses").html("This will be added to all Classes called changeAllClasses");
});


// #5 Add Input Text
// What if you want to get text that the user typed in?
$("#submitUserText").click(function() {
  // So first, we are going to use document.getElementById("idName").value
  // This Tells js to search the document for things that have an specific id name and
  // retreive their value (as a string) and assign it to a let variable
  let submittedText = document.getElementById("textinput").value;
  // Then, we just use the let that we assigned above to .innerHTML an ID
  userTextOutput.innerHTML= submittedText;
});


// #6 Toggle Add/Remove Class
$("#addClassToThing").click(function() {
// So lets add or remove a class! The class has to already be written in CSS.
// So lets use an If/Else statement to check to see if something has a class.
// First, lets check to see if something has a class.
// in the condition of the if statement, use this selector
// $(selector).hasClass("classNameHere")
  if ($("div:nth-of-type(5) p").hasClass("addRedColor")){
    // So this statement says if the <p> in the 5th div has addRedColor,
    //  then removeClass addRed color on .click
    $("div:nth-of-type(5) p").removeClass("addRedColor")
  } else {
    // If the selected object does not have a class, then this will add the class to it:
    $("div:nth-of-type(5) p").addClass("addRedColor");
  }
});
//There is an easier way to do this, using method ".toggleClass()". You wouldnt have to write an if/else statement.
// $("#addClassToThing").click(function() {
//   $("div:nth-of-type(5) p").toggleClass("addRedColor")
// });


// #7 Multiplication
// We are going to make a calculator that multiplys two numbers! So first we should
// make the function and give it two arguments, and return the multiplication of those arguments
function activateCalculator(x, y){
  return x * y
}
// Okay, now lets make jQuery look for the id button.
$("#multiplyNumbers").click(function() {
// In the HTML, I have two input text boxes with ID's number 1 and number2.
// I am going to tell js to find those and retrieve their values (as a string) and
// assigns them to a let
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
// Now, I am going to make an IF/Else that checks each string to see if they are
// numbers and if they are numbers, innerHTML will send text
  if (isNaN(number1) === true || isNaN(number2) === true){
    multiplicationAnswer.innerHTML = "Only Input Valid Numbers!"
  } else {
// If both are numbers, it will add them to arguments to the function made above, and the function will return the math.
    multiplicationAnswer.innerHTML = activateCalculator(number1, number2);
  }
});
