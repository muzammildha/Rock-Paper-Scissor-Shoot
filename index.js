// Rock Paper Scissor Game
var person1 = "Paper";
var person2 = "Scissor";
if (person1 === person2) {
    console.log("Its a tie");
}
else if ((person1 === "Rock" && person2 === "Scissor") ||
    (person1 === "Scissor" && person2 === "Paper") ||
    (person1 === "Paper" && person2 === "Rock")) {
    console.log("Player 1 Wins!");
}
else {
    console.log("Player 2 Wins!");
}
;
