var quoteBtn = document.getElementById("quote");
var quoteParag = document.getElementById("quote-parag");
var quoteName = document.getElementById("quote-name");
var quotes = [
  `“Be yourself; everyone else is already taken.”`,
  `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
  `“So many books, so little time.”`,
  `“A room without books is like a body without a soul.”`,
  `“You only live once, but if you do it right, once is enough.”`,
  `“Dont walk in front of me… I may not followDont walk behind me… I may not leadWalk beside me… just be my friend”`,
];
var quotesNames = [
  `― Oscar Wilde`,
  `― Marilyn Monroe`,
  `― Frank Zappa`,
  `― Marcus Tullius Cicero`,
  `― Mae West`,
  `― Albert Camus`,
];
var randomNumbers = Math.floor(Math.random() * quotes.length);

function createQuotes() {
  var num = Math.floor(Math.random() * quotes.length);

  quoteParag.innerHTML = quotes[num];
  quoteName.innerHTML = quotesNames[num];
  return num;
}
