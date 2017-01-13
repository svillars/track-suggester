$("document").ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".main, .col-md-4, button").hide();
    $(".c").hide();
    $(".ruby").hide();
    $(".css").hide();

    var question1 = $("#question1").val();
    var question2 = $("#question2").val();
    var question3 = $("#question3").val();
    var question4 = $("#question4").val();
    var question5 = $("#question5").val();
    var question6 = $("#question6").val();

    if (question2 === "1" && question6 === "1") {
      $(".css").show();
    }
  })
})
