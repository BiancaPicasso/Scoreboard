let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let hScore = 0;
let gScore = 0
function addOne(){
   hScore += 1;
   homeScore.textContent = hScore; 
}

function addThree(){
   hScore += 3;
   homeScore.textContent = hScore; 
}

function addFive(){
   hScore += 5;
   homeScore.textContent = hScore; 
}

function addOneGuest(){
   gScore += 1;
   guestScore.textContent = gScore; 
}

function addThreeGuest(){
   gScore += 3;
   guestScore.textContent = gScore; 
}

function addFiveGuest(){
   gScore += 5;
   guestScore.textContent = gScore; 
}

function newGame() {
    gScore = 0;
    hScore = 0;
    guestScore.textContent = 0;
    homeScore.textContent = 0;
}