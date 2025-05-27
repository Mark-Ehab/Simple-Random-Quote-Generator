/*-------------------------------------------------- 
# Global Scope Variables declarations and definition
---------------------------------------------------*/
/* Array of qoute objects */
var qoutes = [
  {
    author: "― Mahatma Gandhi",
    quote: '"Be the change that you wish to see in the world."',
  },
  {
    author: "― Robert Frost",
    quote:
      '"In three words I can sum up everything I\'ve learned about life: it goes on."',
  },
  {
    author: "― Elbert Hubbard",
    quote: '"Do not take life too seriously. You will not get out alive."',
  },
  {
    author: "― Wayne Gretzy",
    quote: '"You miss 100% of the shots you don\'t take."',
  },
  {
    author: "― Frank Sinatra",
    quote: '"The best revenge is massive success."',
  },
  {
    author: "― J.K. Rowling, Harry Potter and the Chamber of Secrets",
    quote:
      '"It is our choices, Harry, that show what we truly are, far more than our abilities."',
  },
  {
    author: "― Albert Einstein",
    quote:
      '"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle."',
  },
];
/* Variable to hold generated random number in last function call */
var lastRandomGeneratedNum = 0;

/* Flag to randomQuoteGenerator function first call occurrence */
var firstCall = 1;

/*--------------------------------------- 
# Functions Definition and Implementation
----------------------------------------*/
/* Random Quote Generator Function */
function randomQuoteGenerator() {
  /* Function Scope Variables declarations and definition */
  var tempRandomGeneratedNum = 0; // Variable to hold generated random number in current function call

  /* Generate random quote from quotes array on each function call */
  tempRandomGeneratedNum = Math.floor(Math.random() * qoutes.length);

  /* Check if currently generated random number is the same as generated random number in last function call */
  while (tempRandomGeneratedNum === lastRandomGeneratedNum) {
    tempRandomGeneratedNum = Math.floor(Math.random() * qoutes.length);
  }

  /* Insert random quote in DOM in Main Section for the first*/
  if (firstCall) {
    document.getElementById(
      "home"
    ).innerHTML += `<p id="quote">${qoutes[tempRandomGeneratedNum].quote}</p>`;
    document.getElementById(
      "home"
    ).innerHTML += `<p id="author">${qoutes[tempRandomGeneratedNum].author}</p>`;

    /* Reset first call flag */
    firstCall = 0;
  } else {
    document.getElementById(
      "quote"
    ).innerText = `${qoutes[tempRandomGeneratedNum].quote}`;
    document.getElementById(
      "author"
    ).innerText = `${qoutes[tempRandomGeneratedNum].author}`;
  }

  /* Assign value of cuurently generated random number to lastRandomGeneratedNum */
  lastRandomGeneratedNum = tempRandomGeneratedNum;
}
