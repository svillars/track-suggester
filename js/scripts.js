$("document").ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".button2").fadeIn();
    $(".main, .col-md-4, .button1").hide();
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
      $(".css").fadeIn();
    } else if (ones > twos) {
      $(".ruby").fadeIn();
    } else {
      $(".c").fadeIn();
    }
  });

  $(".btn").click(function() {
    $(".button2").hide();
    $(".main, .col-md-4, .button1").fadeIn();
    $(".c").hide();
    $(".ruby").hide();
    $(".css").hide();
  })
})
