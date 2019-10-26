$(document).ready(function(){
  $("form#nameform").submit(function(event) {
  var someInput = $("input#nameinput").val();

  event.preventDefault();
  });
  $("form#questionform").submit(function(event) {
  var lowVsHigh = $('#question5').val();
  var logicVsDesign = $('#question4').val();

  if (lowVsHigh === "high") {
    $(".pythonpanel").show();
    $(".htmlpanel").show();
  } else if (logicVsDesign === false) {
    $(".htmlpanel").show();
  } else if (lowVsHigh === "low") {

  }
  event.preventDefault();
  });
  $("button.HorL").click(function(){
    var value = $('#question5').val();
    if (value === "high") {
      $(".htmlpanel").toggle();
      $(".pythonpanel").toggle();
    }else {
      $(".assemblypanel").toggle();
    }
  });

  $("button.LorD").click(function(){
    var value = $('#question4').val();
    if (value === "logic") {
      $(".assemblypanel").show();
      $(".pythonpanel").show();

    }else {
      $(".htmlpanel").show();
    }
  });
});
