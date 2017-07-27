// Sorry if I am not thorough with explaining things, if you have any questions, please ask!

// So here is a basic thing: you can tell jQuery to find a class by using "$(".classNameHere")"
// Then, you can add any method you want after it. Here, I add .hide()
// to ".thehtmlclass" when the script loads, and right after that
// I make the class ".fadeIn();"" for 2000 milliseconds
// This is what causes the fade in when you load the page
$('.thehtmlclass').hide();
$(".thehtmlclass").fadeIn(2000);
// Remember, this only happens when the script is loaded, so if you have a
// lot of html and css to load before you load the script, you won't see the effects
// until the page has loaded.


// Below, i tell jquery to find an id called "#addSomethingButton" and I put
// the method ".click()" on it. Within that method I call a function.
$("#addSomethingButton").click(function() {
  // During this function, i use
  addText.innerHTML= "This String will be added to id addText";
});



let submittedText = document.getElementById("textinput").value;
youpicked.innerHTML= "Rock";
