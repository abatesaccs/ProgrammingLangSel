$(document).ready(function(){
  $("form#nameform").submit(function(event) {
  var someInput = $("input#nameinput").val();

  event.preventDefault();
  });
  var lowVsHigh = $('#question3').val();
  var logicVsDesign = $('#question4').val();
  var catVsDog = $('#question5').val();

  if (true) {

  }

  switch(lowVsHigh, logicVsDesign, catVsDog) {
  case lowVsHigh ^ logicVsDesign ^ catVsDog:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
  }
});
