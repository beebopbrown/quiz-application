$(document).ready(function() {

  // Quiz object
  var _QUIZ;

  // Select a random category ID
  var quizCategoryID = 0;//Math.round(Math.random());
  var quiz           = $(".quiz");
  var form           = $("form");

  // Send a GET request to our api to get a new quiz
  $(".start-button").click(function() {
    $.ajax({
      url: "/createQuiz",
      data: {
        id: quizCategoryID
      },
      success: function(data) {
        buildQuiz(data);
      },
      dataType: "json"
    });

    $(this).hide();
    $("#instructions").hide();
  });

  $("body").on('click', '.reset', function(event) {
    event.preventDefault();

    location.reload(true);
  });

  $("form").submit(function(event) {
    //console.log("Form submit attempted");
    event.preventDefault();

    $(this).serializeArray().forEach(function(input) {
      _QUIZ[input.name].userAnswer = input.value;
    });
    //console.log(JSON.stringify(_QUIZ));

    document.getElementById('button-check').style.display = "none";
    processForm(_QUIZ);
  });

  function processForm(quizObj) {
    //console.log("POSTING: " + quizObj);
    var score = 0;
    $("form input").prop('disabled', true);
    $.ajax({
      type: "POST",
      url: "/checkQuiz",
      contentType: "application/json",
      data: JSON.stringify(quizObj),
      success: function(response) {
        //console.log("Response: ", JSON.stringify(response));
        form.append("<div class='u-full-width center score-div'> <h2> Your score is: " + response.mark + "</h2>" +
                    "<button id='reset' class='reset button-primary'> Restart </button></div>");
      },
      dataType: "json"
    });
  }

  function buildQuiz(data) {
    //console.log(JSON.stringify(data));
    //console.log(data.length);
    _QUIZ = data;

    setQuizType(data[0].categoryID);
    var count = 1;
    data.forEach(function(i) {
      buildQuestion(i, count++);
    });
    form.append("<div class='row'> <div class='four columns offset-by-four'> <button id='button-check' class='button-primary u-full-width' type='submit'> Check Answers </button> </div></div>");
  }

  function setQuizType(id) {
    //console.log("Quiz ID type: " + id);
    var quizType = $(".quiz h1");
    if (id === 0)
      quizType.text("Math Quiz!");
    if (id === 1)
      quizType.text("Grammar Quiz");
  }

  function buildQuestion(question, count) {
    //console.log(question);
    if (quizCategoryID === 0) {
      form.append(
        "<label> " + count + ": " + question.questionText + "</label>" +
        "<input class='u-full-width' type='text' name='" + question.questionID + "'>"
      );
    } else if (quizCategoryID === 1) {

    }
  }
});
