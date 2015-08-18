// We need these from mongoose to create a DB schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Define the question schema
var questionSchema = new Schema({
  categoryID: Number,
  questionID: Number,
  questionText: String,
  questionAnswer: String,
  options: Object
});

// Create the schema
var Question = mongoose.model('Question', questionSchema);

// Export the schema
module.exports = Question;

/* [{
	categoryID: 0,
	questionID: 0,
	questionText: "How many numbers between 0 and 100 are divisible by both 6 and 8?",
	questionAnswer: "4"
},
{
	categoryID: 0,
	questionID: 1,
	questionText: "If you add the numerical value of all seven Roman numerals, what is the sum?",
	questionAnswer: "1666"
},
{
	categoryID: 0,
	questionID: 2,
	questionText: "In how many different ways can a poker player form a straight flush from a normal deck of 52 cards, no wild cards?",
	questionAnswer: "36"
},
{
	categoryID: 0,
	questionID: 3,
	questionText: "If you draw one card from a normal deck of cards, what is the mathematical probability of drawing a jack, queen, king, or diamond? (In percentage, no decimal)",
	questionAnswer: "42%"
},
{
	categoryID: 0,
	questionID: 4,
	questionText: "If the population of a city grows at 10% per year, it will double in approximately how many years? (to nearest year)",
	questionAnswer: "7"
}]
*/
