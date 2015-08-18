var database = require("../models/database");

exports.createQuiz = function(id, callback) {
  database.Question.find({
    categoryID: id
  }, function(error, results) {
    if(error) { console.log(error); }
    else { return callback(results); }
  });
};

exports.filter = function(array, count, random, callback) {
  if(!random) {
    callback(array.slice(0,count));
  } else {
    callback({});
  }
};

exports.send = function(array, callback) {
  var quiz = [];

  array.forEach(function(question) {
    quiz.push({
      categoryID: question.categoryID,
      questionID: question.questionID,
      questionText: question.questionText,
      options: question.options || null
    });
  });

  callback(quiz);
};

exports.getAllQuestions = function(categoryID, callback) {
  database.Question.find({
    categoryID: categoryID
  }, function(_, result) {
    callback(result);
  });
};

exports.mark = function(userQuiz, questions, callback) {
  var score = 0;
  userQuiz.forEach(function(userQuestion) {
    console.log("Marker: ", typeof(userQuestion.userAnswer), userQuestion.userAnswer , ":",
                            typeof(questions[userQuestion.questionID].questionAnswer), questions[userQuestion.questionID].questionAnswer, ":",
    (userQuestion.userAnswer == questions[userQuestion.questionID].questionAnswer));
    if (userQuestion.userAnswer == questions[userQuestion.questionID].questionAnswer)
      score++;
  });
  callback(score);
};
