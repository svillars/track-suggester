$("document").ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".main, .col-md-4, button").hide();
    $(".c").hide();
    $(".ruby").hide();
    $(".css").hide();

    var question1 = parseInt($("#question1").val());
    var question2 = parseInt($("#question2").val());
    var question3 = parseInt($("#question3").val());
    var question4 = parseInt($("#question4").val());
    var question5 = parseInt($("#question5").val());
    var question6 = parseInt($("#question6").val());

    var ones = 0;
    var twos = 0;

    if (question1 === 1) {
      ones += 1;
    } if (question3 === 1) {
      ones += 1;
    } if (question4 === 1) {
      ones += 1;
    } if (question5 === 1) {
      ones += 1;
    } if (question1 === 2) {
      twos += 1;
    } if (question3 === 2) {
      twos += 1;
    } if (question4 === 2) {
      twos += 1;
    } if (question5 === 2) {
      twos += 1;
    }

    if (question2 === 1 && question6 === 1) {
      $(".css").show();
    } else if (ones > twos) {
      $(".ruby").show();
    } else {
      $(".c").show();
    }
  })
})
