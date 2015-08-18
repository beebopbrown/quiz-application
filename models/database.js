var mongoose = require("mongoose");
var Question = require("../models/question");

var connection = mongoose.connect("mongodb://db-nate:db-jstogether-0@ds035593.mongolab.com:35593/quiz-app-database");

exports.connection = connection;
exports.Question = Question;
