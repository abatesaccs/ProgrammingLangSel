$(document).ready(function(){
  $("form#nameform").submit(function(event) {
  var someInput = $("input#nameinput").val();
  event.preventDefault();
  });

  $("button.submit").click(function(){
    var q3value = $('#question3').val();
    var q4value = $('#question4').val();
    var q5value = $('#question5').val();
    if (q3value === "web") {

      if (q4value === "design" && q5value === "high") {
        $(".csspanel").show();
        $(".software").hide();
        $(".htmlpanel").hide();
      } else if (q4value === "logic" && q5value === "high") {
        $(".htmlpanel").show();
        $(".csspanel").hide();
        $(".software").hide();
      } else if ((q4value === "design" || q4value === "logic") && q5value === "low") {
        $(".software").hide();
        $(".web").hide();
      }

    } else if (q3value === "software") {

      if (q4value === "logic" && q5value === "high") {
        $(".pythonpanel").show();
        $(".processingpanel").hide();
        $(".assemblypanel").hide();
        $(".web").hide();
      } else if (q4value === "logic" && q5value === "low") {
        $(".assemblypanel").show();
        $(".pythonpanel").hide();
        $(".processingpanel").hide();
        $(".web").hide();
      } else if (q4value === "design" && q5value === "high") {
        $(".processingpanel").show();
        $(".assemblypanel").hide();
        $(".pythonpanel").hide();
        $(".web").hide();
      } else {
        $(".software").hide();
        $(".web").hide();
      }

    }

  });
});
