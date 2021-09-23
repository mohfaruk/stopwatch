var milliSecs = 0; //sets time conventions to zero
var secs = 0;
var mins = 0;

let timer; //global variable that will determine what time stopwatch starts and stops

var timerDisplay = document.getElementById("timer"); //retrieves id where stopwatch is displayed

function startTimer() {
  clearInterval(timer); //prevents timer speeding up when start button clicked

  timer = setInterval(function () {
    //add to milliseconds when function executes
    //once milliseconds reaches 100, reset to zero and add 1 to seconds
    //reach 100 instead of 1000 as it displays unnecesary digit in html
    milliSecs += 1;
    if (milliSecs >= 100) {
      milliSecs = 0;
      secs++;
      //once seconds reach 60, reset to zero and add 1 to minutes
      if (secs >= 60) {
        secs = 0;
        mins++;
      }
    }
    //ternary operator dictates if time convention is less than 9 then add a string of '0' before number variable to display
    timerDisplay.innerHTML =
      (mins ? (mins > 9 ? mins : "0" + mins) : "00") +
      ":" +
      (secs ? (secs > 9 ? secs : "0" + secs) : "00") +
      ":" +
      (milliSecs > 9 ? milliSecs : "0" + milliSecs);
  }, 10);
}

function resetTimer() {
  //returns times back to 00:00
  setInterval(timer); //resets but carries on if not stopped
  milliSecs = 0; //returns timer back to zero
  secs = 0;
  mins = 0;
  //timerContent = '0' + mins + ':' + '0' + secs; //default timer
  timerDisplay.innerHTML = "00" + ":" + "00" + ":" + "00";
}

function stopTimer() {
  //stops timer at current standpoint
  clearInterval(timer);
}
