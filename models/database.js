var mongoose = require("mongoose");
var Question = require("../models/question");

var connection = mongoose.connect("mongodb://localhost/quiz-app-database");

exports.connection = connection;
exports.Question = Question;
