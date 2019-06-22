'use strict';
//Create a list that holds all of your cards
var cards = [...document.querySelectorAll(".card")];
let deck = document.querySelector(".deck");
let reload = document.querySelector(".restart");
var timeCount = 0;
var moves = 0;
var start = false;
var endCount = 0;
var clicked = [];
var success = [];
var i = 0;
var min = 0;
var sec = 0;
var myVar;
var x;
var star = document.querySelector(".stars");
//Rating function used to give rating to the gamer based on the moves
function rating() {
  if (moves >= 12 && moves <= 18) {
    star.children[2].children[0].className = "fa fa-star-o";
  }
  if (moves > 18) {
    star.children[1].children[0].className = "fa fa-star-o";
  }
}
reload.addEventListener("click", function() {
  window.location.reload();
});
/*
  Display the cards on the page
  - shuffle the list of cards using the provided "shuffle" method below
   - loop through each card and create its HTML
   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
var shuf = shuffle(cards);
shuf.forEach(() => {
  [].forEach.call(cards, list => {
    deck.appendChild(list);
  });
})
for (i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", enable);
}
//enable function used to open and shows what is in the card, inside the enable we called a function rating() which set rating based on the logic which we provide in the enable() function
function enable() {
  if (start == false) {
    start = true;
    timer();
  }
  clicked.push(this);
  this.classList.add("open", "show", "counter");

  if (clicked.length == 2) {
    setTimeout(compare, 300);
    moves = moves + 1;
    document.querySelector(".moves").innerHTML = moves;
    rating();
  }
}
//timer function used to start timecount when the game starts, inside timer function we called another function stoptimer used to stop timecount when the game is done
function timer() {
  myVar = setInterval(function() {
    sec = sec + 1;
    if (sec == 60) {
      sec = 0;
      min = min + 1;
    }
    if (success.length == 16) {
      stoptimer();
    }
    var string = min + ":" + sec
    document.querySelector(".timer").innerHTML = string
  }, 1000);
}
//The function stoptimer() used to stop the timecount when the gamer completes all the game
function stoptimer() {

  clearInterval(myVar);
  swal({
      title: "You won the Game",
      type: "success",
      text: "rating" + ratings() + "\n time:" + min + "minutes:" + sec + "seconds",
      confirmButtonText: "play again"
    },
    function reload() {
      window.location.reload();
    }
  )

}

function ratings() {
  if (moves >= 12 && moves <= 18) {
    x = "⭐⭐";
  } else if (moves > 18) {
    x = "⭐";
  } else {
    x = "⭐⭐⭐";
  }
  return x;
}

//the compare function compares the cards
function compare() {
  if (clicked[0].children[0].className != clicked[1].children[0].className) {
    clicked[0].classList.remove("open", "show", "counter");
    clicked[1].classList.remove("open", "show", "counter");
  } else {
    clicked[0].classList.add("match");
    clicked[1].classList.add("match");
    success.push(clicked[0], clicked[1]);

  }
  clicked.length = 0;
}
