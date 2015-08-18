// Dependencies
var express = require('express');
var qc      = require("../controllers/question-controller.js");

// Create a Router
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET new quiz in JSON */
router.get('/createQuiz', function(req, res, next) {
  console.log("Router: Request recieved for a new quiz with id: " + req.query.id + "!");

  // Use the question controller to build a return a quiz
  qc.createQuiz(req.query.id, function(data) {
    qc.filter(data, 3, false, function(quiz_raw) {
      qc.send(quiz_raw, function(quiz) {
        //console.log(quiz);
        res.json(quiz);
      });
    });
  });
});

/* POST check quiz */
router.post("/checkQuiz", function(req, res, next) {
  console.log("Router: ", req.body[0].categoryID);
  qc.getAllQuestions(req.body[0].categoryID, function(all) {
    qc.mark(req.body, all, function(mark) {
      res.json({
        mark: mark
      });
    });
  });
});

module.exports = router;
