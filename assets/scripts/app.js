const rockBtn = document.getElementById('rock-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const paperBtn = document.getElementById('paper-btn');
const logBtn = document.getElementById('log-btn');

let winlog = []

function writinglog(plv, clv, winn)
{
    let enteries ={
        Player : plv,
        Computer : clv,
        Result : winn
    }
    winlog.push(enteries)
}

const getcval = () => {
    const ranvalue = Math.random();
    if (ranvalue < 0.34) {
      return "Rock";
    } else if (ranvalue < 0.67) {
      return "Paper";
    } else {
      return "Scissors";
    }
  };

let decide = pl =>
{
    let pval = pl
    let cval = getcval()
    let getWinner = "ME"
    getWinner =
    cval === pval
    ? "DRAW"
    : (cval == "Rock" && pval == "Paper") ||
      (cval == "Paper" && pval == "Scissors") ||
      (cval === "Scissors" && pval == "Rock")
    ? "Player Won"
    : "Computer Won";

    alert(`#${getWinner}`)
    writinglog(pval,cval,getWinner)
}

const showlog = () => 
{
    console.clear()
    alert('Check the console')
    console.log(winlog)
}

rockBtn.addEventListener('click' , () => decide("Rock"))
scissorsBtn.addEventListener('click' , () => decide("Scissors"))
paperBtn.addEventListener('click' , () => decide("Paper"))
logBtn.addEventListener('click', showlog)