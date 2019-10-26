$(document).ready(function(){
  $("form#nameform").submit(function(event) {
  var someInput = $("input#nameinput").val();

  event.preventDefault();
  });
  $("form#questionform").submit(function(event) {
  var lowVsHigh = $('#question5').val();
  var logicVsDesign = $('#question4').val();

  if (lowVsHigh === true) {
    $(".pythonpanel").show();
    $(".htmlpanel").show();
  } else if (logicVsDesign === false) {
    $(".htmlpanel").show();
  } else if (lowVsHigh === false) {

  }

  // $(function() {
  //      $('#question4').change(function(){
  //          $('.htmlpanel .pythonpanel .assemblypanel').hide();
  //          $('#' + $(this).val()).show();
  //      });
  //  });



  // switch(true) {
  // case (logicVsDesign === false):
  //   $(".htmlpanel").show()
  //   break;
  // case (lowVsHigh === true):
  //   $(".pythonpanel").show()
  //   break;
  // case (lowVsHigh === false):
  //   $(".assemblypanel").show()
  //   break;
  // default:
  //   // code block
  // }
  event.preventDefault();
  });
  $(".pythonpanel").show();
});
