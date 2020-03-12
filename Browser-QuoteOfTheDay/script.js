// quotes are stored in an array of objects
var quotes = [{
    "attrib": "Steve Jobs",
    "quote": "Design is not just what it looks like and feels like. Design is how it works."
  }, {
    "attrib": "Steve Jobs",
    "quote": "Innovation distinguishes between a leader and a follower."
  }, {
    "attrib": "Albert Einstein",
    "quote": "Reality is merely an illusion, albeit a very persistent one."
  }, {
    "attrib": "Albert Einstein",
    "quote": "If you can't explain it simply, you don't understand it well enough."
  }, {
    "attrib": "Albert Einstein",
    "quote": "Strive not to be a success, but rather to be of value."
  }, {
    "attrib": "Steve Jobs",
    "quote": "Your time is limited, so don’t waste it living someone else’s life."
  }, {
    "attrib": "Bill Gates",
    "quote": "Success is a lousy teacher. It seduces smart people into thinking they can't lose."
  }, {
    "attrib": "Albert Einstein",
    "quote": "Science without religion is lame, religion without science is blind."
  }, {
    "attrib": "Henry Ford",
    "quote": "Whether you think you can or you think you can’t, you’re right."
  }];
  
  // function to load and display a new quote
  function newQuote() {
    var quoteID = Math.floor(Math.random() * (quotes.length));
    $("#quote").html(quotes[quoteID].quote);
    $("#attrib").html(quotes[quoteID].attrib);
  }
  
  // wait for page load before displaying content
  $(document).ready(function() {
    // load an initial quote
    newQuote();
  
    // retrieve a new quote when the button is clicked
    $("#generateButton").on("click", function() {
      newQuote();
    });
  });